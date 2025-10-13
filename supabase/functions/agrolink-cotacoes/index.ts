import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  try {
    // IDs dos produtos principais do Agrolink:
    // 11 = Boi Gordo, 2161 = Leite, 1090 = Milho, 9 = Soja
    const url = 'https://selos.agrolink.com.br/selos/carregaselo?servico=cotacoes&uf=9842&p=11,2161,1090,9&l=&esp=&cor=rgb(30,106,30)&w=300&h=200';
    
    const response = await fetch(url);
    const html = await response.text();
    
    // Parse HTML para extrair dados
    const cotacoes: Array<{
      name: string;
      last: number;
      change: number;
      percent: number;
    }> = [];
    
    // Regex para encontrar linhas da tabela com produto e preço
    const rowRegex = /<tr[^>]*>[\s\S]*?<td[^>]*>(.*?)<\/td>[\s\S]*?<td[^>]*>([\d.]+)<\/td>/g;
    let match;
    
    while ((match = rowRegex.exec(html)) !== null) {
      const name = match[1].trim();
      const price = parseFloat(match[2]);
      
      if (name && !isNaN(price)) {
        // Normalizar nomes
        let normalizedName = name;
        if (name.includes('Boi') || name === 'RO') normalizedName = 'Boi Gordo';
        else if (name.includes('Leite')) normalizedName = 'Leite';
        else if (name.includes('Milho')) normalizedName = 'Milho';
        else if (name.includes('Soja')) normalizedName = 'Soja';
        else if (name.includes('Café')) normalizedName = 'Café';
        else if (name.includes('Açúcar')) normalizedName = 'Açúcar';
        
        cotacoes.push({
          name: normalizedName,
          last: price,
          change: 0, // Agrolink não fornece variação direta
          percent: 0
        });
      }
    }
    
    console.log('Cotações extraídas:', cotacoes);
    
    return new Response(
      JSON.stringify(cotacoes),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200,
      }
    );
  } catch (error) {
    console.error('Erro ao buscar cotações:', error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 500,
      }
    );
  }
});

import React, { useState, useEffect } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/hooks/useAuth';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ImageUpload } from '@/components/admin/ImageUpload';
import { toast } from '@/hooks/use-toast';
import { ArrowLeft, Save } from 'lucide-react';

interface AnuncioFormData {
  titulo: string;
  descricao: string;
  preco: string;
  categoria: string;
  imagens: string[];
  ativo: boolean;
}

const categoriaOptions = [
  { value: 'imoveis_rurais', label: 'Imóveis Rurais' },
  { value: 'veiculos', label: 'Veículos' },
  { value: 'energia_solar', label: 'Energia Solar' },
  { value: 'astec_assessoria', label: 'Astec Assessoria' },
  { value: 'maquinas_agricolas', label: 'Máquinas Agrícolas' },
  { value: 'outros', label: 'Outros' }
];

export const AnuncioForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { profile } = useAuth();
  const isEdit = !!id;

  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState<AnuncioFormData>({
    titulo: '',
    descricao: '',
    preco: '',
    categoria: 'outros',
    imagens: [],
    ativo: true
  });

  useEffect(() => {
    if (isEdit) {
      fetchAnuncio();
    }
  }, [id]);

  const fetchAnuncio = async () => {
    if (!id) return;

    try {
      const { data, error } = await supabase
        .from('anuncios')
        .select('*')
        .eq('id', id)
        .single();

      if (error) throw error;

      setFormData({
        titulo: data.titulo || '',
        descricao: data.descricao || '',
        preco: data.preco?.toString() || '',
        categoria: data.categoria || '',
        imagens: data.imagens || [],
        ativo: data.ativo
      });
    } catch (error: any) {
      toast({
        title: "Erro",
        description: "Não foi possível carregar o anúncio.",
        variant: "destructive"
      });
      navigate('/admin/anuncios');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!profile) return;

    setLoading(true);

    try {
      const anuncioData = {
        titulo: formData.titulo,
        descricao: formData.descricao,
        preco: formData.preco ? parseFloat(formData.preco) : null,
        categoria: formData.categoria,
        imagens: formData.imagens,
        ativo: formData.ativo,
        usuario_id: profile.user_id
      };

      if (isEdit) {
        const { error } = await supabase
          .from('anuncios')
          .update(anuncioData)
          .eq('id', id);

        if (error) throw error;

        toast({
          title: "Sucesso",
          description: "Anúncio atualizado com sucesso!"
        });
      } else {
        const { error } = await supabase
          .from('anuncios')
          .insert([anuncioData]);

        if (error) throw error;

        toast({
          title: "Sucesso",
          description: "Anúncio criado com sucesso!"
        });
      }

      navigate('/admin/anuncios');
    } catch (error: any) {
      toast({
        title: "Erro",
        description: error.message,
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  const handleImageUpload = (url: string) => {
    setFormData(prev => ({
      ...prev,
      imagens: [...prev.imagens, url]
    }));
  };

  const handleImageRemove = (url: string) => {
    setFormData(prev => ({
      ...prev,
      imagens: prev.imagens.filter(img => img !== url)
    }));
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center gap-4 mb-6">
        <Button variant="outline" asChild>
          <Link to="/admin/anuncios">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Voltar
          </Link>
        </Button>
        <h1 className="text-3xl font-bold">
          {isEdit ? 'Editar Anúncio' : 'Novo Anúncio'}
        </h1>
      </div>

      <Card className="max-w-2xl">
        <CardHeader>
          <CardTitle>
            {isEdit ? 'Editar Anúncio' : 'Criar Novo Anúncio'}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="titulo">Título *</Label>
              <Input
                id="titulo"
                value={formData.titulo}
                onChange={(e) => setFormData(prev => ({ ...prev, titulo: e.target.value }))}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="categoria">Categoria</Label>
              <Input
                id="categoria"
                value={formData.categoria}
                onChange={(e) => setFormData(prev => ({ ...prev, categoria: e.target.value }))}
                placeholder="Ex: Eletrônicos, Automóveis, Casa"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="preco">Preço (R$)</Label>
              <Input
                id="preco"
                type="number"
                step="0.01"
                value={formData.preco}
                onChange={(e) => setFormData(prev => ({ ...prev, preco: e.target.value }))}
                placeholder="0.00"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="descricao">Descrição</Label>
              <Textarea
                id="descricao"
                value={formData.descricao}
                onChange={(e) => setFormData(prev => ({ ...prev, descricao: e.target.value }))}
                rows={4}
                placeholder="Descreva seu anúncio..."
              />
            </div>

            <ImageUpload
              bucket="anuncios"
              onUpload={handleImageUpload}
              onRemove={handleImageRemove}
              images={formData.imagens}
              multiple={true}
              maxFiles={5}
            />

            <div className="flex items-center space-x-2">
              <Switch
                id="ativo"
                checked={formData.ativo}
                onCheckedChange={(checked) => setFormData(prev => ({ ...prev, ativo: checked }))}
              />
              <Label htmlFor="ativo">Anúncio ativo</Label>
            </div>

            <Button type="submit" disabled={loading} className="w-full">
              {loading ? 'Salvando...' : (
                <>
                  <Save className="mr-2 h-4 w-4" />
                  {isEdit ? 'Atualizar' : 'Criar'} Anúncio
                </>
              )}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  ArrowLeft, 
  Plus, 
  Edit2, 
  Trash2, 
  Eye,
  Calendar,
  FileText
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface Noticia {
  id: string;
  titulo: string;
  conteudo: string;
  imagem_capa: string | null;
  publicado: boolean;
  data_publicacao: string;
  autor_id: string;
}

export const NoticiasList = () => {
  const [noticias, setNoticias] = useState<Noticia[]>([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    fetchNoticias();
  }, []);

  const fetchNoticias = async () => {
    try {
      const { data, error } = await supabase
        .from('noticias')
        .select('*')
        .order('data_publicacao', { ascending: false });

      if (error) throw error;
      setNoticias(data || []);
    } catch (error) {
      console.error('Erro ao carregar notícias:', error);
      toast({
        title: "Erro",
        description: "Não foi possível carregar as notícias.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Tem certeza que deseja excluir esta notícia?')) return;

    try {
      const { error } = await supabase
        .from('noticias')
        .delete()
        .eq('id', id);

      if (error) throw error;
      
      setNoticias(prev => prev.filter(noticia => noticia.id !== id));
      toast({
        title: "Sucesso!",
        description: "Notícia excluída com sucesso.",
      });
    } catch (error) {
      console.error('Erro ao excluir notícia:', error);
      toast({
        title: "Erro",
        description: "Não foi possível excluir a notícia.",
        variant: "destructive",
      });
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background p-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-center h-64">
            <p>Carregando notícias...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background p-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            <Button variant="outline" asChild>
              <Link to="/admin/dashboard">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Voltar
              </Link>
            </Button>
            <h1 className="text-3xl font-bold">Gerenciar Notícias</h1>
          </div>
          <Button asChild>
            <Link to="/admin/noticias/nova">
              <Plus className="mr-2 h-4 w-4" />
              Nova Notícia
            </Link>
          </Button>
        </div>

        {noticias.length === 0 ? (
          <Card>
            <CardContent className="p-8 text-center">
              <FileText className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
              <h3 className="text-lg font-semibold mb-2">Nenhuma notícia encontrada</h3>
              <p className="text-muted-foreground mb-4">
                Comece criando sua primeira notícia.
              </p>
              <Button asChild>
                <Link to="/admin/noticias/nova">
                  <Plus className="mr-2 h-4 w-4" />
                  Criar primeira notícia
                </Link>
              </Button>
            </CardContent>
          </Card>
        ) : (
          <div className="grid gap-6">
            {noticias.map((noticia) => (
              <Card key={noticia.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="space-y-2">
                      <CardTitle className="line-clamp-2">{noticia.titulo}</CardTitle>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center">
                          <Calendar className="mr-1 h-3 w-3" />
                          {new Date(noticia.data_publicacao).toLocaleDateString('pt-BR')}
                        </div>
                        <Badge variant={noticia.publicado ? "default" : "secondary"}>
                          {noticia.publicado ? 'Publicado' : 'Rascunho'}
                        </Badge>
                      </div>
                    </div>
                    {noticia.imagem_capa && (
                      <img
                        src={noticia.imagem_capa}
                        alt={noticia.titulo}
                        className="w-20 h-20 rounded-md object-cover"
                      />
                    )}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground line-clamp-3 mb-4">
                    {noticia.conteudo}
                  </p>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" asChild>
                      <Link to={`/admin/noticias/${noticia.id}/editar`}>
                        <Edit2 className="mr-2 h-3 w-3" />
                        Editar
                      </Link>
                    </Button>
                    {noticia.publicado && (
                      <Button variant="outline" size="sm" asChild>
                        <Link to="/noticias">
                          <Eye className="mr-2 h-3 w-3" />
                          Visualizar
                        </Link>
                      </Button>
                    )}
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => handleDelete(noticia.id)}
                      className="text-destructive hover:text-destructive"
                    >
                      <Trash2 className="mr-2 h-3 w-3" />
                      Excluir
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
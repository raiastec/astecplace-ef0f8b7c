import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { ImageUpload } from '@/components/admin/ImageUpload';
import { ArrowLeft, Save } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface NoticiaData {
  titulo: string;
  conteudo: string;
  imagem_capa: string;
  publicado: boolean;
}

export const NoticiaForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { profile } = useAuth();
  const { toast } = useToast();
  const isEditing = !!id;

  const [formData, setFormData] = useState<NoticiaData>({
    titulo: '',
    conteudo: '',
    imagem_capa: '',
    publicado: false
  });
  
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (isEditing) {
      fetchNoticia();
    }
  }, [id]);

  const fetchNoticia = async () => {
    try {
      const { data, error } = await supabase
        .from('noticias')
        .select('*')
        .eq('id', id)
        .single();

      if (error) throw error;
      
      setFormData({
        titulo: data.titulo,
        conteudo: data.conteudo,
        imagem_capa: data.imagem_capa || '',
        publicado: data.publicado
      });
    } catch (error) {
      console.error('Erro ao carregar notícia:', error);
      toast({
        title: "Erro",
        description: "Não foi possível carregar a notícia.",
        variant: "destructive",
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!profile?.user_id) return;

    setLoading(true);

    try {
      const noticiaData = {
        ...formData,
        autor_id: profile.user_id,
        imagem_capa: formData.imagem_capa || null
      };

      if (isEditing) {
        const { error } = await supabase
          .from('noticias')
          .update(noticiaData)
          .eq('id', id);

        if (error) throw error;
        
        toast({
          title: "Sucesso!",
          description: "Notícia atualizada com sucesso.",
        });
      } else {
        const { error } = await supabase
          .from('noticias')
          .insert(noticiaData);

        if (error) throw error;
        
        toast({
          title: "Sucesso!",
          description: "Notícia criada com sucesso.",
        });
      }

      navigate('/admin/noticias');
    } catch (error) {
      console.error('Erro ao salvar notícia:', error);
      toast({
        title: "Erro",
        description: "Não foi possível salvar a notícia.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleImageUpload = (url: string) => {
    setFormData(prev => ({
      ...prev,
      imagem_capa: url
    }));
  };

  return (
    <div className="min-h-screen bg-background p-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-6">
          <Button variant="outline" onClick={() => navigate('/admin/noticias')}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Voltar
          </Button>
          <h1 className="text-3xl font-bold">
            {isEditing ? 'Editar Notícia' : 'Nova Notícia'}
          </h1>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Informações Básicas</CardTitle>
              <CardDescription>
                Preencha os dados principais da notícia
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="titulo">Título *</Label>
                <Input
                  id="titulo"
                  value={formData.titulo}
                  onChange={(e) => setFormData(prev => ({ ...prev, titulo: e.target.value }))}
                  placeholder="Título da notícia"
                  required
                />
              </div>

              <div>
                <Label htmlFor="conteudo">Conteúdo *</Label>
                <Textarea
                  id="conteudo"
                  value={formData.conteudo}
                  onChange={(e) => setFormData(prev => ({ ...prev, conteudo: e.target.value }))}
                  placeholder="Conteúdo da notícia..."
                  rows={10}
                  required
                />
              </div>

              <div className="flex items-center space-x-2">
                <Switch
                  id="publicado"
                  checked={formData.publicado}
                  onCheckedChange={(checked) => setFormData(prev => ({ ...prev, publicado: checked }))}
                />
                <Label htmlFor="publicado">Publicar notícia</Label>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Imagem de Capa</CardTitle>
              <CardDescription>
                Adicione uma imagem de capa para a notícia (opcional)
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ImageUpload
                bucket="noticias"
                onUpload={handleImageUpload}
                images={formData.imagem_capa ? [formData.imagem_capa] : []}
              />
            </CardContent>
          </Card>

          <div className="flex gap-4">
            <Button 
              type="submit" 
              disabled={loading}
              className="flex-1"
            >
              <Save className="mr-2 h-4 w-4" />
              {loading ? 'Salvando...' : (isEditing ? 'Atualizar' : 'Criar')} Notícia
            </Button>
            <Button 
              type="button" 
              variant="outline"
              onClick={() => navigate('/admin/noticias')}
            >
              Cancelar
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};
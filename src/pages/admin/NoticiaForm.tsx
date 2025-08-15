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
import { ImageUpload } from '@/components/admin/ImageUpload';
import { toast } from '@/hooks/use-toast';
import { ArrowLeft, Save } from 'lucide-react';

interface NoticiaFormData {
  titulo: string;
  conteudo: string;
  imagem_capa: string;
  publicado: boolean;
}

export const NoticiaForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { profile } = useAuth();
  const isEdit = !!id;

  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState<NoticiaFormData>({
    titulo: '',
    conteudo: '',
    imagem_capa: '',
    publicado: false
  });

  useEffect(() => {
    if (isEdit) {
      fetchNoticia();
    }
  }, [id]);

  const fetchNoticia = async () => {
    if (!id) return;

    try {
      const { data, error } = await supabase
        .from('noticias')
        .select('*')
        .eq('id', id)
        .single();

      if (error) throw error;

      setFormData({
        titulo: data.titulo || '',
        conteudo: data.conteudo || '',
        imagem_capa: data.imagem_capa || '',
        publicado: data.publicado
      });
    } catch (error: any) {
      toast({
        title: "Erro",
        description: "Não foi possível carregar a notícia.",
        variant: "destructive"
      });
      navigate('/admin/noticias');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!profile) return;

    setLoading(true);

    try {
      const noticiaData = {
        titulo: formData.titulo,
        conteudo: formData.conteudo,
        imagem_capa: formData.imagem_capa,
        publicado: formData.publicado,
        autor_id: profile.user_id
      };

      if (isEdit) {
        const { error } = await supabase
          .from('noticias')
          .update(noticiaData)
          .eq('id', id);

        if (error) throw error;

        toast({
          title: "Sucesso",
          description: "Notícia atualizada com sucesso!"
        });
      } else {
        const { error } = await supabase
          .from('noticias')
          .insert([noticiaData]);

        if (error) throw error;

        toast({
          title: "Sucesso",
          description: "Notícia criada com sucesso!"
        });
      }

      navigate('/admin/noticias');
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
      imagem_capa: url
    }));
  };

  const handleImageRemove = () => {
    setFormData(prev => ({
      ...prev,
      imagem_capa: ''
    }));
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center gap-4 mb-6">
        <Button variant="outline" asChild>
          <Link to="/admin/noticias">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Voltar
          </Link>
        </Button>
        <h1 className="text-3xl font-bold">
          {isEdit ? 'Editar Notícia' : 'Nova Notícia'}
        </h1>
      </div>

      <Card className="max-w-4xl">
        <CardHeader>
          <CardTitle>
            {isEdit ? 'Editar Notícia' : 'Criar Nova Notícia'}
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
              <Label>Imagem de Capa</Label>
              <ImageUpload
                bucket="noticias"
                onUpload={handleImageUpload}
                onRemove={handleImageRemove}
                images={formData.imagem_capa ? [formData.imagem_capa] : []}
                multiple={false}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="conteudo">Conteúdo *</Label>
              <Textarea
                id="conteudo"
                value={formData.conteudo}
                onChange={(e) => setFormData(prev => ({ ...prev, conteudo: e.target.value }))}
                rows={12}
                placeholder="Escreva o conteúdo da notícia..."
                required
              />
            </div>

            <div className="flex items-center space-x-2">
              <Switch
                id="publicado"
                checked={formData.publicado}
                onCheckedChange={(checked) => setFormData(prev => ({ ...prev, publicado: checked }))}
              />
              <Label htmlFor="publicado">
                Publicar notícia {formData.publicado ? '(visível no site)' : '(salvar como rascunho)'}
              </Label>
            </div>

            <Button type="submit" disabled={loading} className="w-full">
              {loading ? 'Salvando...' : (
                <>
                  <Save className="mr-2 h-4 w-4" />
                  {isEdit ? 'Atualizar' : 'Criar'} Notícia
                </>
              )}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};
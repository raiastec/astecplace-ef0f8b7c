import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/hooks/useAuth';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from '@/components/ui/table';
import { toast } from '@/hooks/use-toast';
import { ArrowLeft, Edit, Trash2, Plus, Eye } from 'lucide-react';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '@/components/ui/alert-dialog';

interface Anuncio {
  id: string;
  titulo: string;
  descricao: string;
  preco: number;
  categoria: string;
  ativo: boolean;
  data_publicacao: string;
  usuario_id: string;
  profiles: {
    nome: string;
  };
}

export const AnunciosList = () => {
  const { profile, isAdmin } = useAuth();
  const [anuncios, setAnuncios] = useState<Anuncio[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchAnuncios();
  }, [profile]);

  const fetchAnuncios = async () => {
    try {
      let query = supabase
        .from('anuncios')
        .select(`
          *,
          profiles!anuncios_usuario_id_fkey (nome)
        `)
        .order('created_at', { ascending: false });

      // Se não for admin, mostrar apenas os anúncios do usuário
      if (!isAdmin && profile?.user_id) {
        query = query.eq('usuario_id', profile.user_id);
      }

      const { data, error } = await query;

      if (error) throw error;
      setAnuncios(data || []);
    } catch (error: any) {
      toast({
        title: "Erro",
        description: "Não foi possível carregar os anúncios.",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  const deleteAnuncio = async (id: string) => {
    try {
      const { error } = await supabase
        .from('anuncios')
        .delete()
        .eq('id', id);

      if (error) throw error;

      toast({
        title: "Sucesso",
        description: "Anúncio excluído com sucesso!"
      });

      fetchAnuncios();
    } catch (error: any) {
      toast({
        title: "Erro",
        description: error.message,
        variant: "destructive"
      });
    }
  };

  if (loading) {
    return <div className="flex justify-center p-8">Carregando...</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-4">
          <Button variant="outline" asChild>
            <Link to="/admin/dashboard">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Voltar
            </Link>
          </Button>
          <h1 className="text-3xl font-bold">Gerenciar Anúncios</h1>
        </div>
        <Button asChild>
          <Link to="/admin/anuncios/novo">
            <Plus className="mr-2 h-4 w-4" />
            Novo Anúncio
          </Link>
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Lista de Anúncios</CardTitle>
        </CardHeader>
        <CardContent>
          {anuncios.length === 0 ? (
            <p className="text-center py-4 text-muted-foreground">
              Nenhum anúncio encontrado.
            </p>
          ) : (
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Título</TableHead>
                    <TableHead>Categoria</TableHead>
                    <TableHead>Preço</TableHead>
                    <TableHead>Status</TableHead>
                    {isAdmin && <TableHead>Autor</TableHead>}
                    <TableHead>Data</TableHead>
                    <TableHead className="text-right">Ações</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {anuncios.map((anuncio) => (
                    <TableRow key={anuncio.id}>
                      <TableCell className="font-medium">
                        {anuncio.titulo}
                      </TableCell>
                      <TableCell>{anuncio.categoria}</TableCell>
                      <TableCell>
                        R$ {anuncio.preco?.toFixed(2) || '0.00'}
                      </TableCell>
                      <TableCell>
                        <Badge variant={anuncio.ativo ? "default" : "secondary"}>
                          {anuncio.ativo ? 'Ativo' : 'Inativo'}
                        </Badge>
                      </TableCell>
                      {isAdmin && (
                        <TableCell>{anuncio.profiles?.nome}</TableCell>
                      )}
                      <TableCell>
                        {new Date(anuncio.data_publicacao).toLocaleDateString()}
                      </TableCell>
                      <TableCell className="text-right">
                        <div className="flex justify-end gap-2">
                          <Button size="sm" variant="outline" asChild>
                            <Link to={`/admin/anuncios/${anuncio.id}`}>
                              <Eye className="h-4 w-4" />
                            </Link>
                          </Button>
                          <Button size="sm" variant="outline" asChild>
                            <Link to={`/admin/anuncios/${anuncio.id}/editar`}>
                              <Edit className="h-4 w-4" />
                            </Link>
                          </Button>
                          <AlertDialog>
                            <AlertDialogTrigger asChild>
                              <Button size="sm" variant="destructive">
                                <Trash2 className="h-4 w-4" />
                              </Button>
                            </AlertDialogTrigger>
                            <AlertDialogContent>
                              <AlertDialogHeader>
                                <AlertDialogTitle>Confirmar exclusão</AlertDialogTitle>
                                <AlertDialogDescription>
                                  Tem certeza que deseja excluir o anúncio "{anuncio.titulo}"?
                                  Esta ação não pode ser desfeita.
                                </AlertDialogDescription>
                              </AlertDialogHeader>
                              <AlertDialogFooter>
                                <AlertDialogCancel>Cancelar</AlertDialogCancel>
                                <AlertDialogAction onClick={() => deleteAnuncio(anuncio.id)}>
                                  Excluir
                                </AlertDialogAction>
                              </AlertDialogFooter>
                            </AlertDialogContent>
                          </AlertDialog>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};
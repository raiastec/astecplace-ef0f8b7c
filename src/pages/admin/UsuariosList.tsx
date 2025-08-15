import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
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
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { toast } from '@/hooks/use-toast';
import { ArrowLeft, Shield, User } from 'lucide-react';

interface Profile {
  id: string;
  user_id: string;
  nome: string;
  email: string;
  role: 'admin' | 'anunciante';
  created_at: string;
}

export const UsuariosList = () => {
  const [usuarios, setUsuarios] = useState<Profile[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchUsuarios();
  }, []);

  const fetchUsuarios = async () => {
    try {
      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setUsuarios(data || []);
    } catch (error: any) {
      toast({
        title: "Erro",
        description: "Não foi possível carregar os usuários.",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  const updateUserRole = async (userId: string, newRole: 'admin' | 'anunciante') => {
    try {
      const { error } = await supabase
        .from('profiles')
        .update({ role: newRole })
        .eq('user_id', userId);

      if (error) throw error;

      toast({
        title: "Sucesso",
        description: "Permissão do usuário atualizada com sucesso!"
      });

      fetchUsuarios();
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
      <div className="flex items-center gap-4 mb-6">
        <Button variant="outline" asChild>
          <Link to="/admin/dashboard">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Voltar
          </Link>
        </Button>
        <h1 className="text-3xl font-bold">Gerenciar Usuários</h1>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <User className="h-5 w-5" />
            Lista de Usuários
          </CardTitle>
        </CardHeader>
        <CardContent>
          {usuarios.length === 0 ? (
            <p className="text-center py-4 text-muted-foreground">
              Nenhum usuário encontrado.
            </p>
          ) : (
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Nome</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Permissão</TableHead>
                    <TableHead>Data de Cadastro</TableHead>
                    <TableHead className="text-right">Ações</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {usuarios.map((usuario) => (
                    <TableRow key={usuario.id}>
                      <TableCell className="font-medium">
                        {usuario.nome}
                      </TableCell>
                      <TableCell>{usuario.email}</TableCell>
                      <TableCell>
                        <Badge 
                          variant={usuario.role === 'admin' ? "default" : "secondary"}
                          className="flex items-center gap-1 w-fit"
                        >
                          {usuario.role === 'admin' ? (
                            <>
                              <Shield className="h-3 w-3" />
                              Admin
                            </>
                          ) : (
                            <>
                              <User className="h-3 w-3" />
                              Anunciante
                            </>
                          )}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        {new Date(usuario.created_at).toLocaleDateString()}
                      </TableCell>
                      <TableCell className="text-right">
                        <Select
                          value={usuario.role}
                          onValueChange={(value: 'admin' | 'anunciante') => 
                            updateUserRole(usuario.user_id, value)
                          }
                        >
                          <SelectTrigger className="w-32">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="anunciante">
                              <div className="flex items-center gap-2">
                                <User className="h-4 w-4" />
                                Anunciante
                              </div>
                            </SelectItem>
                            <SelectItem value="admin">
                              <div className="flex items-center gap-2">
                                <Shield className="h-4 w-4" />
                                Admin
                              </div>
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          )}
        </CardContent>
      </Card>

      <Card className="mt-6">
        <CardHeader>
          <CardTitle>Informações sobre Permissões</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex items-start gap-3">
            <Badge variant="secondary" className="mt-0.5">
              <User className="h-3 w-3 mr-1" />
              Anunciante
            </Badge>
            <div>
              <p className="font-medium">Permissões do Anunciante:</p>
              <ul className="text-sm text-muted-foreground mt-1 space-y-1">
                <li>• Criar e editar seus próprios anúncios</li>
                <li>• Fazer upload de imagens para anúncios</li>
                <li>• Ver lista de seus anúncios</li>
              </ul>
            </div>
          </div>
          
          <div className="flex items-start gap-3">
            <Badge className="mt-0.5">
              <Shield className="h-3 w-3 mr-1" />
              Admin
            </Badge>
            <div>
              <p className="font-medium">Permissões do Admin:</p>
              <ul className="text-sm text-muted-foreground mt-1 space-y-1">
                <li>• Todas as permissões do anunciante</li>
                <li>• Gerenciar todos os anúncios</li>
                <li>• Criar, editar e excluir notícias</li>
                <li>• Gerenciar usuários e alterar permissões</li>
                <li>• Acesso completo ao painel administrativo</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
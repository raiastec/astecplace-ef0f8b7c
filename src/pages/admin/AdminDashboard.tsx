import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  PlusCircle, 
  FileText, 
  Users, 
  Settings,
  LogOut,
  Megaphone,
  Newspaper
} from 'lucide-react';

export const AdminDashboard = () => {
  const { profile, signOut, isAdmin } = useAuth();

  const handleSignOut = async () => {
    await signOut();
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b bg-card">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold">Painel Administrativo</h1>
            <p className="text-muted-foreground">
              Bem-vindo, {profile?.nome}
              <Badge variant="secondary" className="ml-2">
                {profile?.role}
              </Badge>
            </p>
          </div>
          <Button variant="outline" onClick={handleSignOut}>
            <LogOut className="mr-2 h-4 w-4" />
            Sair
          </Button>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Seção de Cadastros Rápidos - Apenas Admin */}
        {isAdmin && (
          <div className="mb-8">
            <Card className="bg-gradient-to-r from-primary/5 to-primary/10 border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <PlusCircle className="h-6 w-6 text-primary" />
                  Cadastros Rápidos
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-3">
                  <Button asChild className="flex-1 min-w-[200px]">
                    <Link to="/admin/anuncios/novo">
                      <Megaphone className="mr-2 h-4 w-4" />
                      Novo Anúncio
                    </Link>
                  </Button>
                  <Button asChild className="flex-1 min-w-[200px]">
                    <Link to="/admin/noticias/nova">
                      <Newspaper className="mr-2 h-4 w-4" />
                      Nova Notícia
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Gerenciar Anúncios */}
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Megaphone className="h-5 w-5 text-primary" />
                Anúncios
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-sm text-muted-foreground">
                Gerencie os anúncios do site
              </p>
              <div className="flex gap-2">
                <Button asChild size="sm">
                  <Link to="/admin/anuncios">
                    <FileText className="mr-2 h-4 w-4" />
                    Ver Todos
                  </Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link to="/admin/anuncios/novo">
                    <PlusCircle className="mr-2 h-4 w-4" />
                    Novo
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Gerenciar Notícias - Apenas Admin */}
          {isAdmin && (
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Newspaper className="h-5 w-5 text-primary" />
                  Notícias
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm text-muted-foreground">
                  Gerencie as notícias do site
                </p>
                <div className="flex gap-2">
                  <Button asChild size="sm">
                    <Link to="/admin/noticias">
                      <FileText className="mr-2 h-4 w-4" />
                      Ver Todas
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="sm">
                    <Link to="/admin/noticias/nova">
                      <PlusCircle className="mr-2 h-4 w-4" />
                      Nova
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Gerenciar Usuários - Apenas Admin */}
          {isAdmin && (
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-primary" />
                  Usuários
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm text-muted-foreground">
                  Gerencie usuários e permissões
                </p>
                <Button asChild size="sm">
                  <Link to="/admin/usuarios">
                    <Users className="mr-2 h-4 w-4" />
                    Gerenciar
                  </Link>
                </Button>
              </CardContent>
            </Card>
          )}

          {/* Configurações */}
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Settings className="h-5 w-5 text-primary" />
                Configurações
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-sm text-muted-foreground">
                Configurações da conta
              </p>
              <Button asChild size="sm" variant="outline">
                <Link to="/admin/configuracoes">
                  <Settings className="mr-2 h-4 w-4" />
                  Configurar
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="mt-8">
          <Card>
            <CardHeader>
              <CardTitle>Acesso Rápido</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex flex-wrap gap-2">
                <Button asChild variant="outline" size="sm">
                  <Link to="/" target="_blank">
                    Ver Site
                  </Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link to="/admin/anuncios/novo">
                    Novo Anúncio
                  </Link>
                </Button>
                {isAdmin && (
                  <Button asChild variant="outline" size="sm">
                    <Link to="/admin/noticias/nova">
                      Nova Notícia
                    </Link>
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};
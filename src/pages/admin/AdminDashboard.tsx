import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  PlusCircle, 
  FileText, 
  Users, 
  Settings,
  LogOut,
  Megaphone,
  Newspaper,
  Package,
  Eye
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

      <main className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Seção Principal - Apenas Admin */}
        {isAdmin && (
          <>
            {/* Cards Principais */}
            <div className="grid gap-6 md:grid-cols-2 mb-8">
              {/* Anúncios */}
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center gap-2 text-green-700">
                    <Megaphone className="h-5 w-5" />
                    Anúncios
                  </CardTitle>
                  <CardDescription>
                    Gerencie os anúncios do site
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button asChild variant="default" size="sm" className="bg-green-600 hover:bg-green-700">
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
                </CardContent>
              </Card>

              {/* Configurações */}
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center gap-2 text-blue-700">
                    <Settings className="h-5 w-5" />
                    Configurações
                  </CardTitle>
                  <CardDescription>
                    Configurações da conta
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" size="sm" className="w-fit">
                    <Settings className="mr-2 h-4 w-4" />
                    Configurar
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Cadastro de Notícias */}
            <div className="mb-8">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center gap-2 text-orange-700">
                    <Newspaper className="h-5 w-5" />
                    Cadastro de Notícias
                  </CardTitle>
                  <CardDescription>
                    Criar uma seção no painel chamada "Notícias"
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button asChild variant="default" size="sm" className="bg-orange-600 hover:bg-orange-700">
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
                </CardContent>
              </Card>
            </div>

            {/* Catálogo de Anúncios */}
            <div className="mb-8">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center gap-2 text-purple-700">
                    <Package className="h-5 w-5" />
                    Catálogo de Anúncios
                  </CardTitle>
                  <CardDescription>
                    Os anúncios cadastrados devem ficar vinculados a categorias
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button asChild variant="default" size="sm" className="bg-purple-600 hover:bg-purple-700">
                    <Link to="/catalogo">
                      <Eye className="mr-2 h-4 w-4" />
                      Ver Catálogo
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="sm">
                    <Link to="/admin/anuncios/novo">
                      <PlusCircle className="mr-2 h-4 w-4" />
                      Novo Anúncio
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Gerenciar Usuários */}
            <div className="mb-8">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center gap-2 text-indigo-700">
                    <Users className="h-5 w-5" />
                    Usuários
                  </CardTitle>
                  <CardDescription>
                    Gerencie os usuários do sistema
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button asChild variant="outline" size="sm">
                    <Link to="/admin/usuarios">
                      <Eye className="mr-2 h-4 w-4" />
                      Ver Todos
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </>
        )}

        {/* Se não for admin, mostrar apenas anúncios */}
        {!isAdmin && (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Megaphone className="h-5 w-5" />
                  Meus Anúncios
                </CardTitle>
                <CardDescription>
                  Gerencie seus anúncios
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button asChild variant="outline" className="w-full justify-start">
                  <Link to="/admin/anuncios">
                    <Eye className="mr-2 h-4 w-4" />
                    Ver Todos
                  </Link>
                </Button>
                <Button asChild className="w-full justify-start">
                  <Link to="/admin/anuncios/novo">
                    <PlusCircle className="mr-2 h-4 w-4" />
                    Novo
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Acesso Rápido */}
        <div className="mt-8">
          <Card>
            <CardHeader>
              <CardTitle>Acesso Rápido</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-3">
                <Button variant="outline" asChild size="sm">
                  <Link to="/">Ver Site</Link>
                </Button>
                <Button variant="outline" asChild size="sm">
                  <Link to="/admin/anuncios/novo">Novo Anúncio</Link>
                </Button>
                {isAdmin && (
                  <Button variant="outline" asChild size="sm">
                    <Link to="/admin/noticias/nova">Nova Notícia</Link>
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
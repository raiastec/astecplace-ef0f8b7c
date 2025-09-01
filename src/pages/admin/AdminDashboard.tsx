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
            {/* Gestão de Conteúdo */}
            <div className="mb-8">
              <h2 className="text-2xl font-semibold mb-6 text-foreground">Gestão de Conteúdo</h2>
              <div className="grid gap-6 md:grid-cols-2">
                {/* Anúncios */}
                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader className="pb-3">
                    <CardTitle className="flex items-center gap-2 text-green-700">
                      <Megaphone className="h-5 w-5" />
                      Anúncios
                    </CardTitle>
                    <CardDescription>
                      Gerencie todos os anúncios do marketplace
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex flex-wrap gap-2">
                      <Button asChild variant="default" size="sm" className="bg-green-600 hover:bg-green-700">
                        <Link to="/admin/anuncios">
                          <FileText className="mr-2 h-4 w-4" />
                          Ver Todos
                        </Link>
                      </Button>
                      <Button asChild variant="outline" size="sm">
                        <Link to="/admin/anuncios/novo">
                          <PlusCircle className="mr-2 h-4 w-4" />
                          Novo Anúncio
                        </Link>
                      </Button>
                      <Button asChild variant="ghost" size="sm">
                        <Link to="/catalogo">
                          <Eye className="mr-2 h-4 w-4" />
                          Ver Catálogo
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                {/* Notícias */}
                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader className="pb-3">
                    <CardTitle className="flex items-center gap-2 text-orange-700">
                      <Newspaper className="h-5 w-5" />
                      Notícias
                    </CardTitle>
                    <CardDescription>
                      Gerencie todas as notícias do site
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex flex-wrap gap-2">
                      <Button asChild variant="default" size="sm" className="bg-orange-600 hover:bg-orange-700">
                        <Link to="/admin/noticias">
                          <FileText className="mr-2 h-4 w-4" />
                          Ver Todas
                        </Link>
                      </Button>
                      <Button asChild variant="outline" size="sm">
                        <Link to="/admin/noticias/nova">
                          <PlusCircle className="mr-2 h-4 w-4" />
                          Nova Notícia
                        </Link>
                      </Button>
                      <Button asChild variant="ghost" size="sm">
                        <Link to="/noticias">
                          <Eye className="mr-2 h-4 w-4" />
                          Ver Publicadas
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Gestão de Usuários */}
            <div className="mb-8">
              <h2 className="text-2xl font-semibold mb-6 text-foreground">Administração</h2>
              <div className="grid gap-6 md:grid-cols-2">
                {/* Usuários */}
                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader className="pb-3">
                    <CardTitle className="flex items-center gap-2 text-indigo-700">
                      <Users className="h-5 w-5" />
                      Usuários
                    </CardTitle>
                    <CardDescription>
                      Gerencie todos os usuários do sistema
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button asChild variant="default" size="sm" className="bg-indigo-600 hover:bg-indigo-700">
                      <Link to="/admin/usuarios">
                        <Eye className="mr-2 h-4 w-4" />
                        Ver Todos
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
                      Configurações gerais do sistema
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="outline" size="sm" disabled>
                      <Settings className="mr-2 h-4 w-4" />
                      Em breve
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </>
        )}

        {/* Se não for admin, mostrar painel simplificado */}
        {!isAdmin && (
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-6 text-foreground">Meus Anúncios</h2>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-green-700">
                  <Megaphone className="h-5 w-5" />
                  Gerenciar Anúncios
                </CardTitle>
                <CardDescription>
                  Crie e gerencie seus anúncios no marketplace
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex flex-wrap gap-2">
                  <Button asChild variant="default" className="bg-green-600 hover:bg-green-700">
                    <Link to="/admin/anuncios">
                      <Eye className="mr-2 h-4 w-4" />
                      Ver Meus Anúncios
                    </Link>
                  </Button>
                  <Button asChild variant="outline">
                    <Link to="/admin/anuncios/novo">
                      <PlusCircle className="mr-2 h-4 w-4" />
                      Criar Novo
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Acesso Rápido */}
        <div className="mt-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Package className="h-5 w-5" />
                Ações Rápidas
              </CardTitle>
              <CardDescription>
                Links úteis para navegação e criação
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-3">
                <Button variant="outline" asChild size="sm">
                  <Link to="/">
                    <Eye className="mr-2 h-4 w-4" />
                    Ver Site
                  </Link>
                </Button>
                <Button variant="outline" asChild size="sm">
                  <Link to="/catalogo">
                    <Package className="mr-2 h-4 w-4" />
                    Catálogo
                  </Link>
                </Button>
                <Button variant="outline" asChild size="sm">
                  <Link to="/admin/anuncios/novo">
                    <PlusCircle className="mr-2 h-4 w-4" />
                    Novo Anúncio
                  </Link>
                </Button>
                {isAdmin && (
                  <>
                    <Button variant="outline" asChild size="sm">
                      <Link to="/admin/noticias/nova">
                        <PlusCircle className="mr-2 h-4 w-4" />
                        Nova Notícia
                      </Link>
                    </Button>
                    <Button variant="outline" asChild size="sm">
                      <Link to="/noticias">
                        <Newspaper className="mr-2 h-4 w-4" />
                        Ver Notícias
                      </Link>
                    </Button>
                  </>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};
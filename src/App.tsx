import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./hooks/useAuth";
import { ProtectedRoute } from "./components/admin/ProtectedRoute";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Noticias from "./pages/Noticias";
import { AdminLogin } from "./pages/admin/AdminLogin";
import { AdminDashboard } from "./pages/admin/AdminDashboard";
import { AnunciosList } from "./pages/admin/AnunciosList";
import { AnuncioForm } from "./pages/admin/AnuncioForm";
import { NoticiasList } from "./pages/admin/NoticiasList";
import { NoticiaForm } from "./pages/admin/NoticiaForm";
import { UsuariosList } from "./pages/admin/UsuariosList";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/noticias" element={<Noticias />} />
            
            {/* Admin Routes */}
            <Route path="/admin/login" element={<AdminLogin />} />
            <Route path="/admin/dashboard" element={
              <ProtectedRoute>
                <AdminDashboard />
              </ProtectedRoute>
            } />
            
            {/* Anúncios Routes */}
            <Route path="/admin/anuncios" element={
              <ProtectedRoute>
                <AnunciosList />
              </ProtectedRoute>
            } />
            <Route path="/admin/anuncios/novo" element={
              <ProtectedRoute>
                <AnuncioForm />
              </ProtectedRoute>
            } />
            <Route path="/admin/anuncios/:id/editar" element={
              <ProtectedRoute>
                <AnuncioForm />
              </ProtectedRoute>
            } />
            
            {/* Notícias Routes - Apenas Admin */}
            <Route path="/admin/noticias" element={
              <ProtectedRoute requireAdmin={true}>
                <NoticiasList />
              </ProtectedRoute>
            } />
            <Route path="/admin/noticias/nova" element={
              <ProtectedRoute requireAdmin={true}>
                <NoticiaForm />
              </ProtectedRoute>
            } />
            <Route path="/admin/noticias/:id/editar" element={
              <ProtectedRoute requireAdmin={true}>
                <NoticiaForm />
              </ProtectedRoute>
            } />
            
            {/* Usuários Routes - Apenas Admin */}
            <Route path="/admin/usuarios" element={
              <ProtectedRoute requireAdmin={true}>
                <UsuariosList />
              </ProtectedRoute>
            } />
            
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;

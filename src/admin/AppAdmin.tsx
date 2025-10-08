import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { ProtectedRoute } from '@/components/admin/ProtectedRoute'
import { Toaster } from '@/components/ui/toaster'

const Dashboard = () => (
  <div className="p-8">
    <h1 className="text-2xl font-bold">Painel Admin</h1>
    <p className="mt-4">Bem-vindo ao painel administrativo.</p>
    <nav className="mt-6">
      <Link to="/admin/anuncios" className="text-blue-600 underline mr-4">Anúncios</Link>
      <Link to="/admin/noticias" className="text-blue-600 underline">Notícias</Link>
    </nav>
  </div>
)

const AdminNotFound = () => (
  <div className="p-8">
    <h2>Admin - Página não encontrada</h2>
    <Link to="/admin/dashboard" className="text-blue-600 underline">Voltar</Link>
  </div>
)

const AppAdmin = () => (
  <>
    <Toaster />
    <BrowserRouter>
      <Routes>
        <Route path="/admin/dashboard" element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        } />
        <Route path="/admin/*" element={<AdminNotFound />} />
      </Routes>
    </BrowserRouter>
  </>
)

export default AppAdmin

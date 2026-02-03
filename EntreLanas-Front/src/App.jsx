import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import TiendaPage from './pages/TiendaPage'; // <--- ¡MIRA AQUÍ! Así es como debe quedar el import

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        {/* El Header se verá en todas las páginas */}
        <Header />

        {/* Aquí cambiará el contenido según la ruta */}
        <main className="flex-grow container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={
              <div className="text-center mt-20">
                <h1 className="text-4xl font-bold text-gray-800">¡Bienvenido a EntreLanas!</h1>
                <p className="text-gray-600 mt-4 text-xl">Tu tienda de lanas favorita.</p>
              </div>
            } />
            
            {/* Aquí usamos el componente que hemos importado arriba */}
            <Route path="/tienda" element={<TiendaPage />} />
            
            <Route path="/login" element={<h2 className="text-center text-2xl">Página de Login 🔐</h2>} />
            <Route path="/carrito" element={<h2 className="text-center text-2xl">Tu Carrito 🛒</h2>} />
          </Routes>
        </main>

        {/* Footer sencillo */}
        <footer className="bg-gray-800 text-white py-6 text-center mt-auto">
          <p>&copy; 2026 EntreLanas - Hecho con ❤️ para el TFC</p>
        </footer>
      </div>
    </Router>
  )
}

export default App
import { useEffect, useState } from 'react';
import { obtenerProductos } from '../services/productoService';

const TiendaPage = () => {
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    const cargarProductos = async () => {
      try {
        const datos = await obtenerProductos();
        setProductos(datos);
      } catch (error) {
        console.error("Error cargando productos");
      } finally {
        setCargando(false);
      }
    };
    cargarProductos();
  }, []);

  if (cargando) {
    return <div className="text-center mt-20 text-xl">Cargando lanas... </div>;
  }

  return (
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-pink-700 mb-8 text-center">Nuestra Colección</h2>
      
      {productos.length === 0 ? (
        <p className="text-center text-gray-500">No hay productos disponibles (Revisa que el Backend esté encendido)</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {productos.map((producto) => (
            <div key={producto.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-100">
              {/* Imagen (Usamos una por defecto si no hay URL) */}
              <div className="h-48 bg-gray-200 w-full object-cover flex items-center justify-center text-4xl">
                 {producto.imagen ? <img src={producto.imagen} alt={producto.nombre} className="w-full h-full object-cover"/> : '🧶'}
              </div>
              
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{producto.nombre}</h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">{producto.descripcion}</p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-pink-600">{producto.precio}€</span>
                  <button className="bg-pink-500 text-white px-3 py-1 rounded hover:bg-pink-600 transition">
                    Ver Detalles
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TiendaPage;
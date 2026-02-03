import { Link } from 'react-router-dom';

const Header = () => {  // <--- Fíjate que esto empiece con Mayúscula
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
       {/* ... resto del código ... */}
       <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="text-2xl font-bold text-pink-600 flex items-center gap-2">
              <span>🧶</span> EntreLanas
            </Link>
       </div>
       {/* ... */}
    </nav>
  );
};

export default Header; // <--- Fíjate que se exporte con Mayúscula
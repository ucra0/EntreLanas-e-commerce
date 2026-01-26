function App() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center p-10 bg-white shadow-xl rounded-lg border border-gray-200">
        <h1 className="text-5xl font-bold text-pink-600 mb-4">
          🧶 EntreLanas
        </h1>
        <p className="text-gray-600 text-xl mb-6">
          Frontend configurado con Tailwind CSS
        </p>
        <button className="px-6 py-3 bg-pink-500 text-white font-semibold rounded hover:bg-pink-700 transition duration-300 shadow-md">
          ¡Si ves esto rosa, funciona!
        </button>
      </div>
    </div>
  )
}

export default App
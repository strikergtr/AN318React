export default function App() {

  return (
   <div className="min-h-screen w-screen flex flex-col">
      {/* ชื่อ Application */}
      <header className="bg-emerald-800 text-white p-4" >
        <h1>AN318 React Class</h1>
        </header>
      <div className="flex flex-1">
        {/* หน้าจอหลัก */}
        <main className="flex-1 p-6 bg-white">
          <h2 className="text-2x1 font-semibold mb-4">Start Code Here</h2>
        </main>
      </div>
      <footer className="bg-gray-700 text-white p-4 text-center">2025 Copyright</footer>
    </div>
  )
}
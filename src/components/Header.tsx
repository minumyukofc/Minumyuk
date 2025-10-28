import logoImage from "figma:asset/f05fbf3d5ace6eb184b2b49b14c86a0c6d63fd73.png";

export function Header() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center cursor-pointer" onClick={() => scrollToSection('home')}>
            <img 
              src={logoImage} 
              alt="Minum Yuk Logo" 
              className="h-12 w-auto object-contain"
            />
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-gray-700 hover:text-orange-500 transition-colors"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('tentang')}
              className="text-gray-700 hover:text-orange-500 transition-colors"
            >
              Tentang
            </button>
            <button 
              onClick={() => scrollToSection('produk')}
              className="text-gray-700 hover:text-orange-500 transition-colors"
            >
              Produk
            </button>
            <button 
              onClick={() => scrollToSection('kontak')}
              className="text-gray-700 hover:text-orange-500 transition-colors"
            >
              Kontak
            </button>
          </nav>

          {/* Mobile menu button */}
          <button className="md:hidden p-2">
            <div className="w-6 h-0.5 bg-gray-700 mb-1.5"></div>
            <div className="w-6 h-0.5 bg-gray-700 mb-1.5"></div>
            <div className="w-6 h-0.5 bg-gray-700"></div>
          </button>
        </div>
      </div>
    </header>
  );
}

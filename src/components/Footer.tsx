import { Heart } from "lucide-react";
import logoImage from "figma:asset/f05fbf3d5ace6eb184b2b49b14c86a0c6d63fd73.png";

export function Footer() {
  return (
    <footer className="py-12 px-4 bg-gradient-to-r from-orange-400 via-pink-400 to-orange-400">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col items-center justify-center gap-6">
          {/* Logo */}
          <div className="flex items-center">
            <div className="bg-white rounded-2xl p-3 shadow-lg">
              <img 
                src={logoImage} 
                alt="Minum Yuk Logo" 
                className="h-16 w-auto object-contain"
              />
            </div>
          </div>

          {/* Tagline */}
          <p className="text-white/90 text-center">
            Inovasi Segar Untuk Semua
          </p>

          {/* Divider */}
          <div className="w-full max-w-md h-px bg-white/30"></div>

          {/* Copyright */}
          <div className="flex items-center gap-2 text-white/90">
            <span>© 2025 Minum Yuk!</span>
            <span>•</span>
            <span className="flex items-center gap-1">
              Dibuat dengan <Heart className="w-4 h-4 fill-white" /> untuk Indonesia
            </span>
          </div>

          {/* Additional links */}
          <div className="flex gap-6 text-white/80">
            <a href="#" className="hover:text-white transition-colors">Syarat & Ketentuan</a>
            <span>•</span>
            <a href="#" className="hover:text-white transition-colors">Kebijakan Privasi</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

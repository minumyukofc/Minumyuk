import { Sparkles, Heart, Zap } from "lucide-react";

export function AboutSection() {
  return (
    <section id="tentang" className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-100 rounded-full mb-4">
            <Sparkles className="w-4 h-4 text-orange-500" />
            <span className="text-orange-600">Tentang Kami</span>
          </div>
          <h2 className="text-4xl md:text-5xl bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent mb-6">
            Kenapa Minum Yuk?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Kami hadir dengan inovasi minuman segar yang dirancang khusus untuk gaya hidup aktif mahasiswa 
            dan pekerja muda yang membutuhkan kesegaran praktis setiap hari.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-gradient-to-br from-orange-50 to-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2">
            <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
              <Sparkles className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl text-gray-800 mb-4">100% Segar</h3>
            <p className="text-gray-600">
              Dibuat dari buah pilihan berkualitas tinggi yang dipetik fresh setiap hari 
              untuk menjaga kesegaran dan nutrisi optimal.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-gradient-to-br from-pink-50 to-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2">
            <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-pink-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
              <Zap className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl text-gray-800 mb-4">Praktis & Cepat</h3>
            <p className="text-gray-600">
              Kemasan praktis yang mudah dibawa kemana saja. Cocok untuk menemani kuliah, 
              kerja, atau aktivitas outdoor kamu.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-gradient-to-br from-orange-50 to-pink-50 p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2">
            <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-pink-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
              <Heart className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl text-gray-800 mb-4">Harga Terjangkau</h3>
            <p className="text-gray-600">
              Nikmati kualitas premium dengan harga yang ramah di kantong mahasiswa. 
              Sehat dan segar tanpa bikin dompet menangis!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

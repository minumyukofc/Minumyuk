import { Sparkles } from "lucide-react";
import orangeImage from 'figma:asset/e1f9b1b54a0d25719a8af1e1f66e8f71ba153ac1.png';
import guavaImage from 'figma:asset/8cc0905bd461adf44a174b855614368fca4533c9.png';

export function HeroSection() {
  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center pt-20 px-4 bg-gradient-to-br from-orange-50 via-pink-50 to-white relative overflow-hidden"
    >
      {/* Decorative circles */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-orange-200/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-pink-200/30 rounded-full blur-3xl"></div>

      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Content */}
        <div className="text-center md:text-left space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-md">
            <Sparkles className="w-4 h-4 text-orange-500" />
            <span className="text-orange-600">Pesan Sekarang</span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl bg-gradient-to-r from-orange-500 via-pink-500 to-orange-400 bg-clip-text text-transparent leading-tight">
            PRE ORDER
            <br />
            MINUM YUK!
          </h1>

          <p className="text-2xl md:text-3xl text-gray-700">
            Inovasi Segar Untuk Semua
          </p>

          <p className="text-gray-600 max-w-lg">
            Nikmati kesegaran dalam setiap tetes. Minuman praktis, sehat, dan penuh cita rasa 
            yang siap menemani aktivitas harianmu.
          </p>

          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <div className="px-6 py-3 bg-gradient-to-r from-orange-500 to-pink-500 text-white rounded-full shadow-lg hover:shadow-xl transition-all transform hover:scale-105 cursor-pointer">
              Dapatkan Update
            </div>
            <div className="px-6 py-3 bg-white text-orange-500 rounded-full shadow-lg hover:shadow-xl transition-all border-2 border-orange-200 cursor-pointer">
              Pelajari Lebih Lanjut
            </div>
          </div>
        </div>

        {/* Right Content - Product Images */}
        <div className="relative">
          <div className="relative flex items-center justify-center gap-8">
            {/* Orange Drink */}
            <div className="relative transform hover:scale-105 transition-transform duration-300">
              <div className="absolute inset-0 bg-orange-300/40 rounded-3xl blur-2xl"></div>
              <div className="relative bg-white p-4 rounded-3xl shadow-2xl">
                <div className="w-48 h-64 rounded-2xl overflow-hidden">
                  <img 
                    src={orangeImage}
                    alt="Minuman Jeruk"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -top-2 -right-2 w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-white shadow-lg">
                  🍊
                </div>
              </div>
            </div>

            {/* Guava Drink */}
            <div className="relative transform hover:scale-105 transition-transform duration-300 -mt-12">
              <div className="absolute inset-0 bg-pink-300/40 rounded-3xl blur-2xl"></div>
              <div className="relative bg-white p-4 rounded-3xl shadow-2xl">
                <div className="w-48 h-64 rounded-2xl overflow-hidden">
                  <img 
                    src={guavaImage}
                    alt="Minuman Jambu Merah"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -top-2 -right-2 w-12 h-12 bg-pink-500 rounded-full flex items-center justify-center text-white shadow-lg">
                  🍑
                </div>
              </div>
            </div>
          </div>


        </div>
      </div>
    </section>
  );
}

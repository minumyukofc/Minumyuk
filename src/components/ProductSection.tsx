import orangeImage from 'figma:asset/e1f9b1b54a0d25719a8af1e1f66e8f71ba153ac1.png';
import guavaImage from 'figma:asset/8cc0905bd461adf44a174b855614368fca4533c9.png';
import { Card } from "./ui/card";
import { Sparkles } from "lucide-react";

export function ProductSection() {
  const products = [
    {
      id: 1,
      name: "Jeruk Segar",
      emoji: "🍊",
      description: "Jeruk pilihan yang kaya vitamin C, memberikan kesegaran alami dan meningkatkan imunitas tubuh. Sempurna untuk memulai hari dengan energi penuh!",
      color: "from-orange-400 to-orange-500",
      bgColor: "from-orange-50 to-orange-100",
      image: orangeImage,
      features: ["Tinggi Vitamin C", "Anti Oksidan", "Meningkatkan Imunitas"]
    },
    {
      id: 2,
      name: "Jambu Merah",
      emoji: "🍑",
      description: "Jambu merah manis dengan kandungan vitamin dan mineral yang melimpah. Menyegarkan tenggorokan dan membantu menjaga kesehatan kulit.",
      color: "from-pink-400 to-pink-500",
      bgColor: "from-pink-50 to-pink-100",
      image: guavaImage,
      features: ["Kaya Vitamin A", "Baik untuk Kulit", "Rendah Kalori"]
    }
  ];

  return (
    <section id="produk" className="py-20 px-4 bg-gradient-to-br from-white via-orange-50 to-pink-50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full mb-4 shadow-md">
            <Sparkles className="w-4 h-4 text-orange-500" />
            <span className="text-orange-600">Produk Kami</span>
          </div>
          <h2 className="text-4xl md:text-5xl bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent mb-6">
            Varian Rasa Pilihan
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Dua varian rasa favorit yang siap menyegarkan harimu dengan kelezatan alami
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {products.map((product) => (
            <Card key={product.id} className="overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-2">
              <div className={`bg-gradient-to-br ${product.bgColor} p-8`}>
                <div className="relative mb-6">
                  <div className={`absolute inset-0 bg-gradient-to-br ${product.color} opacity-20 rounded-3xl blur-2xl`}></div>
                  <div className="relative w-full h-80 rounded-2xl shadow-lg overflow-hidden">
                    <img 
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className={`absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br ${product.color} rounded-full flex items-center justify-center text-4xl shadow-lg`}>
                    {product.emoji}
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <h3 className={`text-3xl mb-4 bg-gradient-to-r ${product.color} bg-clip-text text-transparent`}>
                    {product.name}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {product.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {product.features.map((feature, index) => (
                      <span 
                        key={index}
                        className={`px-4 py-2 bg-gradient-to-r ${product.color} text-white rounded-full shadow-md`}
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

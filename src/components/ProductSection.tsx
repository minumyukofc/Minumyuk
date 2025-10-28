import { Card } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";
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
      image: "https://images.unsplash.com/photo-1617319683252-027deeba5fd5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcmFuZ2UlMjBqdWljZSUyMHNwbGFzaHxlbnwxfHx8fDE3NjA0Mzc3Nzl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      features: ["Tinggi Vitamin C", "Anti Oksidan", "Meningkatkan Imunitas"]
    },
    {
      id: 2,
      name: "Jambu Merah",
      emoji: "🍑",
      description: "Jambu merah manis dengan kandungan vitamin dan mineral yang melimpah. Menyegarkan tenggorokan dan membantu menjaga kesehatan kulit.",
      color: "from-pink-400 to-pink-500",
      bgColor: "from-pink-50 to-pink-100",
      image: "https://images.unsplash.com/photo-1658215286262-bbed7ceb7f9d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxndWF2YSUyMGp1aWNlJTIwZHJpbmt8ZW58MXx8fHwxNzYwNDYxOTQ2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
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
                  <ImageWithFallback 
                    src={product.image}
                    alt={product.name}
                    className="relative w-full h-80 object-cover rounded-2xl shadow-lg"
                  />
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

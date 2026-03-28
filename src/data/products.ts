export interface Product {
  id: number
  name: string
  price: number
  discountPercent?: number
  freeShipping?: boolean
  image: string
  description: string
  category: string
}

export const products: Product[] = [
  {
    id: 1,
    name: "Notebook Gamer Acer Nitro V15 ANV15-51-57WS i5 13ªGen Linux Gutta 8GB 512GB SSD RTX3050 15.6' FHD    ",
    price: 4818,
    image: "https://benchpromos.com.br/_next/image?url=https%3A%2F%2Fdrive.google.com%2Fuc%3Fid%3D1-nhOmQH68iY4yc0WYFNZkWsXQEaJabPu&w=3840&q=75",
    description: "Notebook potente para jogos",
    category: "Tecnologia"
  },
  {
    id: 2,
    name: "Apple iPhone 17 Pro Max (256 GB)",
    price: 11249,
    discountPercent: 10,
    image: "https://cdsassets.apple.com/live/7WUAS350/images/tech-specs/iphone-17-pro-17-pro-max-hero.png",
    description: "Celular moderno",
    category: "Tecnologia"
  },
  {
    id: 3,
    name: "PlayStation®5 Slim Digital 825GB – Pacote ASTRO BOT e Gran Turismo 7",
    price: 3523,
    discountPercent: 8,
    freeShipping: true,
    image: "https://benchpromos.com.br/_next/image?url=https%3A%2F%2Fi.imgur.com%2FG7o9vt6.png&w=3840&q=75",
    description: "Console de jogos",
    category: "Tecnologia"
  },
  {
    id: 4,
    name: "Bundle Nintendo Switch 2 + Jogo Digital Mario Kart World – Modelo Nacional de Tomada",
    price: 4349,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwxiyylcDjyw8lzTbIQylpGMCiAGw1dctm4w&s",
    description: "Console de jogos",
    category: "Tecnologia"
  },
  {
    id: 5,
    name: "Samsung Vision AI TV 55 QLED ULTRA 4K QEF1 2025",
    price: 3105,
    discountPercent: 15,
    freeShipping: true,
    image: "https://m.media-amazon.com/images/I/616l6zgYapL._AC_SY450_.jpg",
    description: "TV inteligente com qualidade de imagem superior",
    category: "Tecnologia"
  }
]
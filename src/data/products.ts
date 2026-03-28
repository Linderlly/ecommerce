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
    image: "https://http2.mlstatic.com/D_NQ_NP_2X_924349-MLA97662433070_112025-F.webp",
    description: "Notebook potente para jogos",
    category: "Tecnologia"
  },
  {
    id: 2,
    name: "Apple iPhone 17 Pro Max (256 GB) - Laranja cósmico",
    price: 11249,
    discountPercent: 10,
    image: "https://m.media-amazon.com/images/I/51k0qRQFcuL._AC_SX342_SY445_QL70_ML2_.jpg",
    description: "Celular moderno",
    category: "Tecnologia"
  },
  {
    id: 3,
    name: "PlayStation®5 Slim Digital 825GB – Pacote ASTRO BOT e Gran Turismo 7",
    price: 3523,
    discountPercent: 8,
    freeShipping: true,
    image: "https://m.media-amazon.com/images/I/71WCygaQDAL._AC_SX679_.jpg",
    description: "Console de jogos",
    category: "Tecnologia"
  },
  {
    id: 4,
    name: "Bundle Nintendo Switch 2 + Jogo Digital Mario Kart World – Modelo Nacional de Tomada",
    price: 4349,
    image: "https://m.media-amazon.com/images/I/61XUxyAtX3L._AC_SX679_.jpg",
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
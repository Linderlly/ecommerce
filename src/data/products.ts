export interface Product {
  id: number
  name: string
  price: number
  image: string
  description: string
  category: string
}

export const products: Product[] = [
  {
    id: 1,
    name: "Notebook Gamer",
    price: 4500,
    image: "https://via.placeholder.com/200",
    description: "Notebook potente para jogos",
    category: "Tecnologia"
  },
  {
    id: 2,
    name: "Smartphone",
    price: 2500,
    image: "https://via.placeholder.com/200",
    description: "Celular moderno",
    category: "Tecnologia"
  }
]
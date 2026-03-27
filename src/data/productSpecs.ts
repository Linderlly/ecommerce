export interface ProductSpecs {
  headline: string
  summary: string
  technicalDetails: string[]
  highlights: string[]
  inTheBox: string[]
}

export const productSpecsById: Record<number, ProductSpecs> = {
  1: {
    headline: 'Desempenho para jogos e multitarefa intensa',
    summary:
      'Notebook gamer com foco em performance estável para jogos competitivos, estudo e trabalho com apps exigentes.',
    technicalDetails: [
      'Processador Intel Core i5 de 13a geracao',
      'Memoria RAM de 8 GB expansivel',
      'SSD NVMe de 512 GB para inicializacao rapida',
      'GPU dedicada NVIDIA GeForce RTX 3050',
      'Tela de 15.6 polegadas Full HD'
    ],
    highlights: [
      'Bom equilibrio entre desempenho e custo',
      'Tempo de resposta adequado para jogos',
      'Sistema de armazenamento agil para produtividade'
    ],
    inTheBox: ['Notebook', 'Fonte de alimentacao', 'Guia rapido']
  },
  2: {
    headline: 'Smartphone premium para foto, video e produtividade',
    summary:
      'Aparelho de alto desempenho com cameras avancadas e excelente experiencia para apps do dia a dia e criacao de conteudo.',
    technicalDetails: [
      'Armazenamento interno de 256 GB',
      'Sistema de cameras multiplas de alta resolucao',
      'Tela OLED com alta taxa de atualizacao',
      'Conectividade 5G, Wi-Fi e Bluetooth',
      'Bateria com otimizacao inteligente de consumo'
    ],
    highlights: [
      'Excelente qualidade de imagem em fotos noturnas',
      'Desempenho premium para multitarefa',
      'Acabamento sofisticado e moderno'
    ],
    inTheBox: ['iPhone', 'Cabo USB-C', 'Manual e chave de gaveta SIM']
  },
  3: {
    headline: 'Console de nova geracao com pacote de jogos',
    summary:
      'PlayStation 5 Slim Digital com armazenamento amplo e bundle para iniciar com jogos de grande apelo visual.',
    technicalDetails: [
      'SSD interno de 825 GB',
      'Edicao digital sem leitor de disco',
      'Controle sem fio DualSense',
      'Suporte a ate 4K e alto desempenho grafico',
      'Compatibilidade com servicos e catalogo online'
    ],
    highlights: [
      'Inicializacao muito rapida',
      'Experiencia imersiva com feedback aptico',
      'Pacote com jogos para comecar imediatamente'
    ],
    inTheBox: ['Console PS5 Slim', 'Controle DualSense', 'Cabos e documentacao']
  },
  4: {
    headline: 'Console hibrido para jogar em casa e em movimento',
    summary:
      'Nintendo Switch com proposta versatil para quem quer jogar na TV ou no modo portatil, com jogo digital incluso.',
    technicalDetails: [
      'Modo dock para uso em TV e modo portatil',
      'Controles destacaveis para multiplayer local',
      'Tela integrada para jogo em movimento',
      'Conexao Wi-Fi para recursos online',
      'Bundle com jogo digital Mario Kart World'
    ],
    highlights: [
      'Formato versatil para diferentes estilos de jogo',
      'Ideal para jogar em familia e amigos',
      'Catalogo forte de exclusivos Nintendo'
    ],
    inTheBox: ['Console Nintendo Switch', 'Joy-Cons', 'Base dock e acessorios']
  },
  5: {
    headline: 'TV QLED 4K com recursos de imagem inteligente',
    summary:
      'Modelo 55 polegadas com foco em contraste, brilho e recursos para streaming, jogos e conectividade da casa.',
    technicalDetails: [
      'Painel QLED 4K de 55 polegadas',
      'Processamento de imagem com IA',
      'Sistema Smart TV com apps de streaming',
      'Conectividade HDMI, USB, Wi-Fi e Bluetooth',
      'Recursos de upscaling e aprimoramento de cor'
    ],
    highlights: [
      'Imagem vibrante para filmes e series',
      'Boa experiencia para consoles e jogos',
      'Interface moderna e facil de usar'
    ],
    inTheBox: ['Smart TV 55', 'Controle remoto', 'Cabos e manual']
  }
}

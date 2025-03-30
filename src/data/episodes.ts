
export interface Episode {
  id: string;
  title: string;
  description: string;
  imagePath: string;
  audioPath: string;
  duration: string;
  date: string;
  featured?: boolean;
}

export const episodes: Episode[] = [
  {
    id: "1",
    title: "L'incoronazione di Napoleone",
    description: "L'incoronazione di Napoleone è un dipinto a olio su tela realizzato tra il 1805 e il 1807 dal pittore Jacques-Louis David.",
    imagePath: "../../episodes/incoronazione-napoleone.jpg",
    audioPath: "../../episodes/incoronazione-napoleone.mp4",
    duration: "02:40",
    date: "2025-03-30",
    featured: false
  },
  {
    id: "2",
    title: "Bal du moulin de la Galette",
    description: "Il Bal du moulin de la Galette è un dipinto del pittore francese Pierre-Auguste Renoir, realizzato nel 1876 con tecnica olio su tela.",
    imagePath: "../../episodes/bal-du.jpg",
    audioPath: "../../episodes/bal-du.mp4",
    duration: "04:11",
    date: "2025-03-30",
    featured: false
  },
  {
    id: "3",
    title: "L’Altalena",
    description: "\"L’Altalena\" è un perfetto esempio della maestria di Renoir nel catturare la luce, il movimento e la vita parigina dell’epoca. Il dipinto non solo incarna l’estetica impressionista, ma trasmette anche un senso di leggerezza e gioia che lo rende uno dei lavori più affascinanti del periodo.",
    imagePath: "../../episodes/altalena.jpg",
    audioPath: "../../episodes/altalena.m4a",
    duration: "02:27",
    date: "2025-03-30",
    featured: false
  },
  {
    id: "4",
    title: "Il Giuramento degli Orazi",
    description: "\"Il giuramento degli Orazi\" di Jacques-Louis David è un capolavoro che sintetizza l’estetica e i valori del Neoclassicismo, offrendo una rappresentazione potente del sacrificio personale in nome del dovere civico e dell’amore per la patria.",
    imagePath: "../../episodes/giuramento-orazi.jpg",
    audioPath: "../../episodes/giuramento-orazi.m4a",
    duration: "03:54",
    date: "2025-03-30",
    featured: false
  },
  {
    id: "5",
    title: "Il Circo",
    description: "“Il Circo” di Georges Searut, dipinto nel 1891, è un’opera che si inserisce perfettamente nel contesto del movimento post-impressionista e nella sua esplorazione innovativa delle tecnica del puntinismo.",
    imagePath: "../../episodes/circo.jpg",
    audioPath: "../../episodes/circo.mp4",
    duration: "04:00",
    date: "2025-03-30",
    featured: false
  },
  {
    id: "6",
    title: "La Libertà che guida il popolo",
    description: "“La Libertà che guida il popolo” è il capolavoro di Eugène Delacroix, il quale volle rendere omaggio alle “Tre Giornate” della rivoluzione parigina del 1830. Il dipinto ritrae una scena dove la ressa tumultuosa è orgogliosamente coinvolta in una lotta armata",
    imagePath: "../../episodes/liberta.jpg",
    audioPath: "../../episodes/liberta.mp4",
    duration: "05:32",
    date: "2025-03-30",
    featured: false
  },
  {
    id: "7",
    title: "Le Nozze di Cana",
    description: "Le Nozze di Cana (Veronese): Un capolavoro del Rinascimento veneziano, raffigurante il miracolo di Gesù che trasforma l'acqua in vino durante un banchetto sontuoso. La scena è ricca di dettagli, colori vibranti e prospettiva scenografica, enfatizzando lo sfarzo e il movimento.",
    imagePath: "../../episodes/nozze.jpg",
    audioPath: "../../episodes/nozze.mp4",
    duration: "03:29",
    date: "2025-03-30",
    featured: false
  },
  {
    id: "8",
    title: "Il Balcone",
    description: "Il Balcone (Manet): Un dipinto impressionista che mostra tre figure su un balcone, con un forte contrasto tra luci e ombre. Il gioco di sguardi e l'uso del colore verde brillante creano un senso di mistero e distacco tra i personaggi.",
    imagePath: "../../episodes/balcone.jpg",
    audioPath: "../../episodes/balcone.mp4",
    duration: "02:01",
    date: "2025-03-30",
    featured: false
  },
  {
    id: "9",
    title: "Il Palazzo del Louvre",
    description: "Il Palazzo del Louvre, originariamente una fortezza medievale del XII secolo, ospita oggi il museo più visitato al mondo con oltre 35.000 opere d’arte. La sua architettura, ampliata da 13 sovrani francesi, combina stili rinascimentali, barocchi e moderni.",
    imagePath: "../../episodes/louvre.jpg",
    audioPath: "../../episodes/louvre.mp4",
    duration: "05:07",
    date: "2025-03-30",
    featured: true
  },
  {
    id: "10",
    title: "Campo di Papaveri",
    description: "Il \"Campo di Papaveri\" (1873) di Claude Monet è un capolavoro dell’Impressionismo che cattura la luce e il movimento della natura. Il dipinto raffigura un vasto prato punteggiato di papaveri rossi, attraversato da figure femminili evanescenti, probabilmente la moglie e il figlio dell’artista. Con pennellate leggere e colori vibranti, Monet trasmette l’impressione fugace di un momento, esaltando la bellezza dell’istante attraverso la luce e il colore.",
    imagePath: "../../episodes/papaveri.jpg",
    audioPath: "../../episodes/papaveri.mp4",
    duration: "02:30",
    date: "2025-03-30",
    featured: false
  },
  {
    id: "11",
    title: "Battaglia di San Romano",
    description: "Il dipinto Battaglia di San Romano di Paolo Uccello, realizzato intorno al 1435, è un celebre esempio di arte rinascimentale. Rappresenta uno degli scontri tra le truppe fiorentine e quelle senesi durante la guerra tra le due città. La particolarità dell’opera è l’innovativa rappresentazione prospettica e l’uso dinamico delle forme, che contribuiscono a rendere la scena di battaglia estremamente vivace e realistica. La composizione si distingue per l’accuratezza nei dettagli, come le armature e gli armamenti, e per il contrasto tra movimento e staticità, che conferisce una sensazione di tensione e drammaticità.",
    imagePath: "../../episodes/battaglia.jpg",
    audioPath: "../../episodes/battaglia.mp4",
    duration: "01:25",
    date: "2025-03-30",
    featured: false
  },
  {
    id: "12",
    title: "La Merlettaia",
    description: "La Merlettaia di Vermeer ritrae una giovane donna intenta a lavorare con estrema concentrazione. La scena, intima e luminosa, esalta la delicatezza dei gesti e dei materiali, simboleggiando la pazienza e la dedizione. I dettagli raffinati e i colori caldi trasmettono un senso di quiete e armonia.",
    imagePath: "../../episodes/merlettaia.jpg",
    audioPath: "../../episodes/merlettaia.mp4",
    duration: "05:26",
    date: "2025-03-30",
    featured: false
  },
  {
    id: "13",
    title: "San Sebastiano",
    description: "Il San Sebastiano di Mantegna raffigura il santo legato a una colonna, trafitto da frecce ma sereno, simbolo di fede. L’opera unisce realismo anatomico, prospettiva e dettagli scultorei, tipici dello stile rinascimentale di Mantegna.",
    imagePath: "../../episodes/mona-lisa.jpg",
    audioPath: "../../episodes/mona-lisa.mp3",
    duration: "02:29",
    date: "2025-03-30",
    featured: false
  },
  {
    id: "14",
    title: "La Vergine delle Rocce",
    description: "La Vergine delle Rocce è un celebre dipinto di Leonardo da Vinci, conservato al Museo del Louvre a Parigi. Realizzato tra il 1483 e il 1486, rappresenta la Vergine Maria con il Bambino Gesù, San Giovanni Battista e un angelo, immersi in un paesaggio roccioso e suggestivo. L’opera è caratterizzata dall’uso magistrale della prospettiva atmosferica, della luce e dello sfumato, tecnica tipica di Leonardo, che crea morbide transizioni tra ombre e luci. Il dipinto esiste in due versioni: una al Louvre e un’altra alla National Gallery di Londra, con alcune differenze nella composizione e nei dettagli.",
    imagePath: "../../episodes/mona-lisa.jpg",
    audioPath: "../../episodes/mona-lisa.mp3",
    duration: "04:05",
    date: "2025-03-30",
    featured: false
  },
  {
    id: "15",
    title: "La Buona Ventura",
    description: "La Buona Ventura è un opera del 1563-1564 del periodo chiaro di Caravaggio. Esso è un famoso esempio tra i due periodi della vita dell'artista, mostrando caratteri e dettagli di entrambi.",
    imagePath: "../../episodes/mona-lisa.jpg",
    audioPath: "../../episodes/mona-lisa.mp3",
    duration: "03:27",
    date: "2025-03-30",
    featured: false
  },
  {
    id: "16",
    title: "La Grande Odalisca",
    description: "Un dipinto neoclassico che ritrae una donna nuda sdraiata con proporzioni allungate e un'eleganza sensuale. L’uso raffinato della luce e dei dettagli esotici enfatizza la bellezza ideale e misteriosa della figura.",
    imagePath: "../../episodes/mona-lisa.jpg",
    audioPath: "../../episodes/mona-lisa.mp3",
    duration: "03:11",
    date: "2025-03-30",
    featured: false
  },
  {
    id: "17",
    title: "Angelus",
    description: "Un'opera realista che raffigura due contadini in un campo, immersi in una preghiera silenziosa al tramonto. La scena trasmette un senso di devozione, semplicità e fatica quotidiana, con una luce calda e malinconica.",
    imagePath: "../../episodes/mona-lisa.jpg",
    audioPath: "../../episodes/mona-lisa.mp3",
    duration: "02:25",
    date: "2025-03-30",
    featured: false
  },
  {
    id: "18",
    title: "La Morte di Sardanapalo",
    description: "La Morte di Sardanapalo è un dipinto del 1827 del pittore romantico Eugène Delacroix. Raffigura l'ultimo momento del leggendario re assiro Sardanapalo, che ordina la distruzione di tutti i suoi beni, concubine e animali prima di togliersi la vita per non cadere nelle mani dei nemici. L'opera è caratterizzata da un uso drammatico del colore, una composizione caotica e un senso di violenza e passione tipico del Romanticismo.",
    imagePath: "../../episodes/mona-lisa.jpg",
    audioPath: "../../episodes/mona-lisa.mp3",
    duration: "03:20",
    date: "2025-03-30",
    featured: false
  },
  
];

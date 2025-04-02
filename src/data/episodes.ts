
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
    imagePath: "../../episodes/sebastiano.jpg",
    audioPath: "../../episodes/sebastiano.mp4",
    duration: "02:29",
    date: "2025-03-30",
    featured: false
  },
  {
    id: "14",
    title: "La Vergine delle Rocce",
    description: "La Vergine delle Rocce è un celebre dipinto di Leonardo da Vinci, conservato al Museo del Louvre a Parigi. Realizzato tra il 1483 e il 1486, rappresenta la Vergine Maria con il Bambino Gesù, San Giovanni Battista e un angelo, immersi in un paesaggio roccioso e suggestivo. L’opera è caratterizzata dall’uso magistrale della prospettiva atmosferica, della luce e dello sfumato, tecnica tipica di Leonardo, che crea morbide transizioni tra ombre e luci. Il dipinto esiste in due versioni: una al Louvre e un’altra alla National Gallery di Londra, con alcune differenze nella composizione e nei dettagli.",
    imagePath: "../../episodes/vergine.jpg",
    audioPath: "../../episodes/vergine.mp4",
    duration: "04:05",
    date: "2025-03-30",
    featured: false
  },
  {
    id: "15",
    title: "La Buona Ventura",
    description: "La Buona Ventura è un opera del 1563-1564 del periodo chiaro di Caravaggio. Esso è un famoso esempio tra i due periodi della vita dell'artista, mostrando caratteri e dettagli di entrambi.",
    imagePath: "../../episodes/buona.jpg",
    audioPath: "../../episodes/buona.m4a",
    duration: "03:27",
    date: "2025-03-30",
    featured: false
  },
  {
    id: "16",
    title: "La Grande Odalisca",
    description: "Un dipinto neoclassico che ritrae una donna nuda sdraiata con proporzioni allungate e un'eleganza sensuale. L’uso raffinato della luce e dei dettagli esotici enfatizza la bellezza ideale e misteriosa della figura.",
    imagePath: "../../episodes/odalisca.jpg",
    audioPath: "../../episodes/odalisca.mp3",
    duration: "03:11",
    date: "2025-03-30",
    featured: false
  },
  {
    id: "17",
    title: "Angelus",
    description: "Un'opera realista che raffigura due contadini in un campo, immersi in una preghiera silenziosa al tramonto. La scena trasmette un senso di devozione, semplicità e fatica quotidiana, con una luce calda e malinconica.",
    imagePath: "../../episodes/angelus.jpg",
    audioPath: "../../episodes/angelus.mp3",
    duration: "02:25",
    date: "2025-03-30",
    featured: false
  },
  {
    id: "18",
    title: "La Morte di Sardanapalo",
    description: "La Morte di Sardanapalo è un dipinto del 1827 del pittore romantico Eugène Delacroix. Raffigura l'ultimo momento del leggendario re assiro Sardanapalo, che ordina la distruzione di tutti i suoi beni, concubine e animali prima di togliersi la vita per non cadere nelle mani dei nemici. L'opera è caratterizzata da un uso drammatico del colore, una composizione caotica e un senso di violenza e passione tipico del Romanticismo.",
    imagePath: "../../episodes/sardanapaolo.jpg",
    audioPath: "../../episodes/sardanapaolo.m4a",
    duration: "03:20",
    date: "2025-03-30",
    featured: false
  },
  {
    id: "19",
    title: "Il Museo d’Orsay",
    description: "Il Museo d’Orsay, ospitato nell’ex stazione ferroviaria Gare d’Orsay, custodisce capolavori dell’arte tra il 1848 e il 1914, tra cui opere di Monet, Van Gogh e Degas. La sua struttura art nouveau, riconvertita dall’architetta Gae Aulenti, unisce storia e arte in un contesto unico",
    imagePath: "../../episodes/museo.jpg",
    audioPath: "../../episodes/museo.mp4",
    duration: "04:24",
    date: "2025-03-30",
    featured: true
  },
  {
    id: "20",
    title: "La stazione di Saint-Lazar",
    description: "La serie \"La stazione di Saint-Lazare\" comprende dodici dipinti realizzati nel 1877 dal pittore impressionista francese Claude Monet. Queste opere raffigurano l'interno della stazione ferroviaria parigina in diverse condizioni atmosferiche e da vari punti di vista.",
    imagePath: "../../episodes/stazione.jpg",
    audioPath: "../../episodes/stazione.m4a",
    duration: "01:25",
    date: "2025-03-30",
    featured: false
  },
  {
    id: "21",
    title: "Olympia",
    description: "\"Olympia\" è l'iconico dipinto di Édouard Manet realizzato nel 1863, che ha suscitato un enorme scalpore al momento della sua esposizione. Quest'opera presenta una donna nuda che sfida l'osservatore con uno sguardo diretto e provocatorio. Manet utilizza una composizione semplice ma efficace, con una palette di colori saturi e pennellate visibili che conferiscono un aspetto moderno all'opera. La figura centrale, una prostituta, non è idealizzata, ma rappresentata in modo realistico, rompendo con le convenzioni artistiche del tempo. In questo episodio, esploreremo la tecnica, la composizione e il significato di \"Olympia\", un'opera che ha rivoluzionato la rappresentazione della figura femminile nell'arte.",
    imagePath: "../../episodes/olympia.jpg",
    audioPath: "../../episodes/olympia.mp4",
    duration: "03:47",
    date: "2025-03-30",
    featured: false
  },
  {
    id: "22",
    title: "Il Funerale a Ornans",
    description: "\"Il Funerale a Ornans\", un'opera monumentale di Gustave Courbet realizzata tra il 1849 e il 1850. Questo dipinto, che misura oltre diciotto metri quadrati, rappresenta un funerale nella cittadina natale dell'artista, Ornans. Con una composizione orizzontale e una palette di colori terrosi, Courbet ritrae una scena di vita quotidiana con una trentina di figure comuni, tra cui il sindaco e i contadini, disposte in modo da formare un fregio. La mancanza di idealizzazione e la rappresentazione cruda della realtà hanno suscitato scalpore, segnando una rottura con le tradizioni romantiche.",
    imagePath: "../../episodes/funerale.jpg",
    audioPath: "../../episodes/funerale.mp4",
    duration: "02:38",
    date: "2025-03-30",
    featured: false
  },
  {
    id: "23",
    title: "Concerto Campestre",
    description: "Il \"Concerto campestre\", attribuito a Tiziano, è un capolavoro della pittura veneziana del Cinquecento, esposto al Louvre. L’opera raffigura due giovani uomini in abiti rinascimentali intenti a suonare musica, affiancati da due figure femminili nude, simboli di ispirazione e armonia. Ambientato in un paesaggio pastorale, il dipinto incarna la fusione tra arte, natura e musica, esaltando il tonalismo veneziano con un raffinato uso della luce e del colore.",
    imagePath: "../../episodes/concerto.jpg",
    audioPath: "../../episodes/concerto.mp4",
    duration: "02:51",
    date: "2025-03-30",
    featured: false
  },
  {
    id: "24",
    title: "La Zattera della Medusa",
    description: "La Zattera della Medusa (Géricault, Louvre): Un drammatico capolavoro romantico che raffigura i sopravvissuti di un naufragio alla deriva, in bilico tra disperazione e speranza. L'uso magistrale di luce, movimento e anatomia enfatizza la tragedia umana e la tensione emotiva.",
    imagePath: "../../episodes/zattera.jpg",
    audioPath: "../../episodes/zattera.mp4",
    duration: "01:49",
    date: "2025-03-30",
    featured: false
  },
  {
    id: "25",
    title: "Il Ponte di Argenteuil",
    description: "Il Ponte di Argenteuil (Monet): Un'opera impressionista che cattura la luce e i riflessi dell'acqua sotto un ponte sulla Senna. I colori vivaci e le pennellate rapide trasmettono la bellezza fugace della natura e l'atmosfera serena del paesaggio.",
    imagePath: "../../episodes/ponte.jpg",
    audioPath: "../../episodes/ponte.mp4",
    duration: "01:22",
    date: "2025-03-30",
    featured: false
  },
  {
    id: "26",
    title: "La Madonna del Cancelliere Rolin",
    description: "La Madonna del Cancelliere Rolin è un dipinto olio su tavola (66x62 cm) di Jan van Eyck, databile al 1435 circa e conservata nel Museo del Louvre a Parigi.",
    imagePath: "../../episodes/cancelliere.jpg",
    audioPath: "../../episodes/cancelliere.mp4",
    duration: "05:07",
    date: "2025-03-30",
    featured: false
  },
  {
    id: "27",
    title: "La camera di Vincent ad Arles",
    description: "La camera di Vincent ad Arles è il nome di tre dipinti del pittore olandese Vincent van Gogh, realizzati tra il 1888 ed il 1889 e conservati rispettivamente presso il Van Gogh Museum di Amsterdam, l'Art Institute of Chicago ed il museo d'Orsay di Parigi.",
    imagePath: "../../episodes/camera.jpg",
    audioPath: "../../episodes/camera.mp4",
    duration: "05:55",
    date: "2025-03-30",
    featured: false
  },
  {
    id: "28",
    title: "Massacro di Scio",
    description: "Il \"Massacro di Scio\" è un dipinto a olio su tela realizzato nel 1824 da Eugène Delacroix. L’opera misura 417x354 cm ed è una delle principali del Romanticismo francese.",
    imagePath: "../../episodes/massacro.jpg",
    audioPath: "../../episodes/massacro.mp4",
    duration: "01:46",
    date: "2025-03-30",
    featured: false
  },
  {
    id: "29",
    title: "Amore e Psiche",
    description: "\"Amore e Psiche\" è un gruppo scultoreo di Antonio Canova, uno dei più grandi artisti del neoclassicismo europeo. L'opera trae origine da un mito greco, intitolato \"L'asino d'oro\"; l'episodio della favola rappresentato, è quello in cui Amore rianima Psiche, una fanciulla di irresistibile fascino che, contravvenendo agli ordini, aveva aperto un vaso ricevuto negli Inferi da Proserpina, destinato alla dea Venere, cadendo così in un sonno profondo.",
    imagePath: "../../episodes/psiche.jpg",
    audioPath: "../../episodes/psiche.mp4",
    duration: "01:42",
    date: "2025-03-30",
    featured: false
  },
  {
    id: "30",
    title: "Notte stellata sul Rodano",
    description: "\"Notte stellata sul Rodano\" è un dipinto  realizzato da Vincent van Gogh nel 1888; l’opera raffigura un paesaggio notturno, in cui il fiume Rodano scorre calmo sotto ad un cielo profondo e scuro, illuminato da una costellazione di stelle brillanti, così come dalle luci della città, creando un atmosfera in cui la natura si fonde con la luce artificiale, e dunque con la presenza umana.",
    imagePath: "../../episodes/notte.jpg",
    audioPath: "../../episodes/notte.mp4",
    duration: "03:06",
    date: "2025-03-30",
    featured: false
  },
  {
    id: "31",
    title: "La Morte della Vergine",
    description: "\"La Morte della Vergine\" di Caravaggio (1601-1606) raffigura Maria senza idealizzazione, con un corpo livido e abbandonato, ispirato – secondo alcune fonti – a una prostituta annegata. La luce esalta il dolore degli apostoli, creando un’atmosfera intensa e realistica.",
    imagePath: "../../episodes/morte.jpg",
    audioPath: "../../episodes/morte.mp4",
    duration: "03;45",
    date: "2025-03-30",
    featured: false
  },
  {
    id: "32",
    title: "L'infanta Margherita in azzurro",
    description: "L'infanta Margherita in azzurro è un dipinto a olio su tela di 127x107 cm realizzato nel 1659 dal pittore Diego Velázquez. il dipinto ritrae l'infanta Margherita Teresa di Spagna (1651-1673) all'età di otto anni.",
    imagePath: "../../episodes/infanta.jpg",
    audioPath: "../../episodes/infanta.mp4",
    duration: "02:42",
    date: "2025-03-30",
    featured: false
  },
  
];

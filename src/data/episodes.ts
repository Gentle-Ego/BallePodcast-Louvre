
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
    title: "The Mona Lisa: Beyond the Smile",
    description: "Discover the secrets and history behind Leonardo da Vinci's masterpiece. We explore the techniques used, the subject's identity, and why this painting has captivated viewers for centuries.",
    imagePath: "/episodes/mona-lisa.jpg",
    audioPath: "/episodes/mona-lisa.mp3",
    duration: "35:42",
    date: "2023-06-15",
    featured: true
  },
  {
    id: "2",
    title: "Venus de Milo: Beauty in Fragments",
    description: "The story of how a fragmented ancient Greek statue became one of the most celebrated sculptures in the world. We discuss its discovery, the missing arms mystery, and its influence on art history.",
    imagePath: "/episodes/venus-de-milo.jpg",
    audioPath: "/episodes/venus-de-milo.mp3",
    duration: "28:15",
    date: "2023-06-22"
  },
  {
    id: "3",
    title: "Winged Victory of Samothrace",
    description: "This episode explores the magnificent Hellenistic sculpture of Nike, the Greek goddess of victory. Learn about its creation, discovery on the island of Samothrace, and the technical brilliance that allows a marble statue to appear as if in motion.",
    imagePath: "/episodes/winged-victory.jpg",
    audioPath: "/episodes/winged-victory.mp3",
    duration: "31:50",
    date: "2023-06-29",
    featured: true
  },
  {
    id: "4",
    title: "The Coronation of Napoleon",
    description: "Jacques-Louis David's massive painting depicting Napoleon's coronation is a masterpiece of propaganda and artistry. We analyze the political context, symbolism, and the fascinating details hidden in this enormous canvas.",
    imagePath: "/episodes/napoleon.jpg",
    audioPath: "/episodes/napoleon.mp3",
    duration: "42:18",
    date: "2023-07-06"
  },
  {
    id: "5",
    title: "Liberty Leading the People: Revolution in Color",
    description: "Delacroix's iconic painting of the July Revolution of 1830 combines allegorical symbolism with brutal realism. We discuss its political impact, its use of color and composition, and how it has become a universal symbol of liberty.",
    imagePath: "/episodes/liberty.jpg",
    audioPath: "/episodes/liberty.mp3",
    duration: "38:24",
    date: "2023-07-13"
  },
  {
    id: "6",
    title: "Egyptian Antiquities: Pharaohs in Paris",
    description: "Explore the Louvre's exceptional collection of Egyptian artifacts, from the Great Sphinx of Tanis to delicate papyrus scrolls. Learn how these treasures arrived in Paris and what they tell us about one of history's most fascinating civilizations.",
    imagePath: "/episodes/egyptian.jpg",
    audioPath: "/episodes/egyptian.mp3",
    duration: "45:11",
    date: "2023-07-20",
    featured: true
  },
  {
    id: "7",
    title: "The Raft of the Medusa: Tragedy on Canvas",
    description: "Géricault's harrowing masterpiece depicts the aftermath of a real-life shipwreck that scandalized French society. We examine the painting's composition, its political context, and the gruesome research that went into creating this unforgettable scene.",
    imagePath: "/episodes/raft-medusa.jpg",
    audioPath: "/episodes/raft-medusa.mp3",
    duration: "40:35",
    date: "2023-07-27"
  },
  {
    id: "8",
    title: "Islamic Art at the Louvre",
    description: "Journey through the Louvre's spectacular collection of Islamic art spanning three continents and more than a thousand years. From intricate calligraphy to brilliant ceramics, discover the rich artistic traditions of the Islamic world.",
    imagePath: "/episodes/islamic-art.jpg",
    audioPath: "/episodes/islamic-art.mp3",
    duration: "36:47",
    date: "2023-08-03"
  },
  {
    id: "9",
    title: "The Louvre Itself: From Fortress to Museum",
    description: "The building that houses the museum has a fascinating history of its own. Originally built as a fortress in the 12th century, it evolved into a royal palace before becoming the world's most visited museum. We trace this remarkable architectural journey.",
    imagePath: "/episodes/louvre-building.jpg",
    audioPath: "/episodes/louvre-building.mp3",
    duration: "43:29",
    date: "2023-08-10"
  },
  {
    id: "10",
    title: "Hidden Gems: Lesser-Known Treasures",
    description: "Move beyond the crowded rooms housing the most famous works and discover the Louvre's secret masterpieces. Art historians share their favorite overlooked treasures and explain why these works deserve more attention.",
    imagePath: "/episodes/hidden-gems.jpg",
    audioPath: "/episodes/hidden-gems.mp3",
    duration: "39:56",
    date: "2023-08-17"
  }
];

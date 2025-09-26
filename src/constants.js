export const LEAGUES = {
  "super_lig": {
    id: "super_lig",
    name: "Süper Lig",
    country: "TR",
    teams: [
      { id: "GS", name: 'Galatasaray', abbr: 'GS', color1: '#FDB913', color2: '#A30008', logo: 'gs.png' },
      { id: "FB", name: 'Fenerbahçe', abbr: 'FB', color1: '#003366', color2: '#FFCC00', logo: 'fb.png' },
      { id: "BJK", name: 'Beşiktaş', abbr: 'BJK', color1: '#000000', color2: '#FFFFFF', logo: 'bjk.png' },
      { id: "TS", name: 'Trabzonspor', abbr: 'TS', color1: '#8B0000', color2: '#87CEEB', logo: 'ts.png' },
      { id: "IBFK", name: 'Başakşehir', abbr: 'İBFK', color1: '#FF6600', color2: '#003366', logo: 'ibfk.png' },
      { id: "ADS", name: 'Adana Demirspor', abbr: 'ADS', color1: '#003366', color2: '#418FDE', logo: 'ads.png' },
      { id: "ALA", name: 'Alanyaspor', abbr: 'ALA', color1: '#FF6600', color2: '#008000', logo: 'ala.png' },
      { id: "ANT", name: 'Antalyaspor', abbr: 'ANT', color1: '#FF0000', color2: '#FFFFFF', logo: 'ant.png' }
      // Diğer takımları buraya ekleyebiliriz. Şimdilik 8 takım yeterli.
    ]
  },
  "premier_lig": {
    id: "premier_lig",
    name: "Premier League",
    country: "GB",
    teams: [
      { id: "MCI", name: 'Man City', abbr: 'MCI', color1: '#6CABDD', color2: '#FFFFFF', logo: 'mci.png' },
      { id: "LIV", name: 'Liverpool', abbr: 'LIV', color1: '#C8102E', color2: '#FFFFFF', logo: 'liv.png' },
      { id: "MUN", name: 'Man United', abbr: 'MUN', color1: '#DA291C', color2: '#000000', logo: 'mun.png' },
      { id: "ARS", name: 'Arsenal', abbr: 'ARS', color1: '#EF0107', color2: '#FFFFFF', logo: 'ars.png' },
      { id: "CHE", name: 'Chelsea', abbr: 'CHE', color1: '#034694', color2: '#FFFFFF', logo: 'che.png' },
      { id: "TOT", name: 'Tottenham', abbr: 'TOT', color1: '#132257', color2: '#FFFFFF', logo: 'tot.png' },
      { id: "NEW", name: 'Newcastle', abbr: 'NEW', color1: '#241F20', color2: '#FFFFFF', logo: 'new.png' },
      { id: "AVL", name: 'Aston Villa', abbr: 'AVL', color1: '#95BFE5', color2: '#670E36', logo: 'avl.png' }
    ]
  }
  // Diğer ligler (serie_a, la_liga vb.) daha sonra buraya eklenecek.
};

// Eski TEAMS dizisini kullanan kodların bozulmaması için geçici bir çözüm
// ya da tüm takımları tek bir listede toplayan bir yardımcı fonksiyon
export const getAllTeams = () => {
    return Object.values(LEAGUES).flatMap(league => league.teams);
};

export const DIFFICULTY_LEVELS = [
    { id: 'very-easy', label: 'Çok Kolay' },
    { id: 'easy', label: 'Kolay' },
    { id: 'normal', label: 'Normal' },
    { id: 'hard', label: 'Zor' },
    { id: 'very-hard', label: 'Çok Zor' },
];

export const AI_SPEED_MULTIPLIERS = {
  'very-easy': 0.04,
  'easy': 0.07,
  'normal': 0.1,
  'hard': 0.13,
  'very-hard': 0.16
};

export const GAME_DURATION = 90;
export const HALF_TIME = 45;
export const OVERTIME_DURATION = 15;

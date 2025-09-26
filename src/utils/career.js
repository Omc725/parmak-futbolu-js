// src/utils/career.js

const CAREER_STORAGE_KEY = 'finger_soccer_career';

/**
 * Kayıtlı bir kariyer olup olmadığını kontrol eder.
 * @returns {boolean}
 */
export const hasSavedCareer = () => {
  return localStorage.getItem(CAREER_STORAGE_KEY) !== null;
};

/**
 * Mevcut kariyeri localStorage'dan yükler.
 * @returns {object | null}
 */
export const loadCareer = () => {
  const savedData = localStorage.getItem(CAREER_STORAGE_KEY);
  if (savedData) {
    return JSON.parse(savedData);
  }
  return null;
};

/**
 * Verilen kariyer nesnesini localStorage'a kaydeder.
 * @param {object} careerData - Kaydedilecek kariyer verisi.
 */
export const saveCareer = (careerData) => {
  localStorage.setItem(CAREER_STORAGE_KEY, JSON.stringify(careerData));
};

/**
 * Yeni bir kariyer nesnesi oluşturur.
 * @param {string} leagueId - Başlanacak ligin ID'si (örn: "super_lig").
 * @param {object} selectedTeam - Başlanacak takım nesnesi.
 * @returns {object}
 */
export const createNewCareer = (leagueId, selectedTeam) => {
  return {
    playerTeamId: selectedTeam.id,
    currentLeagueId: leagueId,
    currentSeason: 1, // veya "2025/2026" gibi bir string
    
    // Sezonluk verileri tutacak alanlar
    leagueState: {
      fixtures: [],
      table: [],
      currentWeek: 0,
    },
    
    // Gelecekteki özellikler için yer tutucular
    europeanCompetitions: null, // "UCL", "UEL" veya null
    history: [], // Geçmiş sezonların özetleri
  };
};

/**
 * Kayıtlı kariyeri localStorage'dan siler.
 */
export const deleteCareer = () => {
  localStorage.removeItem(CAREER_STORAGE_KEY);
};

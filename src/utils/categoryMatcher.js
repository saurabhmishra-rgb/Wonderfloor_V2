// utils/categoryMatcher.js
export const INDUSTRY_CATEGORIES = [
  'Industrial Flooring',
  'Office Flooring',
  'Residential Flooring',
  'School Flooring',
  'Sports Flooring',
  'Supermarket Flooring',
  'Transport Flooring',
  'Hospital Flooring',
  'Auditorium Flooring',
  'Hotel/ Hospitality Flooring',
  'Prefab Flooring',
];

const CATEGORY_KEYWORDS = {
  'Industrial Flooring': ['industrial', 'factory', 'warehouse', 'workshop', 'plant', 'manufacturing', 'assembly line', 'garage'],
  'Office Flooring': ['office', 'workspace', 'cabin', 'cubicle', 'corporate', 'conference', 'desk', 'meeting room', 'home office'],
  'Residential Flooring': [
    'residential', 'home', 'house', 'kitchen', 'bedroom', 'living room', 'living',
    'apartment', 'flat', 'dining room', 'dining', 'lounge', 'television room',
    'tv room', 'family room', 'recreation room', 'bathroom', 'nursery',
    'attic', 'basement', 'closet', 'staircase', 'hallway', 'entrance hall',
  ],
  'School Flooring': ['school', 'classroom', 'college', 'university', 'education', 'campus', 'library', 'lecture room'],
  'Sports Flooring': ['sports', 'gym', 'gymnasium', 'stadium', 'court', 'playground', 'fitness', 'arena', 'sports hall'],
  'Supermarket Flooring': ['supermarket', 'store', 'retail', 'mall', 'shop', 'grocery', 'market', 'shopping'],
  'Transport Flooring': ['transport', 'airport', 'station', 'metro', 'bus', 'train', 'terminal', 'subway', 'railway'],
  'Hospital Flooring': ['hospital', 'clinic', 'medical', 'ward', 'healthcare', 'pharmacy', 'operating room', 'emergency room'],
  'Auditorium Flooring': ['auditorium', 'theater', 'theatre', 'hall', 'cinema', 'stage', 'concert hall', 'movie theater'],
  'Hotel/ Hospitality Flooring': ['hotel', 'hospitality', 'resort', 'lobby', 'restaurant', 'cafe', 'reception', 'banquet hall', 'bar'],
  'Prefab Flooring': ['prefab', 'prefabricated', 'modular', 'container', 'portable'],
};

export function matchIndustryCategory(scene) {
  if (!scene) return null;
  const arr = Array.isArray(scene) ? scene : [scene];

  const entries = arr.map((item) => {
    if (typeof item === 'object' && item !== null) {
      const raw = item.scene || item.label || item.name || item.class || '';
      return {
        label: String(raw).toLowerCase().replace(/[_-]/g, ' ').trim(),
        confidence: typeof item.confidence === 'number' ? item.confidence : 1,
      };
    }
    return { label: String(item).toLowerCase().replace(/[_-]/g, ' ').trim(), confidence: 1 };
  }).filter(e => e.label);

  if (entries.length === 0) {
    console.warn('🔍 [categoryMatcher] Koi valid labels nahi mile, scene:', scene);
    return null;
  }

  console.group('🔍 [categoryMatcher] Matching process');
  // console.log('Normalized labels:', entries);

  let bestMatch = null;
  let bestScore = 0;
  const allScores = {}; 

  for (const category of INDUSTRY_CATEGORIES) {
    const keywords = CATEGORY_KEYWORDS[category] || [];
    let score = 0;
    const matchedPairs = []; 

    for (const { label, confidence } of entries) {
      for (const keyword of keywords) {
        if (label.includes(keyword) || keyword.includes(label)) {
          score += confidence;
          matchedPairs.push(`"${label}" ↔ "${keyword}" (+${confidence.toFixed(2)})`);
        }
      }
    }

    allScores[category] = { score: score.toFixed(2), matchedPairs };

    if (score > bestScore) {
      bestScore = score;
      bestMatch = category;
    }
  }

  //  NAYA — sirf wahi categories log karo jinka score > 0 hai (noise kam)
  console.table(
    Object.entries(allScores)
      .filter(([, v]) => v.score > 0)
      .reduce((acc, [cat, v]) => {
        acc[cat] = { score: v.score, matches: v.matchedPairs.join(', ') };
        return acc;
      }, {})
  );

  // console.log(' Winner:', bestMatch || ' No category scored above 0', `(score: ${bestScore.toFixed(2)})`);
  console.groupEnd();

  return bestMatch;
}

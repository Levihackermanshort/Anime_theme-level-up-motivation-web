// Sample leveling logic implementation

// Calculate XP needed for a given level
export function xpForLevel(level) {
  return Math.floor(100 * Math.pow(level, 1.5));
}

// Add XP to the user's total and return new level and remaining XP
export function addXP(currentXP, xpGained) {
  let newXP = currentXP + xpGained;
  let level = 1;
  while (xpForLevel(level) <= newXP) {
    level++;
  }
  level--; // Adjust level to the highest level achieved
  const remainingXP = newXP - xpForLevel(level);
  return { level, remainingXP };
} 
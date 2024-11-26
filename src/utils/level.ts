const levelCoinsMapping: Record<number, number> = {
  0: 1,
  2: 5,
  3: 10,
  4: 20,
  5: 30,
  6: 50,
  7: 75,
  8: 100,
  9: 125,
  10: 150,
  11: 200,
  12: 250,
  13: 300,
  14: 350,
  15: 400,
  16: 500,
  17: 600,
  18: 700,
  19: 800,
  20: 900,
};

export function getLevel(coins: number) {
  for (const [level, requiredCoins] of Object.entries(
    levelCoinsMapping,
  ).toReversed()) {
    const numberLevel = Number.parseInt(level);
    if (coins >= requiredCoins) {
      return numberLevel;
    }
  }
}

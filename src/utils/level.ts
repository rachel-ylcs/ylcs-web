export type BackgroundGroupType =
  | "fucaoweiying"
  | "fenghuaxueyue"
  | "liuli"
  | "shanseyouwuzhong";

export interface LevelInfo {
  level: number;
  requiredCoins: number;
  name: string;
  backgroundGroup: BackgroundGroupType;
}

export const levels: LevelInfo[] = [
  {
    level: 0,
    requiredCoins: 0,
    name: "风露婆娑",
    backgroundGroup: "fucaoweiying",
  },
  {
    level: 1,
    requiredCoins: 5,
    name: "剑心琴魄",
    backgroundGroup: "fucaoweiying",
  },
  {
    level: 2,
    requiredCoins: 10,
    name: "梦外篝火",
    backgroundGroup: "fucaoweiying",
  },
  {
    level: 3,
    requiredCoins: 20,
    name: "烈火胜情爱",
    backgroundGroup: "fucaoweiying",
  },
  {
    level: 4,
    requiredCoins: 30,
    name: "青山撞入怀",
    backgroundGroup: "fucaoweiying",
  },
  {
    level: 5,
    requiredCoins: 50,
    name: "雨久苔如海",
    backgroundGroup: "fenghuaxueyue",
  },
  {
    level: 6,
    requiredCoins: 75,
    name: "明雪澄岚",
    backgroundGroup: "fenghuaxueyue",
  },
  {
    level: 7,
    requiredCoins: 100,
    name: "春风韵尾",
    backgroundGroup: "fenghuaxueyue",
  },
  {
    level: 8,
    requiredCoins: 125,
    name: "银河万顷",
    backgroundGroup: "fenghuaxueyue",
  },
  {
    level: 9,
    requiredCoins: 150,
    name: "山川蝴蝶",
    backgroundGroup: "fenghuaxueyue",
  },
  { level: 10, requiredCoins: 200, name: "薄暮忽晚", backgroundGroup: "liuli" },
  { level: 11, requiredCoins: 250, name: "沧流彼岸", backgroundGroup: "liuli" },
  { level: 12, requiredCoins: 300, name: "清荷玉盏", backgroundGroup: "liuli" },
  { level: 13, requiredCoins: 350, name: "颜如舜华", backgroundGroup: "liuli" },
  { level: 14, requiredCoins: 400, name: "逃奔风月", backgroundGroup: "liuli" },
  {
    level: 15,
    requiredCoins: 500,
    name: "自在盈缺",
    backgroundGroup: "shanseyouwuzhong",
  },
  {
    level: 16,
    requiredCoins: 600,
    name: "青鸟遁烟",
    backgroundGroup: "shanseyouwuzhong",
  },
  {
    level: 17,
    requiredCoins: 700,
    name: "天生妙罗帷",
    backgroundGroup: "shanseyouwuzhong",
  },
  {
    level: 18,
    requiredCoins: 800,
    name: "梦醒般惊蜕",
    backgroundGroup: "shanseyouwuzhong",
  },
  {
    level: 19,
    requiredCoins: 900,
    name: "韶华的结尾",
    backgroundGroup: "shanseyouwuzhong",
  },
];

export function getLevel(coins: number) {
  return (
    levels.toReversed().find((level) => coins >= level.requiredCoins)!.level + 1
  );
}

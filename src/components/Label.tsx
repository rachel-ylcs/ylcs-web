import fucaoweiyingUrl from "/label-background/fucaoweiying.webp?url";
import Text from "./Text";
import fenghuaxueyueUrl from "/label-background/fenghuaxueyue.webp?url";
import liuliUrl from "/label-background/liuli.webp?url";
import type { BackgroundGroupType, LevelInfo } from "../utils/level";
import shanseyouwuzhongUrl from "/label-background/shanseyouwuzhong.webp?url";

const backgroundUrlMapping: Record<BackgroundGroupType, string> = {
  fucaoweiying: fucaoweiyingUrl,
  fenghuaxueyue: fenghuaxueyueUrl,
  liuli: liuliUrl,
  shanseyouwuzhong: shanseyouwuzhongUrl,
};

interface Props {
  level: LevelInfo;
}

export default function Label({ level }: Props) {
  return (
    <div className="relative">
      <img
        className="h-12"
        src={backgroundUrlMapping[level.backgroundGroup]}
        alt={`Label of level ${level}`}
      />
      <Text className="font-700 absolute top-4 left-5">{level.name}</Text>
    </div>
  );
}

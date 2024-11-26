import { getUserAvatarUrl, getUserWallPictureUrl } from "../api/pictures";
import { logout, useUser } from "../api/users";
import Column from "../components/Column";
import PrimaryButton from "../components/PrimaryButton";
import placeholderLoadingUrl from "/placeholder-loading.webp?url";
import Text from "../components/Text";
import useTitle from "../hooks/useTitle";
import clsx from "clsx";
import Row from "../components/Row";
import { getLevel, levels } from "../utils/level";
import Label from "../components/Label";

async function doLogout() {
  const token = window.localStorage.getItem("token");
  if (token) {
    await logout({ token });
    window.localStorage.removeItem("token");
  }

  window.location.href = "/login";
}

export default function RachelFan() {
  useTitle("小银子");
  const { data } = useUser();

  return (
    <Column className="relative">
      <img
        className={clsx("h-48", {
          "object-cover": data,
          "object-contain": !data,
        })}
        src={
          data
            ? getUserWallPictureUrl({ userId: data.uid })
            : placeholderLoadingUrl
        }
        // biome-ignore lint/a11y/noRedundantAlt: <explanation>
        alt={`Wall Picture of user ${data ? data.name : "[loading]"}`}
      />
      <img
        className="absolute top-38 left-4 size-20 border-2 rounded-full"
        src={
          data ? getUserAvatarUrl({ userId: data.uid }) : placeholderLoadingUrl
        }
        alt={`Avatar of user ${data ? data.name : "[loading]"}`}
      />
      <Column className="gap-2">
        <Row className="pr-4 ml-28 justify-between items-center">
          <Text className="font-700 pt-2">{data ? data.name : "加载中"}</Text>
          {data && (
            <Label
              level={levels.find((item) => item.level === getLevel(data.coin))!}
            />
          )}
        </Row>
        <Row className="gap-4 px-4">
          <Column>
            <Text className="text-nowrap">
              {data ? data.coin : "加载中"} 银币 ·{" "}
              {data ? getLevel(data.coin) : "加载中"} 级
            </Text>
            <Text>邀请人：{data ? data.inviterName : "加载中"}</Text>
          </Column>
          <Text className="text-wrap">{data ? data.signature : "加载中"}</Text>
        </Row>
      </Column>
      <PrimaryButton onClick={doLogout}>注销</PrimaryButton>
    </Column>
  );
}

import { getUserAvatarUrl, getUserWallPictureUrl } from "../api/pictures";
import { logout, useUser } from "../api/users";
import Column from "../components/Column";
import PrimaryButton from "../components/PrimaryButton";
import placeholderLoadingUrl from "/placeholder-loading.webp?url";
import Text from "../components/Text";
import useTitle from "../hooks/useTitle";
import clsx from "clsx";
import Row from "../components/Row";
import { getLevel } from "../utils/level";

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
    <Column className="gap-4">
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
        className="fixed top-38 left-4 size-20 border-2 rounded-full"
        src={
          data ? getUserAvatarUrl({ userId: data.uid }) : placeholderLoadingUrl
        }
        alt={`Avatar of user ${data ? data.name : "[loading]"}`}
      />
      <Row className="ml-28 gap-4">
        <Text className="font-700">{data ? data.name : "加载中..."}</Text>
        <Text>
          {data ? data.coin : "加载中"} 银币 ·{" "}
          {data ? getLevel(data.coin) : "加载中"} 级
        </Text>
      </Row>
      <Text className="ml-28">{data ? data.signature : "加载中..."}</Text>
      <PrimaryButton onClick={doLogout}>注销</PrimaryButton>
    </Column>
  );
}

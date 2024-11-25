import { assetsBaseUrl } from "../api/base";
import Column from "./Column";
import Icon from "./Icon";
import Row from "./Row";
import Text from "./Text";

interface Props {
  title: string;
  picture: string | null;
  userId: number;
  userName: string;
  coins: number;
  comments: number;
}

export default function TopicCard({
  title,
  picture,
  userId,
  userName,
  coins,
  comments,
}: Props) {
  return (
    <Column className="items-center gap-2 p-2 my-2 border rounded-lg">
      {/* biome-ignore lint/a11y/useAltText: <explanation> */}
      {picture && (
        <img
          className="w-full"
          src={`${assetsBaseUrl}/users/${userId}/pics/${picture}.webp`}
        />
      )}
      <Text className="font-700">{title}</Text>
      <Row className="items-center gap-2">
        <img
          className="rounded-full size-8"
          src={`${assetsBaseUrl}/users/${userId}/avatar.webp`}
          alt={`avatar of ${userName}`}
        />
        <Text>{userName}</Text>
      </Row>
      <Row className="gap-2 justify-around w-full">
        <Row className="gap-1 items-center">
          <Icon className="size-4 text-black" icon="i-mdi-coins-outline" />
          <Text>{coins}</Text>
        </Row>
        <Row className="gap-1 items-center">
          <Icon className="size-4 text-black" icon="i-mdi-comment-outline" />
          <Text>{comments}</Text>
        </Row>
      </Row>
    </Column>
  );
}

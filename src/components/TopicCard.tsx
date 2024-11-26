import clsx from "clsx";
import Column from "./Column";
import Icon from "./Icon";
import Row from "./Row";
import Text from "./Text";
import { getTopicFirstPictureUrl, getUserAvatarUrl } from "../api/pictures";

interface Props {
  title: string;
  pictureId: string | null;
  userId: number;
  userName: string;
  coins: number;
  comments: number;
}

export default function TopicCard({
  title,
  pictureId,
  userId,
  userName,
  coins,
  comments,
}: Props) {
  return (
    <Column
      className={clsx(
        "items-center gap-2 pb-2 mb-2 border rounded-lg shadow break-inside-avoid",
        { "pt-2": !pictureId },
      )}
    >
      {/* biome-ignore lint/a11y/useAltText: <explanation> */}
      {pictureId && (
        <img
          className="w-full rounded-t-lg"
          src={getTopicFirstPictureUrl({ userId, pictureId })}
        />
      )}
      <Text className="font-700">{title}</Text>
      <Row className="items-center gap-2">
        <img
          className="rounded-full size-8"
          src={getUserAvatarUrl({ userId })}
          alt={`avatar of ${userName}`}
        />
        <Text>{userName}</Text>
      </Row>
      <Row className="gap-2 justify-around w-full">
        <Row className="gap-1 items-center">
          <Icon className="size-4 text-black" icon="i-mdi-comment-outline" />
          <Text>{comments}</Text>
        </Row>
        <Row className="gap-1 items-center">
          <Icon className="size-4 text-black" icon="i-mdi-coins-outline" />
          <Text>{coins}</Text>
        </Row>
      </Row>
    </Column>
  );
}

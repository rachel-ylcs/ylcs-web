import { assetsBaseUrl } from "./base";

export function getTopicFirstPictureUrl({
  userId,
  pictureId,
}: { userId: number; pictureId: string }) {
  return `${assetsBaseUrl}/users/${userId}/pics/${pictureId}.webp`;
}

export function getUserAvatarUrl({ userId }: { userId: number }) {
  return `${assetsBaseUrl}/users/${userId}/avatar.webp`;
}

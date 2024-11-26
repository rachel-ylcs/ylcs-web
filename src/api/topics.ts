import { useData } from "../hooks/useData";
import type { EmptyRequestType } from "./base";

interface TopicItem {
  tid: number;
  uid: number;
  name: string;
  title: string;
  pic: string | null;
  isTop: boolean;
  coinNum: number;
  commentNum: number;
}

export function useTopics() {
  return useData<EmptyRequestType, TopicItem[]>({
    endpoint: "/user/getHotTopic",
    body: {},
  });
}

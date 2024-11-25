import { useData } from "../hooks/useData";

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

export function useTopic() {
  return useData<Record<string, never>, TopicItem[]>({
    endpoint: "/user/getHotTopic",
    body: {},
  });
}

import { useTopic } from "../api/topic";
import Navbar from "../components/Navbar";
import TopicCard from "../components/TopicCard";
import useTitle from "../hooks/useTitle";

export default function Discovery() {
  useTitle("发现");
  const { data, isLoading } = useTopic();

  return (
    <>
      <div className="grid gap-2 grid-cols-2 sm:grid-cols-3">
        {isLoading ? (
          data?.map((item) => (
            <TopicCard
              key={item.tid}
              id={item.tid}
              title={item.title}
              picture={item.picture}
              userId={item.uid}
              userName={item.name}
              isTop={item.isTop}
              coins={item.coinNum}
              comments={item.commentNum}
            />
          ))
        ) : (
          <div className="size-48 bg-red" />
        )}
      </div>

      <Navbar activeTab="discovery" />
    </>
  );
}

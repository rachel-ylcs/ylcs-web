import { useTopic } from "../api/topic";
import Loading from "../components/Loading";
import TopicCard from "../components/TopicCard";
import useTitle from "../hooks/useTitle";

export default function Discovery() {
  useTitle("发现");
  const { data } = useTopic();

  return (
    <>
      {data ? (
        <div className="columns-2 sm:columns-3 p-2">
          {data.map((item) => (
            <TopicCard
              key={item.tid}
              title={item.title}
              picture={item.pic}
              userId={item.uid}
              userName={item.name}
              coins={item.coinNum}
              comments={item.commentNum}
            />
          ))}
        </div>
      ) : (
        <div className="grid place-content-center h-screen">
          <Loading />
        </div>
      )}
    </>
  );
}

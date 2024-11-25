import Navbar from "../components/Navbar";
import Text from "../components/Text";
import useTitle from "../hooks/useTitle";

export default function Message() {
  useTitle("消息");

  return (
    <>
      <Text>消息</Text>

      <Navbar />
    </>
  );
}

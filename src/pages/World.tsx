import Navbar from "../components/Navbar";
import Text from "../components/Text";
import useTitle from "../hooks/useTitle";

export default function World() {
  useTitle("世界");

  return (
    <>
      <div className="grid place-content-center h-screen">
        <Text className="text-[#4682B4] text-2xl">世界因你更精彩！</Text>
      </div>

      <Navbar activeTab="world" />
    </>
  );
}

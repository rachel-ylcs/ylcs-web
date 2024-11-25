import { logout } from "../api/user";
import Navbar from "../components/Navbar";
import PrimaryButton from "../components/PrimaryButton";
import useTitle from "../hooks/useTitle";

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

  return (
    <>
      <PrimaryButton onClick={doLogout}>注销</PrimaryButton>

      <Navbar activeTab="rachel-fan" />
    </>
  );
}

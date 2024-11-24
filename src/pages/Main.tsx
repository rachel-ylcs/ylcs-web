import { signal } from "@preact/signals";
import type { NavbarType } from "../components/Navbar";
import Navbar from "../components/Navbar";
import Discovery from "./Discovery";
import World from "./World";
import Message from "./Message";
import RachelFan from "./RachelFan";

const activeTab = signal<NavbarType>("rachel-fan");

export default function Main() {
  return (
    <>
      {activeTab.value === "world" && <World />}
      {activeTab.value === "message" && <Message />}
      {activeTab.value === "discovery" && <Discovery />}
      {activeTab.value === "rachel-fan" && <RachelFan />}
      <Navbar activeTab={activeTab} />
    </>
  );
}

import type { Signal } from "@preact/signals";
import Row from "./Row";
import discoveryUrl from "/tabs/discovery.webp?url";
import discoveryActiveUrl from "/tabs/discovery-active.webp?url";
import messageUrl from "/tabs/message.webp?url";
import messageActiveUrl from "/tabs/message-active.webp?url";
import rachelFanUrl from "/tabs/rachel-fan.webp?url";
import rachelFanActiveUrl from "/tabs/rachel-fan-active.webp?url";
import worldUrl from "/tabs/world.webp?url";
import worldActiveUrl from "/tabs/world-active.webp?url";

export type NavbarType = "world" | "message" | "discovery" | "rachel-fan";

interface NavbarItemProps {
  name: NavbarType;
  activeTab: Signal<NavbarType>;
  url: string;
  activeUrl: string;
}

function NavbarItem({ name, activeTab, url, activeUrl }: NavbarItemProps) {
  return (
    <img
      className="size-8 cursor-pointer"
      src={activeTab.value === name ? activeUrl : url}
      onClick={() => {
        activeTab.value = name;
      }}
      onKeyPress={() => {
        activeTab.value = name;
      }}
      aria-label={`${name} Tab`}
    />
  );
}

interface Props {
  activeTab: Signal<NavbarType>;
}

export default function Navbar({ activeTab }: Props) {
  return (
    <Row className="fixed left-0 bottom-0 border-t w-screen justify-around py-2 bg-[#F8F8FF] z-20">
      <NavbarItem
        name="world"
        activeTab={activeTab}
        url={worldUrl}
        activeUrl={worldActiveUrl}
      />
      <NavbarItem
        name="message"
        activeTab={activeTab}
        url={messageUrl}
        activeUrl={messageActiveUrl}
      />
      <NavbarItem
        name="discovery"
        activeTab={activeTab}
        url={discoveryUrl}
        activeUrl={discoveryActiveUrl}
      />
      <NavbarItem
        name="rachel-fan"
        activeTab={activeTab}
        url={rachelFanUrl}
        activeUrl={rachelFanActiveUrl}
      />
    </Row>
  );
}

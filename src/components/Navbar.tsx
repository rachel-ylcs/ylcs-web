import Row from "./Row";
import { useLocation } from "wouter-preact";
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
  url: string;
  activeUrl: string;
}

function NavbarItem({ name, url, activeUrl }: NavbarItemProps) {
  const [location, navigate] = useLocation();

  return (
    <img
      className="size-8 cursor-pointer"
      src={location === `/${name}` ? activeUrl : url}
      onClick={() => {
        navigate(`/${name}`);
      }}
      onKeyPress={() => {
        navigate(`/${name}`);
      }}
      aria-label={`${name} Tab`}
    />
  );
}

export default function Navbar() {
  return (
    <Row className="fixed left-0 bottom-0 border-t w-screen justify-around py-2 bg-[#F8F8FF] z-20">
      <NavbarItem name="world" url={worldUrl} activeUrl={worldActiveUrl} />
      <NavbarItem
        name="message"
        url={messageUrl}
        activeUrl={messageActiveUrl}
      />
      <NavbarItem
        name="discovery"
        url={discoveryUrl}
        activeUrl={discoveryActiveUrl}
      />
      <NavbarItem
        name="rachel-fan"
        url={rachelFanUrl}
        activeUrl={rachelFanActiveUrl}
      />
    </Row>
  );
}

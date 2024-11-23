import { render } from "preact";
import "@unocss/reset/tailwind.css";
import "uno.css";

export default function App() {
  return (
    <div className="grid place-items-center h-screen">
      <div className="bg-green text-3xl">Hello World!</div>
    </div>
  );
}

render(<App />, document.body);

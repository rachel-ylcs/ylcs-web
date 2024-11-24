import { render } from "preact";
import { Route, Switch } from "wouter-preact";
import "@unocss/reset/tailwind.css";
import "uno.css";
import Login from "./pages/Login";
import { Toaster } from "react-hot-toast";

export default function App() {
  return (
    <>
      <Switch>
        <Route path="login">
          <Login />
        </Route>
      </Switch>
      <Toaster />
    </>
  );
}

render(<App />, document.body);

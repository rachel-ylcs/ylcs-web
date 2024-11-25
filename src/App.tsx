import { render } from "preact";
import { Route, Switch } from "wouter-preact";
import Login from "./pages/Login";
import { Toaster } from "./utils/toast";
import PageWrapper from "./components/PageWrapper";
import Signup from "./pages/Signup";
import ResetPassword from "./pages/ResetPassword";
import World from "./pages/World";
import Message from "./pages/Message";
import Discovery from "./pages/Discovery";
import RachelFan from "./pages/RachelFan";
import fetcher from "./utils/fetcher";
import { SWRConfig } from "swr";

import "@unocss/reset/tailwind.css";
import "uno.css";

export default function App() {
  return (
    <>
      <SWRConfig
        value={{
          fetcher,
          shouldRetryOnError: false,
        }}
      />

      <PageWrapper>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/reset-password" component={ResetPassword} />

          <Route path="/world" component={World} />
          <Route path="/message" component={Message} />
          <Route path="/discovery" component={Discovery} />
          <Route path="/rachel-fan" component={RachelFan} />
        </Switch>
      </PageWrapper>

      <Toaster />
    </>
  );
}

render(<App />, document.body);

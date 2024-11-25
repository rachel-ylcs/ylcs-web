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

      <Switch>
        <Route path="/login">
          <PageWrapper>
            <Login />
          </PageWrapper>
        </Route>
        <Route path="/signup">
          <PageWrapper>
            <Signup />
          </PageWrapper>
        </Route>
        <Route path="/reset-password">
          <PageWrapper>
            <ResetPassword />
          </PageWrapper>
        </Route>

        <Route path="/world">
          <PageWrapper>
            <World />
          </PageWrapper>
        </Route>
        <Route path="/message">
          <PageWrapper>
            <Message />
          </PageWrapper>
        </Route>
        <Route path="/discovery">
          <PageWrapper>
            <Discovery />
          </PageWrapper>
        </Route>
        <Route path="/rachel-fan">
          <PageWrapper>
            <RachelFan />
          </PageWrapper>
        </Route>
      </Switch>

      <Toaster />
    </>
  );
}

render(<App />, document.body);

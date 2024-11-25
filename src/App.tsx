import { render } from "preact";
import { Route, Switch } from "wouter-preact";
import Login from "./pages/Login";
import { Toaster } from "./utils/toast";
import PageWrapper from "./components/PageWrapper";
import Signup from "./pages/Signup";
import ResetPassword from "./pages/ResetPassword";
import fetcher from "./utils/fetcher";
import Main from "./pages/Main";
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

        <Route path="/">
          <PageWrapper>
            <Main />
          </PageWrapper>
        </Route>
      </Switch>

      <Toaster />
    </>
  );
}

render(<App />, document.body);

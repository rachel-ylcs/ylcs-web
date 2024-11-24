import { render } from "preact";
import { Route, Switch } from "wouter-preact";
import "@unocss/reset/tailwind.css";
import "uno.css";
import Login from "./pages/Login";
import { Toaster } from "./utils/toast";
import PageWrapper from "./components/PageWrapper";
import Signup from "./pages/Signup";
import ResetPassword from "./pages/ResetPassword";
import RachelFan from "./pages/RachelFan";

export default function App() {
  return (
    <>
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

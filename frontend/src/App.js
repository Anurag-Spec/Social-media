import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import * as ROUTES from "./constants/routes";
import ProtectedRoute from "./helpers/protected-route";

import useAuthListener from "./hooks/use-auth-listener";
const SignUp = lazy(() => import("./pages/signup"));

const Login = lazy(() => import("./pages/login"));
const Notfound = lazy(() => import("./pages/not-found"));
const Dashboard = lazy(() => import("./pages/dashboard"));

function App() {
  const { user } = useAuthListener();
  return (
    <Router>
      <Suspense fallback={<p>Loading...</p>}>
        <Switch>
          <Route path={ROUTES.LOGIN} component={Login} exact />
          <Route path={ROUTES.SIGN_UP} component={SignUp} exact />
          <ProtectedRoute user={user} path={ROUTES.DASHBOARD} exact>
            <Dashboard />
          </ProtectedRoute>
          <Route component={Notfound} />
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;

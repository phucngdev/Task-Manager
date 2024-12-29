import { Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";
import "./App.css";
import Loading from "./components/shared/animation/Loading";

const PublicRoute = lazy(() => import("./routes/user/PublicRoute"));
const PrivateRoute = lazy(() => import("./routes/admin/PrivateRoute"));
const Dashboard = lazy(() => import("./screens/admin/Dashboard"));
const Projects = lazy(() => import("./screens/admin/Projects"));

function App() {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/dashboard" element={<PublicRoute />} />
          <Route path="/" element={<PrivateRoute />}>
            <Route index element={<Dashboard />} />
            <Route path="projects" element={<Projects />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
}

export default App;

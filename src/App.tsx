import { BrowserRouter, Routes, Route } from "react-router-dom";
import routes from "./routes/routes";
import { AppRoute } from "./types/AppRouter";

const App: React.FC = () => {
  return (
      <BrowserRouter>
        <Routes>
          {routes.map((route: AppRoute) => <Route {...route} key={route.path} />)}
        </Routes>
      </BrowserRouter>
  );
}

export default App;

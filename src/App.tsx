import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageLayout from "./components/Layout/LayoutPage";
import routes from "./routes/routes";
import { AppRoute } from "./types/AppRouter";

const App: React.FC = () => {
  return (
    <PageLayout>
      <BrowserRouter>
        <Routes>
          {routes.map((route: AppRoute) => <Route {...route} key={route.path} />)}
        </Routes>
      </BrowserRouter>
    </PageLayout>
  );
}

export default App;

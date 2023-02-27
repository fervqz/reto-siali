import { Navigate } from "react-router-dom";
import { AppRoute } from "../types/AppRouter";
import { RoutePaths } from "../types/RoutePaths";
import ViewConfiguration from "../views/ViewConfiguration";
import ViewSamples from "../views/ViewSamples";


const routes: AppRoute[] = [
    {
        path: RoutePaths.DEFAULT,
        element: <Navigate to={RoutePaths.SAMPLES} />,
    },
    {
        path: RoutePaths.SAMPLES,
        element: <ViewSamples/>,
    },
    {
        path: RoutePaths.CONFIGURATION,
        element: <ViewConfiguration/>,
    },
];

export default routes;
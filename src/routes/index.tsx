import { RouteProps } from "react-router";
import {Dashboard} from "../pages/Dashboard/Dashboard";
import {IngredientesList} from "../pages/Ingredientes/IngredientesList";

interface MyRouteProps extends RouteProps{
    label: string;
}

const routes: MyRouteProps[] = [
    {
        label: 'Dashboard',
        path: '/',
        component: Dashboard,
        exact: true
    },
    {
        label: 'Ingredientes',
        path: '/ingredientes',
        component: IngredientesList,
        exact: true
    }
];

export default routes;
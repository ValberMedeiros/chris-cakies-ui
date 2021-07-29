import { RouteProps } from "react-router";
import {Dashboard} from "../pages/Dashboard/Dashboard";
import {IngredientesList} from "../pages/Ingredientes/IngredientesList";

export interface MyRouteProps extends RouteProps{
    name: string;
    label: string;
}

const routes: MyRouteProps[] = [
    {
        name:'dashboard',
        label: 'Dashboard',
        path: '/',
        component: Dashboard,
        exact: true
    },
    {
        name:'ingredientes.list',
        label: 'Ingredientes',
        path: '/ingredientes',
        component: IngredientesList,
        exact: true
    },
    {
        name:'ingredientes.create',
        label: 'Criar ingredientes',
        path: '/ingredientes/create',
        component: IngredientesList,
        exact: true
    }
];

export default routes;
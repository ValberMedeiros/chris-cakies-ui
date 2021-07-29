import './App.css';
import {Box} from "@material-ui/core";
import AppRouter from "./routes/AppRouter";
import {BrowserRouter} from "react-router-dom";
import React from "react";
import {Navbar} from "./components/Navbar";
import Breadcrumbs from "./components/Breadcumbs";

const App: React.FC = () => {
  return (
    <BrowserRouter>
        <Navbar />
        <Box paddingTop={'70px'}>
            <Breadcrumbs />
            <AppRouter />
        </Box>
    </BrowserRouter>
  );
}

export default App;

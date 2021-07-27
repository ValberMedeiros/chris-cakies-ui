import './App.css';
import {Box} from "@material-ui/core";
import AppRouter from "./routes/AppRouter";
import {BrowserRouter} from "react-router-dom";
import React from "react";
import {Navbar} from "./components/Navbar";

const App: React.FC = () => {
  return (
    <BrowserRouter>
        <Box paddingTop={'70px'}>
            <Navbar />
            <AppRouter />
        </Box>
    </BrowserRouter>
  );
}

export default App;

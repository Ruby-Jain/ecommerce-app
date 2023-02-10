import './App.css';
import Header from './components/Header';
import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
import Login from './components/Login'
import Signup from './components/Signup'
import Dashboard from './components/Dashboard'
/* import Cards from "./components/Cards" */
import CardsDetails from './components/CardsDetails';
import CircularProgress from '@mui/material/CircularProgress';


 const Cards = React.lazy(() => import( "./components/Cards" )) 
/* const CardsDetails = lazy(() => { "./components/CardsDetails" }) */

function App() {

    return (
        <div className="App">
            <Header />
            <React.Suspense fallback={<CircularProgress />}>
            <Routes>
                <Route path="/" element={<Cards />} />
                <Route path="/cart/:id" element={<CardsDetails />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
            </React.Suspense>
        </div>
    );
}

export default App;

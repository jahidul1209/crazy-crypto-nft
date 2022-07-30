import './App.css';
import React from 'react'
import Home from './components/Home';
import RoadMap from './components/RoadMap';
import Footer from './layouts/Footer';
import Header from './layouts/Header';
import store from "./redux/store";
import { Provider } from "react-redux";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import MintPage from './components/MintPage';


function App(){

  return (

    <BrowserRouter className="App">
      <Header/>
      <Routes>
        <Route path='/'><Home/></Route>
        <Route path='/road-map'><RoadMap/></Route>
        <Route path='/mint'>
            <Provider store={store}><MintPage /></Provider>         
        </Route>
      </Routes>
      <Footer/>
    </BrowserRouter>

  );
}
export default App;

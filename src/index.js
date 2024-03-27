import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Card from './cardcomp/card';
import Cardshow from "./cardcomp/cardshow";
import Counter from "./hooks/counter.jsx";
import Fullname from "./hooks/fullnameobj.jsx";
import FilterButton from './cardcomp/filterbuttons.jsx';
import Useeffect from './useeffect.jsx';
import Todolist from './todolist.jsx';
import UseeffectRep from './useeffectRep.jsx';
import Shockandshake from './hooks/shockandshake.jsx';
// import Home from './context/home.jsx';
import Home from './project/homepage.jsx';
import Dashboard from './context/dashboard.jsx';
import ListItems from './context/listitems.jsx';
import BsCards from './bootstrapp/bscards.jsx';
import NavBar from './bootstrapp/navbar.jsx';
import Curd from './axioss/curd.jsx';
import Profile from './project/profile.jsx';
import Signup from './project/signup.jsx';
import GrowerProfile from './project/growerprofile.jsx';
import Availproducts from './project/avail-product.jsx';
import ItemsManager from './project/Itemsmanager.jsx';
import { BrowserRouter } from 'react-router-dom';
import Growerdash from './project/growerdash.jsx';
import FindGrower from './project/find-grower.jsx';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <BrowserRouter>
    {/* <App /> */}
    {/* <Cardshow></Cardshow> */}
    {/* <Counter></Counter> */}
    {/* <Fullname></Fullname> */}
    {/* <FilterButton></FilterButton> */}
    {/* <Useeffect></Useeffect> */}
    {/* <Todolist></Todolist> */}
    {/* <UseeffectRep></UseeffectRep> */}
    {/* <Shockandshake></Shockandshake> */}
    {/* <Home></Home> */}
    {/* <Dashboard></Dashboard> */}
    {/* <ListItems></ListItems> */}
    {/* <BsCards></BsCards> */}
    {/* <NavBar></NavBar> */}
    {/* <Curd></Curd> */}
    {/* <Profile></Profile> */}
    {/* <Signup></Signup> */}
    {/* <GrowerProfile></GrowerProfile> */}
    {/* <Availproducts></Availproducts> */}
    {/* <ItemsManager></ItemsManager> */}
    <Home></Home>
    {/* <Growerdash></Growerdash> */}
    {/* <FindGrower></FindGrower> */}
    </BrowserRouter>
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

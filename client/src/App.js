import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootswatch/dist/slate/bootstrap.min.css';
import './App.css';
import { Router } from '@reach/router';
import NavBar from './layout/NavBar';
import DisplayProduct from './components/DisplayProduct';
import Home from './layout/Home';
import Edit from './components/Edit';
import ProductForm from './components/ProductForm';

function App() {



  return (
    <div>
      <NavBar />
      <Router>
        <ProductForm path='/new' />
        <Home path='/' />
        <DisplayProduct path='/api/products/:id' />
        <Edit path='/products/:id/edit' />
      </Router>
    </div>
  );
}

export default App;

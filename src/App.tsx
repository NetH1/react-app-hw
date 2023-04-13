import React from 'react';
import './App.css';
import { Header } from './components/Header';
import { Router } from './router';
import { Footer } from './components/Footer';

function App() {
  return (
    <>
    <Header />
      <Router />
      <Footer />
    </>
  );
}

export default App;

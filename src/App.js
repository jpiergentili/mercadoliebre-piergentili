import React from 'react';
import './App.css';
import Header from './components/Header-Navbar/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import { BrowserRouter} from 'react-router-dom';
import Provider from './components/Context/Context';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBppLddHL5rjVCgJLeB5tWDD1oKdLXsrzE",
  authDomain: "mercadoliebre-ecommerce.firebaseapp.com",
  projectId: "mercadoliebre-ecommerce",
  storageBucket: "mercadoliebre-ecommerce.appspot.com",
  messagingSenderId: "527864478603",
  appId: "1:527864478603:web:23dec6e1fb473689a6cd8e"
};

// Initialize Firebase
initializeApp(firebaseConfig);

function App() {
  return (
    <div className='container-fluid bg-meli'>
      <Provider>
        <BrowserRouter>
          <Header />
          <Main />
          <Footer />
        </BrowserRouter>
      </Provider>
    </div> 
  );
}

export default App;

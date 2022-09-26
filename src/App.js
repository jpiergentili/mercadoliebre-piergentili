
import './App.css';
import Header from './components/Header-Navbar/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import { BrowserRouter} from 'react-router-dom';
import Provider from './components/Context/Context';

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

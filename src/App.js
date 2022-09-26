
import './App.css';
import Header from './components/Header-Navbar/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import { BrowserRouter} from 'react-router-dom';

function App() {
  return (
    <div className='container-fluid bg-meli'>
        <BrowserRouter>
            <Header />
            <Main />
            <Footer />
        </BrowserRouter>
    </div> 
  );
}

export default App;

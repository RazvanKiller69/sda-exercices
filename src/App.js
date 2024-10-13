import './App.css';
import { BrowserRouter, Route, Routes,} from 'react-router-dom';
import NavBar from './components/NavBar';
import ContactForm from './pages/contact-form/ContactForm';
import ReservationForm from './pages/reservation-form/ReservationForm';
import Home from './pages/home/Home';
import NotFound from './pages/not-found/NotFound';

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home/>}> </Route>
          <Route path="/contact-form" element={<ContactForm/>}> </Route>
          <Route path="/reservation-form" element={<ReservationForm/>}></Route>
          <Route path="*" element={<NotFound/>}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

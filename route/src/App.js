import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './layout/Header/Header';
import Footer from './layout/Footer/Footer';
import Home from './pages/Home/Home';
import Shop from './pages/Shop/Shop';
import Error from './pages/Error/Error';
import Add from './pages/Add/Add';

function App() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/shop' element={<Shop />} />
                <Route path='/add' element={<Add />} />
                <Route path='*' element={<Error />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}

export default App;

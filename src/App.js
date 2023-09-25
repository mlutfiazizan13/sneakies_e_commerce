import './App.css';
// import FilterProductLayout from './layouts/FilterProductLayout';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import Product from './pages/Product';
import ScrollToTop from './utils/ScrollToTop';
import { Route, Routes } from 'react-router-dom';


function App() {
  return (
    <ScrollToTop>
        <Routes>
            <Route path='/' element={<MainLayout/>}>
                <Route path="" element={<Home/>}></Route>
            <Route path="/shoes" element={<Product/>}></Route>
                {/* <Route element={<FilterProductLayout/>}>
                </Route> */}
            </Route>
        </Routes>
    </ScrollToTop>
  );
}

export default App;

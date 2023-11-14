import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomePage, CartPage, CategoryProductPage, SearchPage, PrdouctSinglePage } from './pages/index';
import Header from './components/Header/Header';
import SideBar from './components/Sidebar/Sidebar';
import Footer from './components/Footer/Footer';
import store from './store/store'
import { Provider } from 'react-redux';
import './App.scss'
function App() {
  return (
    <div className="App">
      <Provider store={store}>
      <BrowserRouter>
          <Header />
          <SideBar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/product/:id" element={<PrdouctSinglePage />} />
            <Route path="/category/:category" element={<CategoryProductPage/>} />
            <Route path='/cart' element={<CartPage/>} />
            <Route path='/search/:searchTerm' element={<SearchPage/>} />
          </Routes>
          <Footer/>
      </BrowserRouter>
      </Provider>

      {/* 2hour.10minute */}
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import Home from './pages/Home';
import Detail from './pages/Detail';
import Login from './pages/Login';
import Post from './components/Post';
import Product from './components/Product';

function App() {
  return (
    <BrowserRouter>
        <nav>
          <Link to={"/"}>Home</Link> | <Link to={"/login"}>Login</Link>
        </nav>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/detail/:id" element={<Detail />} >
              {/* Parent yang atas dan children yang bawah nanti akan menjadi slash stlh id*/}
              <Route path={"post"} element={<Post />} />
              <Route path={"product"} element={<Product />} />
            </Route>
            <Route path="/login" element={<Login />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;

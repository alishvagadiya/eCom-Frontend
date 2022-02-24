// import './App.css';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import { Navbar } from "./components"
import { Home, Cart, AdvisorDetail, Category, WishList, Signup, Login } from "./pages"
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/category/:showCategoryType" element={<Category />} />
            <Route path="/AdvisorDetail" element={<AdvisorDetail />} />
            <Route path="/AdvisorDetail/:advisorId" element={<AdvisorDetail />} />
            <Route path="/wishlist" element={<WishList />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </Router>
      </header>
    </div>
  );
}

export default App;

import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import ResetPassword from './pages/ResetPassword';
import Dashboard from './pages/Dashboard';
import ForgotPassword from './pages/ForgotPassword';
import MainLayout from './components/MainLayout';
import Enquiries from './pages/Enquiries';
import BlogCatList from './pages/BlogCatList';
import BlogList from './pages/BlogList';
import Orders from './pages/Orders';
import Customers from './pages/Customers';
import ColorList from './pages/ColorList';
import CategoryList from './pages/CategoryList';
import BrandList from './pages/BrandList';
import ProductList from './pages/ProductList';
import AddBlog from './pages/AddBlog';
import AddBlogCat from './pages/AddBlogCat';
import AddColor from './pages/AddColor';
import AddCategory from './pages/AddCategory';
import AddBrand from './pages/AddBrand';
import AddProduct from './pages/AddProduct';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/resetPassword" element={<ResetPassword />} />
        <Route path="/forgotPassword" element={<ForgotPassword />} />

        <Route path="/admin" element={<MainLayout />}>
          <Route index element={<Dashboard />} />

          <Route path='orders' element={<Orders />} />
          
          <Route path='customers' element={<Customers />} />

          <Route path='add-product' element={<AddProduct />} />
          <Route path='product-list' element={<ProductList />} />
          <Route path='add-brand' element={<AddBrand />} />
          <Route path='brand-list' element={<BrandList />} />
          <Route path='add-color' element={<AddColor />} />
          <Route path='color-list' element={<ColorList />} />
          <Route path='add-category' element={<AddCategory />} />
          <Route path='category-list' element={<CategoryList />} />

          <Route path='enquiries' element={<Enquiries />} />

          <Route path='add-blog' element={<AddBlog />} />
          <Route path='blog-category' element={<AddBlogCat />} />
          <Route path='blog-list' element={<BlogList />} />
          <Route path='blog-category-list' element={<BlogCatList />} />
        </Route>

      </Routes>
    </Router>
  );
}

export default App;

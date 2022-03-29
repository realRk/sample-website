import "./App.css";
import { Layout, Col } from "antd";
import HeaderMenu from "./Components/HeaderMenu";
import UserAuthenticationPage from "./Components/UserAuthentication";
import { Routes, Route, Link, Router } from "react-router-dom";
import Booking from "./Pages/Booking";
import MyJobs from "./Pages/Jobs";
import CustomersList from "./Pages/CustomersList";
import Pricing from "./Pages/Pricing";
import AdminRouter from "./Components/Admin/adminroute";
import Products from "./Components/Admin/Components/Products/products";
import Crops from "./Components/Admin/Components/Crops/crops";
import Admin from "./Components/Admin/admin";
import Users from "./Components/Admin/Components/Users/Users";

const { Header, Footer, Content } = Layout;
function App() {
  return (
    <div className="App">
      <Layout className="mainLayout">
        <Header className="main-layout-header-bar">
          <HeaderMenu />
        </Header>
        <Routes>
          <Route path="/" element={<UserAuthenticationPage />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/jobs" element={<MyJobs />} />
          <Route path="/customers-list" element={<CustomersList />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/admin" element={<Admin />}>
            <Route path="/admin" element={<Products />} />
            <Route path="/admin/products" element={<Products />} />
            <Route path="/admin/crop" element={<Crops />} />
            <Route path="/admin/region" element={<Products />} />
            <Route path="/admin/user" element={<Users />} />
          </Route>
          {/* <Route path="/crop" element={<Products />} /> 
            <Route path="/region" element={<Products />} />
            <Route path="/user" element={<Products />} />
            <Route path="/product" element={<Products />} />
            <Route path="/" element={<Products />} /> */}
        </Routes>
      </Layout>
    </div>
  );
}

export default App;

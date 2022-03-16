import "./App.css";
import { Layout,Col } from "antd";
import HeaderMenu from "./Components/HeaderMenu";
import UserAuthenticationPage from "./Components/UserAuthentication";
import { Routes, Route,Link } from "react-router-dom";
import Booking from "./Pages/Booking";
import MyJobs from "./Pages/Jobs";

const { Header,Footer,Content } = Layout;
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
        </Routes>
      </Layout>
    </div>
  );
}

export default App;

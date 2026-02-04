import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import DashboardNavbar from "./components/DashboardNavbar";
import DashboardFooter from "./components/DashboardFooter";

import Home from "./Pages/Home";
import Auth from "./Pages/Auth";
import Dashboard from "./Pages/Dashboard";

const Layout = ({ children }) => {
  const { pathname } = useLocation();

  // AUTH PAGE → NO NAVBAR / FOOTER
  if (pathname === "/auth") {
    return <>{children}</>;
  }

  // DASHBOARD → DIFFERENT NAVBAR & FOOTER
  if (pathname === "/dashboard") {
    return (
      <>
        <DashboardNavbar />
        {children}
        <DashboardFooter />
      </>
    );
  }

  // DEFAULT (LANDING)
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;

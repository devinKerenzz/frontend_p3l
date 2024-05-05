import { Routes, Route } from "react-router-dom";
import PageLogin from "./pages/PageLogin";
import PageRegister from "./pages/PageRegister";
import PageProfileCustomer from "./pages/PageProfileCustomer";
import PageHome from "./pages/PageHome";

import NavbarComponent from "./components/NavbarComponent";
import FooterComponent from "./components/footerComponent";

function App() {
  return (
    <div>
      <NavbarComponent />
      <Routes>
        <Route path="/" Component={PageHome} />
        <Route path="/login" Component={PageLogin} />
        <Route path="/register" Component={PageRegister} />
        <Route path="/profilecustomer" Component={PageProfileCustomer} />
      </Routes>

      <FooterComponent />
    </div>
  );
}

export default App;

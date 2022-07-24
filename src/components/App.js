import { Container } from "react-bootstrap";
import AuthProvider from "../contexts/AuthContext";
import Signup from "./Authentication/Signup";
import Dashboard from "./Dashboard";
import Login from "./Authentication/Login";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom' 
import PrivateRoute from "./Authentication/PrivateRoute";
import ForgotPassword from "./Authentication/ForgotPassword";
import UpdateProfile from "./Authentication/UpdateProfile";
import Header from "./Header";
import Selection from "./Selection";
import Coffee from "./Coffee";

function App() {
  return (
      <Container className="d-flex align-items-center justify-content-center"
        style={ {minHeight: "100vh" }}>
          <div className="w-100" style= {{ maxWidth: "400px" }}>
            <Router>
              <AuthProvider>
                <Routes>
                  {/* <Route exact path ='/' element={<PrivateRoute><Dashboard /></PrivateRoute>} /> */}
                  <Route path='/' exact element={<> <Header /> <Selection /></>} />
                  <Route path ='/update-profile' element={<PrivateRoute><UpdateProfile /></PrivateRoute>} />
                  <Route path="/signup" element={<Signup/>} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/forgot-password" element={<ForgotPassword />} />
                  <Route path="/coffee" element={<Coffee />} />
                </Routes>
              </AuthProvider>
            </Router>
          </div>
      </Container>
  );
}

export default App;

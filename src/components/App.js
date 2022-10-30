import AuthProvider from "../contexts/AuthContext";
import Signup from "./Authentication/Signup";
import Login from "./Authentication/Login";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import PrivateRoute from "./Authentication/PrivateRoute";
import ForgotPassword from "./Authentication/ForgotPassword";
import UpdateProfile from "./Authentication/UpdateProfile";
import Header from "./Header";
import Selection from "./Selection";
import Coffee from "./Coffee";
import Profile from "./Profile";
import Nav from "./Nav"

function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          {/* <Route exact path ='/' element={<PrivateRoute><Profile /></PrivateRoute>} /> */}
          <Route path='/' exact element={
            <PrivateRoute>
              <Nav />
              <Header />
              <Selection />
            </PrivateRoute>} />
          <Route path='/update-profile' element={<PrivateRoute><UpdateProfile /></PrivateRoute>} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/coffee" element={<Coffee />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;

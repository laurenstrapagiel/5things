import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header/header";
import Homepage from "./pages/homepage/homepage";
import Exercise from "./pages/exercise/exercise";
import Login from "./pages/login/login";
import Profile from "./pages/profile/profile";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/exercise" element={<Exercise />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

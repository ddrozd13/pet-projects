import { Route, Routes } from "react-router-dom";
import RegisterPage from "./components/RegisterPage/RegisterPage";
import Home from './pages/Home/Home';


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<RegisterPage />} />
    </Routes>
  );
}

export default App;

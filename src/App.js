import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/home-page/home-page";
import { CardPage } from "./pages/card-page/card-page";
import { NavBar } from "../src/components/navbar/navbar";
import { Provider } from "react-redux";
import { store } from "./redux/index";

import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/course/:title" element={<CardPage />}></Route>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/contacts" element={<CardPage />}></Route>
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;

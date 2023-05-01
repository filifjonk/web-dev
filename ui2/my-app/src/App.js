import { Route, Routes } from "react-router-dom";
import Basket from "./Basket";
import Home from "./Home";
import React from "react";
import ReactDOM from "react-dom";
import { useSelector, useDispatch } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import "./index.scss";
import Header from "./Header";
export const SearchContext = React.createContext("");
function App() {
  const [searchValue, setSearchValue] = React.useState("");
  return (
    <>
      <SearchContext.Provider value={{ searchValue, setSearchValue }}>
        <React.StrictMode>
          <BrowserRouter>
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/cart" element={<Basket />} />
            </Routes>
          </BrowserRouter>
        </React.StrictMode>
      </SearchContext.Provider>
    </>
  );
}

export default App;

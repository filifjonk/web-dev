import { Link, useLocation } from "react-router-dom";
import React, { useState } from "react";
import Search from "./Search";
import { useSelector } from "react-redux";
import { RootState } from "./redux/store";
function Header() {
  const { items, totalPrice } = useSelector((state: RootState) => state.cart);
  const location = useLocation();
  const totalCount = items.reduce((sum, item) => sum + item.count, 0);
  const isMounted = React.useRef(false);
  React.useEffect(() => {
    if (isMounted.current) {
      const json = JSON.stringify(items);
      localStorage.setItem("cart", json);
    }
    isMounted.current = true;
  }, [items]);

  return (
    <div className="wrapper">
      <header>
        <div className="headerLeft">
          <Link to="/">
            <h3>QPICK</h3>
          </Link>
        </div>
        <ul className="headerRight">
          <li className="m-45">
            <img width={22} height={20} src="/img/like.svg" alt="" />
            <span>{totalPrice}</span>
          </li>

          <Link to="/cart">
            <li>
              {" "}
              <img width={23.2} height={23.2} src="/img/basket.svg" alt="" />
              <span className="ellips">{totalCount}</span>
            </li>
          </Link>
        </ul>
      </header>
      {location.pathname !== "/cart" && <Search />}
    </div>
  );
}
export default Header;

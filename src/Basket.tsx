import Header from "./Header";
import { Footer } from "./Footer";
import { Content } from "./Content";
import React, { Component, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "./redux/store";
function Basket() {
  const dispatch = useDispatch();
  const { totalPrice, items } = useSelector((state: RootState) => state.cart);

  return (
    <>
      <div className="d-flex justify-between m-w">
        <div className=" flex-wrap m-w">
          {items.map((obj) => (
            <Content
              key={obj.id}
              title={obj.title}
              price={obj.price}
              rate={obj.rate}
              img={obj.img}
              id={obj.id}
              count={obj.count}
            />
          ))}
        </div>
        <div className="card-right">
          <div className="d-flex justify-between">
            <h5>ИТОГО</h5>
            <h5>{totalPrice}</h5>
          </div>
          <div className="flex-column">
            <button className="toOrder">Перейти к оформлению</button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Basket;

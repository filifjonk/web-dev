import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addItem, minusItem } from "./redux/slices/cartSlice";
type ContentProps = {
  img: string;
  id: string;
  price: number;
  title: string;
  count: number;
};
const Content: React.FC<ContentProps> = ({ img, id, price, title, count }) => {
  const dispatch = useDispatch();
  const onClickPlus = () => {
    dispatch(
      addItem({
        id
      })
    );
  };
  const onClickMinus = () => {
    dispatch(minusItem(id));
  };
  return (
    <>
      <div className=" card-left flex-wrap m-w ">
        <div className="d-flex justify-between">
          <div className="d-flex">
            <div className="elem m-18">
              <img height={136} width={146} src={img} alt="" />
              <div className="d-flex justify-between">
                <button
                  disabled={count === 1}
                  onClick={onClickMinus}
                  className="yellow-btn"
                >
                  -
                </button>
                <h4 className="m-0">{count}</h4>
                <button onClick={onClickPlus} className="yellow-btn">
                  +
                </button>
              </div>
            </div>
            <div className="info">
              <h2>{title}</h2>
              <h3 className="basket-price">{price} ₽</h3>
            </div>
          </div>
          <div className="right-info-basket align-end m-17">
            <img
              className="chan"
              height={17}
              width={19}
              src="/img/chan.png"
              alt=""
            />
            <h4>{price * count} ₽</h4>
          </div>
        </div>
      </div>
    </>
  );
};
export { Content };

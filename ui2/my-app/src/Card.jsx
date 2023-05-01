import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addItem } from './redux/slices/cartSlice';
import { RootState } from './redux/store';
// type CardProps = {
//   id: string;
//   img: string;
//   title: string;
//   price: number;
//   rate: number;
// };
const Card = ({ id, img, title, price, rate }) => {
  const dispatch = useDispatch();
  const added = useSelector((state) => state.cart.items.find((obj) => obj.id === id));
  const addedCount = added ? added.count : 0;
  const onClickAdd = () => {
    const item = {
      id,
      img,
      title,
      price,
      rate,
    };
    dispatch(addItem(item));
  };
  return (
    <div className="card">
      <img className="card-img" height={237.07} width={219.61} src={img} alt="" />
      <div className="d-flex justify-between">
        <div className="d-flex flex-column">
          <div className="favorite">
            <h5>{title}</h5>
            <img className="favoriteIcon" src="/img/star.png" alt="" />
          </div>
        </div>
        <div className="d-flex flex-column price">
          <h5>{price}</h5>
          <a onClick={onClickAdd}>
            Купить <i> {addedCount} </i>
          </a>
        </div>
      </div>
    </div>
  );
};
export default Card;

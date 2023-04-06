import { CartItem } from '../redux/slices/cartSlice';

export const calcTotalPrice = (items) => {
  return items.reduce((sum, obj) => {
    return obj.price * obj.count + sum;
  }, 0);
};

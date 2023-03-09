import { useSelector, useDispatch } from "react-redux";
import { Footer } from "./Footer";
import { setCategoryId } from "../src/redux/slices/filterSlice";
import React, { Component } from "react";
import Card from "./Card";
import Skeleton from "./Skeleton";
import Categories from "./Categories";
import Sort from "./Sort";
import { SearchContext } from "./App";
import axios from "axios";
import { isStringLiteral } from "typescript";
import { stringify } from "querystring";
import { title } from "process";
import { RootState } from "./redux/store";

const Home: React.FC = () => {
  const dispatch = useDispatch();
  const categoryId = useSelector((state: RootState) => state.filter.categoryId);
  const sortType = useSelector(
    (state: RootState) => state.filter.sort.sortProperty
  );

  const { searchValue } = React.useContext(SearchContext);
  const [items, setItems] = React.useState<{
    img: string;
    title: string;
    price: number;
    rate: number;
  }>();
  const [isLoading, setIsLoading] = React.useState(true);

  const onClickCategory = (id: number) => {
    dispatch(setCategoryId(id));
  };
  React.useEffect(() => {
    console.log(categoryId);
    setIsLoading(true);
    // fetch(
    //   `https://63b6de234f17e3a931c2c158.mockapi.io/items?${
    //     categoryId > 0 ? `category=${categoryId}` : ""
    //   }&sortBy=${sortType}&order=desc`
    // )
    //   .then((res) => {
    //     return res.json();
    //   })
    //   .then((arr) => {
    //     setItems(arr);
    //     setIsLoading(false);
    //   });
    axios
      .get(
        `https://63b6de234f17e3a931c2c158.mockapi.io/items?${
          categoryId > 0 ? `category=${categoryId}` : ""
        }&sortBy=${sortType}&order=desc`
      )
      .then((res) => {
        setItems(res.data);
        setIsLoading(false);
      });
    window.scrollTo(0, 0);
  }, [categoryId, sortType]);
  return (
    <>
      <Categories valueCat={categoryId} onClickCat={onClickCategory} />
      <Sort />
      <div className="wrap">
        <div className="items">
          {isLoading
            ? [...new Array(6)].map((obj) => <Skeleton />)
            : items
                .filter((obj) => {
                  if (
                    obj.title.toLowerCase().includes(searchValue.toLowerCase())
                  ) {
                    return true;
                  }
                  return false;
                })
                .map((obj) => (
                  <Card
                    key={obj.id}
                    title={obj.title}
                    img={obj.img}
                    price={obj.price}
                    id={obj.id}
                    rate={obj.rate}
                  />
                ))}
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Home;

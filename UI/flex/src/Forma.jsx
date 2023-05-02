import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Footer } from './Footer';
import { setCategoryId } from '../src/redux/slices/filterSlice';
import Card from './Card';
import Skeleton from './Skeleton';
import Categories from './Categories';
import Sort from './Sort';
import { SearchContext } from './App';
import axios from 'axios';
import { isStringLiteral } from 'typescript';
//import { stringify } from 'querystring';
//import { title } from 'process';
import { RootState } from './redux/store';

function Forma() {
  var data = '';

  const [items, setItems] = React.useState(
    //   <{
    //     img: string,
    //     title: string,
    //     price: number,
    //     rate: number
    //   }>
    [],
  );
  const [isLoading, setIsLoading] = React.useState(true);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await fetch('http://localhost:5000/api/Account', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });

    var data = await response.text();
    console.log(data);
    axios
      .get(
        `http://localhost:5000/api/Item`,
        {
          headers: {
            Authorization: `Bearer ${data}`,
          },
        },
        // ${
        //   categoryId > 0 ? `category=${categoryId}` : ''
        // }&sortBy=${sortType}&order=desc`,
      )
      .then((res) => {
        setItems(res.data);
        setIsLoading(false);
      });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <button type="submit">Login</button>
      </form>
      <Link to="/shop">
        <h2>Открыть</h2>
      </Link>

      <div className="items">
        {isLoading
          ? [...new Array(6)].map((obj) => <Skeleton />)
          : items.map((obj) => (
              <Card
                key={obj.id}
                title={obj.productName}
                img={obj.img}
                price={obj.price}
                id={obj.id}
                rate={obj.typeId}
              />
            ))}
      </div>

      <Footer />
    </>
  );
}
export default Forma;

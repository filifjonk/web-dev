import React from 'react';
// type CategoriesProps = {
//   valueCat: number;
//   onClickCat: (i: number) => void;
// };
const Categories = ({ valueCat, onClickCat }) => {
  const categories = ['Все', 'Беспроводные', 'Проводные'];
  return (
    <div className="wrapper">
      <div className="content">
        <ul className="d-flex m-17">
          {categories.map((categoryName, index) => (
            <li
              key={index}
              onClick={() => onClickCat(index)}
              className={valueCat === index ? 'active m-17' : 'm-17'}>
              {categoryName}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default Categories;

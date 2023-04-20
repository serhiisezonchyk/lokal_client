import React from "react";

const ProductCategoryItem = ({ category }) => {
  return (
    <tr>
      <td>{category.img}</td>
      <td>{category.name}</td>
      <td>Видалити|Редагувати</td>
    </tr>
  );
};

export default ProductCategoryItem;

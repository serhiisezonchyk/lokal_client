import React from "react";

const PostCategoryItem = ({ category }) => {
  return (
    <tr>
      <td>{category.img}</td>
      <td>{category.name}</td>
      <td>Видалити|Редагувати</td>
    </tr>
  );
};

export default PostCategoryItem;

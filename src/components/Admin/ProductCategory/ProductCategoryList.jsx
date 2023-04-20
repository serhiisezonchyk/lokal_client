import React from "react";
import { Button, Form, Table } from "react-bootstrap";
import ProductCategoryItem from "./ProductCategoryItem";
import { FaPlus } from "react-icons/fa";

const ProductCategoryList = () => {
  const categories = [
    {
      id: 1,
      name: "Сертифікати",
      img: "img",
    },
    {
      id: 2,
      name: "Емоції",
      img: "img2",
    },
    {
      id: 3,
      name: "Подарунки",
      img: "img3",
    },
    {
      id: 4,
      name: "Благодійність",
      img: "img4",
    },
  ];
  return (
    <>
      <Form.Group className="my-3">
        <Form.Control type="text" placeholder="Пошук..." />
      </Form.Group>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Значок</th>
            <th>Категорія</th>
            <th>Дія</th>
          </tr>
        </thead>
        <tbody>
          {categories.map((category) => (
            <ProductCategoryItem key={category.id} category={category} />
          ))}
        </tbody>
      </Table>
      <Button className="add-btn rounded-circle d-flex align-items-center justify-content-center">
        <FaPlus />
      </Button>
    </>
  );
};

export default ProductCategoryList;

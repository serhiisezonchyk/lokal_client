import React from "react";
import { Button, Form } from "react-bootstrap";
import ProductItem from "../Product/ProductItem";
import { FaPlus } from "react-icons/fa";

const ProductList = () => {
  const products = [
    {
      id: 1,
      title: "title1",
      img: "img",
      description: "description1",
      price: 50,
    },
    {
      id: 2,
      title: "title2",
      img: "img2",
      description: "description2",
      price: 100,
    },
    {
      id: 3,
      title: "title3",
      img: "img3",
      description: "description3",
      price: 400,
    },
    {
      id: 4,
      title: "title4",
      img: "img4",
      description: "description4",
      price: 200,
    },
  ];
  return (
    <>
      <Form.Group className="my-3">
        <Form.Control type="text" placeholder="Пошук..." />
      </Form.Group>
      <div className="products-container">
        <Form className="d-flex flex-column">
          {products.map((product) => (
            <ProductItem key={product.id} product={product} />
          ))}
        </Form>
      </div>
      <Button className="add-btn rounded-circle d-flex align-items-center justify-content-center">
        <FaPlus />
      </Button>
    </>
  );
};

export default ProductList;

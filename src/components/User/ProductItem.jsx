import React from "react";
import { Card } from "react-bootstrap";

const ProductItem = ({ product }) => {
  return (
    <Card
      style={{ cursor: "pointer" }}
      border={"light"}
      className="shadow-sm mb-5 bg-body rounded "
    >
      <Card.Img
        variant="top"
        height={200}
        // src={process.env.REACT_APP_API_URL + product.img}
      />
      <div className="p-1">
        <div className="text-black-50 d-flex justify-content-between align-items-center">
          <div>{product.title}</div>
        </div>
        <div>{product.description}</div>
        <div>{product.price}</div>
      </div>
    </Card>
  );
};

export default ProductItem;

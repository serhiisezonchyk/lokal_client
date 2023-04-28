import React, { useState } from "react";
import { Button, Form, Table } from "react-bootstrap";
import ProductCategoryItem from "./ProductCategoryItem";
import { FaPlus,FaArrowLeft } from "react-icons/fa";
import ProductCategoryEditor from "./ProductCategoryEditor";

const ProductCategoryList = () => {
  const [showProductCategoryEditor, setShowProductCategoryEditor] =
    useState(false);
  const handleAddClick = () => {
    setShowProductCategoryEditor(!showProductCategoryEditor);
  };
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
      {!showProductCategoryEditor && (
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
        </>
      )}

      {!showProductCategoryEditor ? (
        <Button
          className="rounded-circle d-flex align-items-center justify-content-center add-btn"
          onClick={handleAddClick}
        >
          <FaPlus />
        </Button>
      ) : (
        <Button
          className="rounded-circle d-flex align-items-center justify-content-center back-btn"
          onClick={handleAddClick}
        >
          <FaArrowLeft />
        </Button>
      )}
      {showProductCategoryEditor && <ProductCategoryEditor/>}
    </>
  );
};

export default ProductCategoryList;

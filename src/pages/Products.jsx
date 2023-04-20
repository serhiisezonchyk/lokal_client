import React from 'react'
import ProductItem from '../components/User/ProductItem';
import { Form } from 'react-bootstrap';

const Products = () => {
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
      <div className="products-container">
        <Form className="d-flex flex-column">
          {products.map((product) => (
            <ProductItem key={product.id} product={product} />
          ))}
        </Form>
      </div>
    </>
  );
}

export default Products

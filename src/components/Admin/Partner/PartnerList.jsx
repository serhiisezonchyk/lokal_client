import React from "react";
import { Button, Form } from "react-bootstrap";
import PartnerItem from "../Partner/PartnerItem";
import { FaPlus } from "react-icons/fa";

const PartnerList = () => {
  const partners = [
    {
      id: 1,
      name: "name1",
      img: "img",
      description: "description1",
      email: "dasx@gmail.com",
    },
    {
      id: 2,
      name: "name2",
      img: "img2",
      description: "description2",
      email: "fcsa@gmail.com",
    },
    {
      id: 3,
      name: "name3",
      img: "img3",
      description: "description3",
      email: "email@gmail.com",
    },
    {
      id: 4,
      name: "name4",
      img: "img4",
      description: "description4",
      email: "gmail@gmail.com",
    },
  ];
  return (
    <>
      <Form.Group className="my-3">
        <Form.Control type="text" placeholder="Пошук..." />
      </Form.Group>
      <div className="partners-container">
        <Form className="d-flex flex-column">
          {partners.map((partner) => (
            <PartnerItem key={partner.id} partner={partner} />
          ))}
        </Form>
      </div>
      <Button className="add-btn rounded-circle d-flex align-items-center justify-content-center">
        <FaPlus />
      </Button>
    </>
  );
};

export default PartnerList;

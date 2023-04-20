import React from 'react'
import { Form } from 'react-bootstrap';
import PartnerItem from '../components/User/PartnerItem';

const Partners = () => {
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
      <div className="partners-container">
        <Form className="d-flex flex-column">
          {partners.map((partner) => (
            <PartnerItem key={partner.id} partner={partner} />
          ))}
        </Form>
      </div>
    </>
  );
}

export default Partners

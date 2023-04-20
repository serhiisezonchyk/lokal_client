import React from "react";
import { Card } from "react-bootstrap";

const PartnerItem = ({ partner }) => {
  return (
    <Card
      style={{ cursor: "pointer" }}
      border={"light"}
      className="shadow-sm mb-5 bg-body rounded "
    >
      <Card.Img
        variant="top"
        height={200}
        // src={process.env.REACT_APP_API_URL + partner.img}
      />
      <div className="p-1">
        <div className="text-black-50 d-flex justify-content-between align-items-center">
          <div>{partner.name}</div>
        </div>
        <div>{partner.description}</div>
        <div>{partner.email}</div>
      </div>
    </Card>
  );
};

export default PartnerItem;

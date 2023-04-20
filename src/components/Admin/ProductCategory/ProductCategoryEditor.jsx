import React from "react";
import { Button, Card, Form } from "react-bootstrap";

const ProductCategoryEditor = () => {
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ height: "100%" }}
    >
      <Card className="p-3" style={{width: "50%"}}>
        <Form>
          <Form.Group className="mb-3">
            <Button variant="secondary" className="mt-3">
              <label>
                Choose file
                <input type="file" multiple style={{ display: "none" }} />
              </label>
            </Button>
            <Form.Control multiple className="mt-3" type="file" />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Назва категорія</Form.Label>
            <Form.Control placeholder="Введіть назву категорії" />
          </Form.Group>
        </Form>
      </Card>
    </div>
  );
};

export default ProductCategoryEditor;

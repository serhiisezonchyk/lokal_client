import React from "react";
import { Button, Card, Form } from "react-bootstrap";

const PostCategoryEditor = () => {
  const [name, setName] = React.useState("");
  return (
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

      <Form.Group>
        <Form.Label>Назва категорія</Form.Label>
        <Form.Control
          placeholder="Введіть назву категорії"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3 mt-1">
        <Button>Додати</Button>
      </Form.Group>
    </Form>
  );
};

export default PostCategoryEditor;

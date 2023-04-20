import React from "react";
import { Button, Card, FloatingLabel, Form } from "react-bootstrap";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import ReactDOMServer from "react-dom/server";
import ReactMarkdown from "react-markdown";

const ProductEditor = () => {
  const [description, setDescription] = React.useState("");

  const onChange = React.useCallback((description) => {
    setDescription(description);
  }, []);

  const options = React.useMemo(
    () => ({
      spellChecker: false,
      maxHeight: "200px",
      autofocus: true,
      placeholder: "Введіть опис...",
      status: true,
      autosave: {
        enabled: true,
        delay: 1000,
      },
      previewRender: (plainText) => {
        return ReactDOMServer.renderToString(
          <ReactMarkdown
            children={plainText}
          />
        );
      },
    }),
    []
  );
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
            <Form.Label>Ціна</Form.Label>
            <Form.Control placeholder="UAH" />
          </Form.Group>

          <Form.Group className="mb-3">
            <FloatingLabel label="Заголовок..." className="mb-3">
              <Form.Control
                size="lg"
                type="text"
                style={{ border: "none", outline: "none" }}
                placeholder="Заголовок..."
              />
            </FloatingLabel>
          </Form.Group>
          
          <Form.Group className="mb-3">
            <Form.Label>Інформація</Form.Label>
            <SimpleMDE value={description} onChange={onChange} options={options} />
          </Form.Group>
        </Form>
      </Card>
    </div>
  );
};

export default ProductEditor;

import React from "react";
import { Button, Card, FloatingLabel, Form } from "react-bootstrap";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import ReactDOMServer from "react-dom/server";
import ReactMarkdown from "react-markdown";

const PostEditor = () => {
  const [title, setTitle] = React.useState("");
  const [description, setDescription] = React.useState("");

  const uniqueId = React.useMemo(
    () => Math.random().toString(36).substr(2, 9),
    []
  );

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
        uniqueId: uniqueId,
      },
      previewRender: (plainText) => {
        return ReactDOMServer.renderToString(
          <ReactMarkdown children={plainText} />
        );
      },
    }),
    []
  );
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

      <Form.Group className="mb-3">
        <FloatingLabel label="Заголовок..." className="mb-3">
          <Form.Control
            size="lg"
            type="text"
            style={{ border: "none", outline: "none" }}
            placeholder="Заголовок..."
            value={title}
            onChange={(e)=>setTitle(e.target.value)}
          />
        </FloatingLabel>
      </Form.Group>
      <Form.Group>
        <Form.Label>Інформація</Form.Label>
        <SimpleMDE value={description} onChange={onChange} options={options} />
      </Form.Group>

      <Form.Group className="mb-3 mt-1">
        <Button>Додати</Button>
      </Form.Group>
    </Form>
  );
};

export default PostEditor;

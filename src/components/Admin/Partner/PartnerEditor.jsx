import React from "react";
import { Button, Card, FloatingLabel, Form } from "react-bootstrap";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import ReactDOMServer from "react-dom/server";
import ReactMarkdown from "react-markdown";
import { unloadImg, uploadImg } from "../../../http/staticApi";

const PartnerEditor = () => {
  const [name, setName] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [email, setEmail] = React.useState("");

  const [img, setImg] = React.useState([]);
  const inputFileRef = React.useRef(null);

  const handleChangeFile = async (event) => {
    try {
      const formData = new FormData();
      const file = event.target.files[0];
      formData.append("image", file);
      await uploadImg(formData).then((data) => {
        setImg((prevImg) => [...prevImg, data.url]);
      });
    } catch (error) {
      console.log(error);
      alert("Помилка при завантаженні файлу.");
    }
  };

  const onClickRemoveImage = async (fileName) => {
    try {
      await unloadImg(fileName);
      setImg((prevImg) => prevImg.filter((url) => url !== fileName));
    } catch (e) {
      alert("Щось пішло не так");
    }
  };
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
        <Button
          onClick={() => inputFileRef.current.click()}
          variant="secondary"
          className="mt-3"
        >
          Оберіть фото
        </Button>
        <input
          ref={inputFileRef}
          type="file"
          onChange={handleChangeFile}
          hidden
        />
        {img.map((url) => (
          <div key={url}>
            <Button variant="danger" onClick={() => onClickRemoveImage(url)}>
              Видалити
            </Button>
            <img src={`http://localhost:4001/${url}`} alt="Uploaded" />
          </div>
        ))}
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Email</Form.Label>
        <Form.Control
          placeholder="...@mail.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <FloatingLabel label="Назва..." className="mb-3">
          <Form.Control
            size="lg"
            type="text"
            style={{ border: "none", outline: "none" }}
            placeholder="Назва..."
            value={name}
            onChange={(e) => setName(e.target.value)}
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

export default PartnerEditor;

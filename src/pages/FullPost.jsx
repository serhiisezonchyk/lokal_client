import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchOnePost } from "../http/postApi";
import LoadingSpinner from "../components/LoadingSpinner";
const FullPost = () => {
  const [data, setData] = useState();
  const [isLoading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    fetchOnePost(id)
      .then((res) => {
        setData(res);
        setLoading(false);
      })
      .catch((err) => {
        console.warn(err);
        alert("Помилка при отриманні статті.");
      });
  }, []);

  if (isLoading) return <LoadingSpinner />;

  return <div>{data.title}</div>;
};

export default FullPost;

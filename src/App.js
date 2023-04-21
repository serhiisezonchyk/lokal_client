import NavBar from "./components/NavBar";

import AppRouter from "./components/AppRouter";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchCheck, selectIsAuth } from "./http/userApi";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCheck());
  }, []);
  return (
    <>
      <NavBar />
      <AppRouter />
    </>
  );
}

export default App;

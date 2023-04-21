import NavBar from "./components/NavBar";

import AppRouter from "./components/AppRouter";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchCheck, selectIsAuth } from "./http/userApi";

function App() {
  const dispatch = useDispatch();
  const isAuth = useSelector(selectIsAuth);
  const userData = useSelector((state) => state.auth.data);
  console.log(userData);
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

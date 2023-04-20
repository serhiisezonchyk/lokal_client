import NavBar from "./components/NavBar";
import Auth from "./pages/Auth";
import AdminPage from "./pages/AdminPage";
import PostEditor from "./components/Admin/Post/PostEditor";
import ProductEditor from "./components/Admin/Product/ProductEditor";
import PartnerEditor from "./components/Admin/Partner/PartnerEditor";
import AppRouter from "./components/AppRouter"
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchCheck, selectIsAuth } from "./http/userApi";

function App() {
  const dispatch = useDispatch();
  const isAuth = useSelector(selectIsAuth);

  useEffect(()=>{
    dispatch(fetchCheck())
  },[])
  return (
    <>
      <NavBar />
      {/* <Auth/> */}
      <AppRouter/>
      {/* <AdminPage /> */}
      {/* <PostEditor/> */}
      {/* <ProductEditor/> */}
      {/* <PartnerEditor/> */}
    </>
  );
}

export default App;

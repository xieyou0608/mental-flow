import Head from "next/head";
import Image from "next/image";
import Navbar from "../components/layout/Navbar";
import { authActions } from "../store/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../store/store";

export default function Home() {
  const isAuth = useSelector((state: AppState) => state.auth.isAuth);
  const dispatch = useDispatch();

  const loginHandler = () => {
    dispatch(authActions.setAuthState(true));
  };
  return (
    <>
      <Head>
        <title>Mental Flow</title>
        <meta
          name="description"
          content="Use this app to record your flow state!"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1 className="text-sm text-red-500">
          Use this app to record your flow state!
        </h1>
        <h2>Use this app to record your flow state!</h2>
        <h3>{isAuth ? "登入" : "未登入"}</h3>
        <button onClick={loginHandler}>登入</button>
      </main>
    </>
  );
}

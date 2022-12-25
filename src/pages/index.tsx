import Head from "next/head";
import Image from "next/image";
import Navbar from "../components/layout/Navbar";
import { authActions } from "../store/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../store/store";
import RoundedBox from "../components/layout/RoundedBox";
import Stopwatch from "../components/stopwatch/Stopwatch";
import TodoList from "../components/todoList/TodoList";
import RecordChart from "../components/RecordChart/RecordChart";

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
      <div className="bg-[#84b2ad] w-full min-h-screen">
        <Navbar />
        <main className="flex justify-center h-full gap-x-24">
          <div className="flex flex-col w-1/5 gap-y-6">
            <Stopwatch />
            <TodoList />
          </div>
          <div className="flex flex-col w-1/3">
            <RecordChart />
          </div>
        </main>
      </div>
    </>
  );
}

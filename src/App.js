import { Fragment } from "react";
import { useSelector } from "react-redux";
import Counter from "./components/Counter";
import Auth from "./components/Auth";
import Header from "./components/Header";
import UserProfile from "./components/UserProfile";

function App() {
  const loggedIn = useSelector((state) => state.auth.loggedIn);
  return (
    <Fragment>
      <Header />
      {!loggedIn && <Auth />}
      {loggedIn && <UserProfile />}
      <Counter />
    </Fragment>
  );
}

export default App;

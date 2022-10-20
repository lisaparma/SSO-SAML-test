import { BrowserRouter, Route } from "react-router-dom";

const Home = () => (
    <div>
        <p>You aren't login!</p>
        <a href={"http://localhost:4300/login"}>LOGIN</a>
    </div>
)

const Logged = () => (
    <div>
        You are logged in!
    </div>
)

function App() {
  return (
      <BrowserRouter>
          <Route exact path={"/"} key="main" component={Home} />
          <Route path={"/logged"} key="loan" component={Logged}  />
      </BrowserRouter>
  );
}

export default App;

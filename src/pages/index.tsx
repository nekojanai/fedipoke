import { React, Helmet } from "../../deps/react.ts";
import { LoginForm } from "../components/login-form.tsx";

const Index = () => <React.Fragment>
  <Helmet>
    <title>Fedipoke</title>
  </Helmet>
  <img src="/public/images/fedipoke.png"></img>
  <h1>Fedipoke</h1>
  <p>A federated poking service.</p>
  <LoginForm />
</React.Fragment>;

export function index() {
  return <Index />; 
}

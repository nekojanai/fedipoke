import { React, Helmet } from "../../deps.ts";
import { LoginForm } from "../components/login-form.tsx";

const Index = () => 
  <React.Fragment>
    <Helmet>
      <title>Fedipoke</title>
    </Helmet>
    <header className="header">
      <div className="header__brand">
        <img className="logo" src="/images/fedipoke.png" />
        <span className="title">Fedipoke</span>
      </div>
      <span className="tagline">A federated poking service</span>
    </header>
    <LoginForm />
  </React.Fragment>;

export function index() {
  return <Index />; 
}

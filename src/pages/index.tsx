import {React, Helmet} from "../../deps/react.ts";

const Index = ({name}: {name: string}) => <React.Fragment>
  <Helmet>
    <title>FediPoke 👉</title>
  </Helmet>
  <h1>Poke {name}</h1>
</React.Fragment>

export function index() {
  return <Index name="People"></Index> 
}

export function pokePerson(name: string="") {
  return <Index name={name}></Index> 
}

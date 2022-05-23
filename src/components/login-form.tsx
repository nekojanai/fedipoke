import { FormGroup } from "./common/form-group.tsx";
import { Form } from "./common/form.tsx";

const onSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
  e.preventDefault();
  console.log(e)
}


export const LoginForm = () => 
  <Form onSubmit={onSubmit}>
    <FormGroup>
      <label className="form__group__label" htmlFor="loginHandle">Login</label>
      <input className="form__group__input" id="loginHandle" type="text" />
      <small className="form__group__hint">e.g.: @yourusername@domain.tld</small>
    </FormGroup>
  </Form>;


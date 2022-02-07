import { FormGroup } from "./common/form-group.tsx";
import { Form } from "./common/form.tsx";

export interface LoginFormProps {}

export const LoginForm = (props: LoginFormProps) => 
  <Form>
    <FormGroup>
      <label className="form__group__label" htmlFor="loginHandle">Login</label>
      <input className="form__group__input" id="loginHandle" type="text"></input>
      <small className="form__group__hint">Enter your fedi handle in the format @username@domain.tld</small>
    </FormGroup>
  </Form>;


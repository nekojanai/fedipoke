import { FormFooter } from "./form-footer.tsx";

export interface FormProps {}

export const Form = (props: React.PropsWithChildren<FormProps>) =>
  <form className="form">
    {props.children}
    <FormFooter />
  </form>
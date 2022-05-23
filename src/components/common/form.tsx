import { FormFooter } from "./form-footer.tsx";

export interface FormProps {
  onSubmit: React.FormEventHandler<HTMLFormElement>
}

export const Form = (props: React.PropsWithChildren<FormProps>) =>
  <form className="form" onSubmit={props.onSubmit}>
    {props.children}
    <FormFooter />
  </form>
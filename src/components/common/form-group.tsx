export interface FormGroupProps {}

export const FormGroup = (props: React.PropsWithChildren<FormGroupProps>) =>
  <div className="form__group">
    {props.children}
  </div>
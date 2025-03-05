import { LabelHTMLAttributes } from "react";

export default function InputLabel({
  value,
  className = "",
  children,
  ...props
}: LabelHTMLAttributes<HTMLLabelElement> & { value?: string }) {
  return (
    <label {...props} className={`fieldset` + className}>
      <legend className="fieldset-legend"></legend>
      {value ? value : children}
    </label>
  );
}

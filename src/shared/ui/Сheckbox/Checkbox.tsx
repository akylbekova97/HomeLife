type CheckboxProps = React.InputHTMLAttributes<HTMLInputElement>

export function Checkbox(props: CheckboxProps) {
  return (
    <input
      type="checkbox"
      {...props}
    />
  )
}

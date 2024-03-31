interface InputProps {
  variable: number[]
  setVariable: Function
  allowedValues?: string[]
}

function Input({variable, setVariable, allowedValues}: InputProps) {
  return (
    <>
      <input
        type="text"
        value={variable.join(' ')}
        onChange={e => {
          let cords: string | string[] = (e.target as HTMLInputElement).value
          if (allowedValues && !allowedValues.includes(cords))
            return

          cords = cords.split(' ')
          if (cords.length === 2 && cords.every(e => !Number.isNaN(Number(e))))
            setVariable(cords.map(str => Number(str)))
        }}
      />
      <br/>
    </>
  )
}

export default Input
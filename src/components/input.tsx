interface Input {
  setVariable: Function
}

interface TextProps extends Input {
  variable: number[]
  allowedValues?: string[]
}

export function TextInput({variable, setVariable, allowedValues}: TextProps) {
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

interface CheckboxProps extends Input {
  variable: string[]
  id: string
}

export function CheckboxInput({id, variable, setVariable}: CheckboxProps) {
  return (
    <>
      <input
        type="checkbox"
        id={id}
        onClick={e => {
          let checked = (e.target as HTMLInputElement).checked

          if (checked)
            setVariable([...variable, id])
          else
            setVariable(variable.filter(item => item !== id))
        }}
      />
      <label for={id}>{id}</label>
    </>
  )
}

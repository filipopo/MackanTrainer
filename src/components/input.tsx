interface Input {
  variable: number[] | string[]
  setVariable: Function
}

interface TextProps extends Input {
  validator?: Function
}

export function TextInput({variable, setVariable, validator}: TextProps) {
  return (
    <>
      <input
        type="text"
        value={variable.join(' ')}
        onChange={e => {
          let el: string | string[] = (e.target as HTMLInputElement).value
          if (validator && !validator(el))
            return

          el = el.split(' ')
          if (el.every(e => !Number.isNaN(Number(e))))
            setVariable(el.map(str => Number(str)))
        }}
      />
      <br/>
    </>
  )
}

interface TextArrayProps extends TextProps {
  length: number
}

export function TextArrayInput({variable, setVariable, validator, length}: TextArrayProps) {
  const fields = new Array(length).fill(variable)

  function handleChange(index: number, value: string) {
    fields[index] = value
    setVariable(fields)
  }

  return (
    <div>
      {fields.map((value, index) => (
        <TextInput
          variable={value}
          setVariable={(text: string) => handleChange(index, text)}
          validator={validator}
        />
      ))}
    </div>
  )
}

interface CheckboxProps extends Input {
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

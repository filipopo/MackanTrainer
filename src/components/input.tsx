interface Input {
  setVariable: (el: any) => void
}

interface TextProps extends Input {
  variable: number[]
  validator?: (el: string) => boolean
}

function TextInput({variable, setVariable, validator}: TextProps) {
  return (
    <>
      <input
        type="text"
        value={variable.join(' ')}
        onChange={e => {
          let el: string | string[] = (e.target as HTMLInputElement).value
          if (validator && !validator(el)) return

          el = el.split(' ')
          if (el.every(e => !Number.isNaN(Number(e))))
            setVariable(el.map(str => Number(str)))
        }}
      />
      <br/>
    </>
  )
}

interface TextArrayProps extends Input {
  variable: number[][]
}

function TextArrayInput({variable, setVariable}: TextArrayProps) {
  const fields = Array.from({ length: variable.length }, (_, index) => variable[index])

  return (
    <>
      {fields.map((value, index) => (
        <TextInput
          variable={value}
          setVariable={(cords: number[]) => {fields[index] = cords; setVariable(fields)}}
        />
      ))}
    </>
  )
}

interface SelectProps extends Input {
  variable: number
  values: number[]
  handler: (p: number) => void
}

function SelectInput({variable, values, handler, setVariable}: SelectProps) {
  return (
    <select onChange={e => {
      const p = Number((e.target as HTMLInputElement).value)
      handler(p)
      setVariable(p)
    }}>
      {values.map((p: number) => (
        <option value={p} selected={p === variable}>{p}</option>
      ))}
    </select>
  )
}

interface CheckboxProps extends Input {
  variable: string[]
  id: string
}

function CheckboxInput({id, variable, setVariable}: CheckboxProps) {
  return (
    <>
      <input
        type="checkbox"
        id={id}
        onClick={el => {
          const checked = (el.target as HTMLInputElement).checked
          if (checked) setVariable([...variable, id])
          else setVariable(variable.filter(item => item !== id))
        }}
      />
      <label for={id}>{id}</label>
    </>
  )
}

export {TextInput, TextArrayInput, SelectInput, CheckboxInput}
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

interface CheckboxProps extends Input {
  variable: string[]
  id: string
  handler?: (c: boolean) => void
}

function CheckboxInput({id, variable, setVariable, handler}: CheckboxProps) {
  return (
    <>
      <input
        type="checkbox"
        id={id}
        onClick={el => {
          const checked = (el.target as HTMLInputElement).checked
          if (handler) handler(checked)

          if (checked) setVariable([...variable, id])
          else setVariable(variable.filter(item => item !== id))
        }}
      />
      <label for={id}>{id}</label>
    </>
  )
}

export {TextInput, TextArrayInput, CheckboxInput}

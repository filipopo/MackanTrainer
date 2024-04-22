interface Input {
  setVariable: Function
}

interface TextProps extends Input {
  variable: number[]
  validator?: Function
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
  length: number
}

function TextArrayInput({variable, setVariable, length}: TextArrayProps) {
  const fields = Array.from({ length }, (_, index) => variable[index] || variable[0])

  return (
    <div>
      {fields.map((value, index) => (
        <TextInput
          variable={value}
          setVariable={(cords: number[]) => {fields[index] = cords; setVariable(fields)}}
        />
      ))}
    </div>
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
        onClick={e => {
          const checked = (e.target as HTMLInputElement).checked
          if (checked) setVariable([...variable, id])
          else setVariable(variable.filter(item => item !== id))
        }}
      />
      <label for={id}>{id}</label>
    </>
  )
}

export {TextInput, TextArrayInput, CheckboxInput}

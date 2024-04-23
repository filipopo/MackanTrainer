import { useState } from 'preact/hooks'

import { Catan, CatanBoard, Extension } from './components/catan.tsx'
import { TextInput, TextArrayInput, CheckboxInput } from './components/input.tsx'
import './app.css'

export function App() {
  const [pointA, setPointA] = useState([0, 0])
  const [deserts, setDeserts] = useState([[2, 2]])

  const [extensions, setExtensions] = useState<Extension[]>([])
  const handlers: {[k: string]: (c: boolean) => void} = {
    '6p': c => c ? setDeserts(Array(2).fill(deserts[0])) : setDeserts(deserts.slice(0, 1))
  }

  const catan = new Catan({pointA, deserts, extensions})
  return (
    <>
      Point A<br/>
      <TextInput variable={pointA} setVariable={setPointA}
        validator={(el: string) => catan.field.dirMap().includes(el)} />

      Desert indexes<br/>
      <TextArrayInput variable={deserts} setVariable={setDeserts} />

      Extensions:<br/>
      {['6p', 'ck', 'sf'].map(id => (
        <CheckboxInput key={id} id={id} variable={extensions} setVariable={setExtensions} handler={handlers[id]} />
      ))}

      <CatanBoard catan={catan} />
    </>
  )
}

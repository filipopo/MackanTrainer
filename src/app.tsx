import { useState } from 'preact/hooks'

import { Catan, CatanBoard, Extensions } from './components/catan.tsx'
import { TextInput, TextArrayInput, CheckboxInput } from './components/input.tsx'
import './app.css'

export function App() {
  const [pointA, setPointA] = useState([0, 0])
  const [deserts, setDeserts] = useState([[2, 2]])
  const [extensions, setExtensions] = useState<Extensions[]>([])

  const catan = new Catan({pointA, deserts, extensions})
  const d_count = extensions.includes('6p') ? 2 : 1

  return (
    <>
      Point A<br/>
      <TextInput variable={pointA} setVariable={setPointA}
        validator={(el: string) => catan.dirMap().includes(el)} />

      Desert indexes<br/>
      <TextArrayInput variable={deserts[0]} setVariable={setDeserts} length={d_count} />

      Extensions:<br/>
      {['6p', 'ck', 'sf'].map(id => (
        <CheckboxInput id={id} variable={extensions} setVariable={setExtensions} />
      ))}

      <CatanBoard catan={catan} />
    </>
  )
}

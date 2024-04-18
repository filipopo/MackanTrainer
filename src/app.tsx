import { useState } from 'preact/hooks'

import CatanBoard from './components/catan.tsx'
import { TextInput, CheckboxInput } from './components/input.tsx'
import './app.css'

export function App() {
  const [pointA, setPointA] = useState([0, 0])
  const [desert, setDesert] = useState([2, 2])
  const [extensions, setExtensions] = useState([])

  return (
    <>
      Point A<br/>
      <TextInput variable={pointA} setVariable={setPointA}
        allowedValues={['0 0', '2 0', '4 0', '4 2', '2 4', '0 2']} />

      Desert index<br/>
      <TextInput variable={desert} setVariable={setDesert} />

      Extensions:<br/>
      {['6p', 'ck', 'sf'].map(id => 
        <CheckboxInput id={id} variable={extensions} setVariable={setExtensions} />
      )}

      <CatanBoard pointA={pointA} desert={desert} extensions={extensions} />
    </>
  )
}

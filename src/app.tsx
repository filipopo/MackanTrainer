import { useState } from 'preact/hooks'
import { TextInput, TextArrayInput, SelectInput, CheckboxInput } from './components/input.tsx'

import { Resource } from './lib/catan_hex.ts'
import { Catan, CatanBoard, Extension } from './components/catan.tsx'
import './app.css'

function App() {
  const [pointA, setPointA] = useState([0, 0])
  const [deserts, setDeserts] = useState([[2, 2]])
  const [players, setPlayers] = useState(3)

  const [resources, setResources] = useState<Resource[]>([])
  const [extensions, setExtensions] = useState<Extension[]>([])
  const catan = new Catan({pointA, deserts, players, resources, extensions})

  return (
    <>
      <button type="button" onClick={() => {
        const [randomPoint, randomDesert, randomResources] = catan.field.randomise()

        setPointA(randomPoint as number[])
        setDeserts(randomDesert as number[][])
        setResources(randomResources as Resource[])
      }}>Randomise</button><br/>

      Point A<br/>
      <TextInput variable={pointA} setVariable={setPointA}
        validator={(el: string) => catan.field.corners().includes(el)} />

      Desert indexes<br/>
      <TextArrayInput variable={deserts} setVariable={setDeserts} />

      Players: <SelectInput variable={players} values={[2, 3, 4, 5, 6, 7, 8]} setVariable={setPlayers}
      handler={p => {
        p > 4 ? setDeserts(Array(2).fill(deserts[0])) : setDeserts(deserts.slice(0, 1))
        setResources([])
      }} /><br/>

      Extensions:<br/>
      {['ck', 'sf'].map(id => (
        <CheckboxInput key={id} id={id} variable={extensions} setVariable={setExtensions} />
      ))}<br/>
      <br/>

      <CatanBoard catan={catan} />
    </>
  )
}

export default App
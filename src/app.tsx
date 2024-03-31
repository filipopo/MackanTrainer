import { useState } from 'preact/hooks'

import CatanBoard from './components/catan.tsx'
import Input from './components/input.tsx'
import './app.css'

export function App() {
  const [pointA, setPointA] = useState([0, 0])
  const [desert, setDesert] = useState([2, 2])

  return (
    <>
      Point A<br/>
      <Input variable={pointA} setVariable={setPointA}
        allowedValues={['0 0', '2 0', '4 0', '4 2', '2 4', '0 2']} />

      Desert index<br/>
      <Input variable={desert} setVariable={setDesert} />

      <CatanBoard pointA={pointA} desert={desert} />
    </>
  )
}

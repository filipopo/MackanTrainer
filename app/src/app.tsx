import { useState } from 'preact/hooks'
import { TextInput, TextArrayInput, SelectInput, CheckboxInput } from './components/input.tsx'
import { Modal, ModalProps } from './components/modal'

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

  interface HexModalProps extends ModalProps {
    cords: number[]
    hexNum: number
  }

  function HexModal({open, setOpen, cords, hexNum}: HexModalProps) {
    return (
      <Modal open={open} setOpen={setOpen}>
        <div class="modal-title">{catan.field.board[cords[0]][cords[1]].resource}</div>

        {catan.field.corners().includes(cords.join(' ')) &&
        cords.some((e, i) => e !== catan.field.pointA[i]) && <>
          <button type="button" onClick={() => setPointA(cords)}>Set as point A</button>
          <br/>
        </>}

        {deserts.map((desert, i) => (
          cords.some((e, i) => e !== desert[i]) && <>
            <button type="button" onClick={() => (
              setDeserts(deserts.length > 1 ? [desert, cords] : [cords])
            )}>Set as desert {i + 1}</button>
            <br/>
          </>
        ))}
        <br/>

        {deserts.every(desert => desert.some((e, i) => e !== cords[i])) &&
        ['wood', 'clay', 'wheat', 'sheep', 'stone'].map(resource => (
          resource !== catan.field.board[cords[0]][cords[1]].resource && <>
            <button type="button" onClick={() => {
              const temp = [...resources]
              temp[hexNum] = resource as Resource
              setResources(temp)
            }}>Change to {resource}</button>
            <br/>
          </>
        ))}
      </Modal>
    )
  }

  const [open, setOpen] = useState(false)
  const [cords, setCords] = useState([0, 0])
  const [hexNum, setHexNum] = useState(0)

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

      <HexModal open={open} setOpen={setOpen} cords={cords} hexNum={hexNum} />
      <CatanBoard catan={catan} hexCallback={(newCords: number[], newNum: number) => {
        setHexNum(newNum)
        setCords(newCords)
        setOpen(true)
      }}/>
    </>
  )
}

export default App
import { useState } from 'preact/hooks'
import { Point, Layout } from '../lib/hex_layout'
import { Resource } from '../lib/catan_hex'

import CatanField from '../lib/catan_field'
import './catan.css'

interface CatanBoardProps {
  catan: Catan
  HexModal: any
}

function CatanBoard({catan, HexModal}: CatanBoardProps) {
  const resColor: {[k in Resource]: string} = {
    'wood': '#7B863D',
    'clay': '#F6A173',
    'wheat': '#F0D86E',
    'sheep': '#7FCC19',
    'stone': '#9098A3',
    'desert': '#ECC9AF'
  }

  const wtf = (catan.field.midRow - 1) * Math.sqrt(3) * -10
  const layout = new Layout(Layout.pointy, new Point(20, 20), new Point(wtf, 20))
  const w = Math.sqrt(3) * 20 * catan.field.board[catan.field.midRow].length
  const h = 30 * catan.field.board.length + 10

  const [open, setOpen] = useState(false)
  const [cords, setCords] = useState([0, 0])
  const [hexNum, setHexNum] = useState(0)
  let num = 0

  return (
    <>
      <HexModal open={open} setOpen={setOpen} cords={cords} hexNum={hexNum} />
      <svg width={w} height={h} xmlns="http://www.w3.org/2000/svg">
        {catan.field.hexes.map(hex => {
          const p = layout.polygonCorners(hex)
          const t = layout.hexToPixel(hex)
          const temp = hex.number ? num++ : 0

          return (
            <g onClick={() => {
              setHexNum(temp)
              setCords(catan.field.cordsToIndex(hex.cords))
              setOpen(true)
            }}>
              <polygon fill={resColor[hex.resource]} points={p} />
              <text fill={[6, 8].includes(hex.number) ? 'red' : 'white'} x={t.x} y={t.y + 10}>{hex.number}</text>
            </g>
          )
        })}
      </svg>
      <br/>
      Top buildable spots:
      {catan.buildSpots.map(row => (
        <div key={row[0]}>
          {row.join(' - ')}
          <br/>
        </div>
      ))}
    </>
  )
}

type Extension = 'ck' | 'sf'

interface CatanProps {
  pointA: number[]
  deserts: number[][]
  players: number
  resources: Resource[]
  extensions?: Extension[]
}

class Catan {
  public constructor({pointA, deserts, players, resources}: CatanProps) {
    const boardWidth = Math.max(Math.ceil(players / 2) + 3, 5)
    this.field = new CatanField(pointA, deserts, CatanField.makeBoard(boardWidth), resources)
    this.buildSpots = this.field.buildSpots()
  }

  public field
  public buildSpots
}

export {Catan, CatanBoard, type Extension}
import { Resource } from '../lib/catan_hex'
import { Point, Layout } from '../lib/hex_layout'
import CatanField from '../lib/catan_field'

function CatanBoard({catan}: {catan: Catan}) {
  const resColor: {[k in Resource]: string} = {
    'wood': '#7B863D',
    'clay': '#F6A173',
    'wheat': '#F0D86E',
    'sheep': '#7FCC19',
    'stone': '#9098A3',
    'desert': '#ECC9AF'
  }

  const layout = new Layout(Layout.pointy, new Point(20, 20), new Point(45, 20))
  //const w = 42.7 * catan.field.board[catan.field.midRow].length
  const h = 3 / 2 * 24 * catan.field.board.length - 12

  return (
    <div className="card">
      The Catan board:<br/>
      <svg /*width={w}*/ height={h} xmlns="http://www.w3.org/2000/svg">
        {catan.field.board.map(row => (
          row.map(hex => {
            const p = layout.polygonCorners(hex)
            const t = layout.hexToPixel(hex)
            return (
              <g>
                <polygon points={p} style={`fill:${resColor[hex.resource]};stroke:black;stroke-width:2`} />
                <text x={t.x} y={t.y + 10} text-anchor="middle" fill="white" font-size="25">{hex.number}</text>
              </g>
            )
          })
        ))}
      </svg>
      <br/>
      Top buildable spots:
      {catan.buildSpots.map(row => (
        <div key={row[0]}>
          {row.join(' - ')}
          <br/>
        </div>
      ))}
    </div>
  )
}

type Extension = 'ck' | 'sf'

interface CatanProps {
  pointA: number[]
  deserts: number[][]
  players: number
  extensions?: Extension[]
}

class Catan {
  public constructor({pointA, deserts, players}: CatanProps) {
    const boardWidth = Math.max(Math.ceil(players / 2) + 3, 5)
    this.field = new CatanField(pointA, deserts, CatanField.makeBoard(boardWidth))
    this.buildSpots = this.field.buildSpots()
  }

  public field
  public buildSpots
}

export {Catan, CatanBoard, type Extension}

import CatanField from '../lib/catan_field'

function CatanBoard({catan}: {catan: Catan}) {
  return (
    <div className='card'>
      The Catan board:
      {catan.field.board.map(row => {
        const val = row.map(hex => hex.number).join(' ')
        return (
          <div key={val}>
            {val}
            <br/>
          </div>
        )
      })}
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

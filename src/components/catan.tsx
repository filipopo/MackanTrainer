import CatanField from '../lib/catan_field'

function CatanBoard({catan}: {catan: Catan}) {
  return (
    <div className='card'>
      The Catan board:
      {catan.field.board.map(row => (
        <div>
          {row.map(hex => hex.number).join(' ')}
          <br/>
        </div>
      ))}
      <br/>
      Top buildable spots:
      {catan.buildSpots.map(row => (
        <div>
          {row.join(' - ')}
          <br/>
        </div>
      ))}
    </div>
  )
}

type Extension = '6p' | 'ck' | 'sf'

interface CatanProps {
  pointA: number[]
  deserts: number[][]
  extensions?: Extension[]
}

class Catan {
  public constructor({pointA, deserts, extensions = []}: CatanProps) {
    const boardSize = extensions.includes('6p') ? 6 : 5
    this.field = new CatanField(pointA, deserts, CatanField.makeBoard(boardSize))
    this.buildSpots = this.field.buildSpots()
  }

  public field
  public buildSpots
}

export {Catan, CatanBoard, type Extension}

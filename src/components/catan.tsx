import CatanHex from '../lib/catan_hex'
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

type Extensions = '6p' | 'ck' | 'sf'

interface CatanProps {
  pointA: number[]
  deserts: number[][]
  extensions?: Extensions[]
}

class Catan {
  public constructor({pointA, deserts, extensions = []}: CatanProps) {
    const boardSize = extensions.includes('6p') ? 6 : 5

    this.field = new CatanField(CatanField.makeBoard(boardSize))
    this.fillBoard(pointA, deserts)
    this.makeBuildSpots()
  }

  public field
  public buildSpots: [string, number][] = []
  private pointMapping = [5, 2, 6, 3, 8, 10, 9, 12, 11, 4, 8, 10, 9, 4, 5, 6, 3, 11]

  public dirMap() {
    const mid = Math.floor(this.field.board.length / 2)
    const end = this.field.board.length - 1
    const midSize = (this.field.board.length + 5) / 2 - 1 // boardSize - 1

    return [
      `${end} 0`,
      `${end} 2`,
      `${mid} ${midSize}`,
      '0 2',
      '0 0',
      `${mid} 0`,
    ]
  }

  private fillBoard(pointA: number[], deserts: number[][]) {
    const a = this.field.board[pointA[0]][pointA[1]]
    if (!a) return

    let point = 0
    const hexes = this.field.inward_spiral(a, this.dirMap().indexOf(pointA.join(' ')))
    for (let hex of hexes as CatanHex[]) {
      if (deserts.every(desert => (
        desert.some((e, i) => e !== this.field.cordsToIndex(...hex.cords)[i])
      ))) {
        if (this.pointMapping[point])
          hex.number = this.pointMapping[point++]
      }
    }
  }

  private makeBuildSpots() {
    let buildHexes: number[][] = []
    let buildHexesSet = new Set()

    for (let i = 0; i < this.field.board.length; i++) {
      for (let j = 0; j < this.field.board[i].length; j++) {
        for (let direction = 0; direction < 6; direction++) {
          const combination = [this.field.board[i][j].number]

          for (let intersection of [direction, direction + 1]) {
            const hex = this.field.getHex(...this.field.board[i][j].neighbor(intersection))

            if (hex)
              combination.push((hex as CatanHex).number)
          }

          combination.sort((a, b) => a - b)
          const hashedCombination = combination.join(' ')

          if (!buildHexesSet.has(hashedCombination)) {
            buildHexes.push(combination)
            buildHexesSet.add(hashedCombination)
          }
        }
      }
    }

    for (let combination of buildHexes) {
      const key = combination.join(' ')
      const value = +(combination.reduce((acc, cur) => (
        cur ? acc + 6 - Math.abs(cur - 7) : 0
      ), 0) / 36 * 100).toFixed(2)

      this.buildSpots.push([key, value])
    }

    this.buildSpots.sort((first, second) => second[1] - first[1])
  }
}

export {Catan, CatanBoard, type Extensions}

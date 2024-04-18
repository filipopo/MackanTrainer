import CatanHex from '../lib/catan_hex'
import CatanField from '../lib/catan_field'

type Extensions = '6p' | 'ck' | 'sf'

interface CatanProps {
  pointA: number[]
  desert: number[]
  extensions?: Extensions[]
}

function CatanBoard({pointA, desert, extensions = []}: CatanProps) {
  const catan = new Catan({pointA, desert, extensions})

  return (
    <div className='card'>
      The Catan board:
      {catan.board.map((row, num) => (
        <div key={`board_${num}`}>
          {row.map(hex => hex.number).join(' ')}
          <br/>
        </div>
      ))}
      <br/>
      Top buildable spots:
      {catan.buildSpots.map((row, num) => (
        <div key={`build_${num}`}>
          {row.join(' - ')}
          <br/>
        </div>
      ))}
    </div>
  )
}

class Catan {
  public constructor({pointA, desert, extensions = []}: CatanProps) {
    const boardSize = extensions.includes('6p') ? 6 : 5

    this.board = CatanField.makeBoard(boardSize)
    this.fillBoard(pointA, desert)
    this.makeBuildSpots()
  }

  public board: Array<CatanHex>[]
  public buildSpots: [string, number][] = []

  private pointMapping: {[k: string]: number} = {
    'a': 5,
    'b': 2,
    'c': 6,
    'd': 3,
    'e': 8,
    'f': 10,
    'g': 9,
    'h': 12,
    'i': 11,
    'j': 4,
    'k': 8,
    'l': 10,
    'm': 9,
    'n': 4,
    'o': 5,
    'p': 6,
    'q': 3,
    'r': 11
  }

  private moveMapping: {[k: string]: {[k: string]: number[]}} = {
    'all': {
      '00': [1, 0],
      '20': [3, 0],
      '40': [4, 1],
      '42': [3, 3],
      '24': [1, 3],
      '02': [0, 1],
      '22': [2, 2]
    },
    '00': {
      '10': [2, 0],
      '30': [4, 0],
      '41': [4, 2],
      '33': [2, 4],
      '13': [0, 2],
      '01': [1, 1],
      '11': [2, 1],
      '21': [3, 1],
      '31': [3, 2],
      '32': [2, 3],
      '23': [1, 2],
      '12': [2, 2]
    },
    '20': {
      '30': [4, 0],
      '41': [4, 2],
      '33': [2, 4],
      '13': [0, 2],
      '01': [0, 0],
      '10': [2, 1],
      '21': [3, 1],
      '31': [3, 2],
      '32': [2, 3],
      '23': [1, 2],
      '12': [1, 1],
      '11': [2, 2]
    },
    '40': {
      '41': [4, 2],
      '33': [2, 4],
      '13': [0, 2],
      '01': [0, 0],
      '10': [2, 0],
      '30': [3, 1],
      '31': [3, 2],
      '32': [2, 3],
      '23': [1, 2],
      '12': [1, 1],
      '11': [2, 1],
      '21': [2, 2]
    },
    '42': {
      '33': [2, 4],
      '13': [0, 2],
      '01': [0, 0],
      '10': [2, 0],
      '30': [4, 0],
      '41': [3, 2],
      '32': [2, 3],
      '23': [1, 2],
      '12': [1, 1],
      '11': [2, 1],
      '21': [3, 1],
      '31': [2, 2]
    },
    '24': {
      '13': [0, 2],
      '01': [0, 0],
      '10': [2, 0],
      '30': [4, 0],
      '41': [4, 2],
      '33': [2, 3],
      '23': [1, 2],
      '12': [1, 1],
      '11': [2, 1],
      '21': [3, 1],
      '31': [3, 2],
      '32': [2, 2]
    },
    '02': {
      '01': [0, 0],
      '10': [2, 0],
      '30': [4, 0],
      '41': [4, 2],
      '33': [2, 4],
      '13': [1, 2],
      '12': [1, 1],
      '11': [2, 1],
      '21': [3, 1],
      '31': [3, 2],
      '32': [2, 3],
      '23': [2, 2]
    }
  }

  private buildHexes = [
    [[0, 0]],
    [[0, 0], [0, 1]],
    [[0, 0], [0, 1], [1, 1]],
    [[0, 0], [1, 1], [1, 0]],
    [[0, 0], [1, 0]],
    [[0, 1]],
    [[0, 1], [0, 2]],
    [[0, 1], [0, 2], [1, 2]],
    [[0, 1], [1, 2], [1, 1]],
    [[0, 2]],
    [[0, 2], [1, 3]],
    [[0, 2], [1, 3], [1, 2]],
    [[1, 0], [1, 1], [2, 1]],
    [[1, 0], [2, 1], [2, 0]],
    [[1, 0], [2, 0]],
    [[1, 0]],
    [[1, 1], [1, 2], [2, 2]],
    [[1, 1], [2, 2], [2, 1]],
    [[1, 2], [1, 3], [2, 3]],
    [[1, 2], [2, 3], [2, 2]],
    [[1, 3]],
    [[1, 3], [2, 4]],
    [[1, 3], [2, 4], [2, 3]],
    [[2, 0], [2, 1], [3, 0]],
    [[2, 0], [3, 0]],
    [[2, 0]],
    [[2, 1], [2, 2], [3, 1]],
    [[2, 1], [3, 1], [3, 0]],
    [[2, 2], [2, 3], [3, 2]],
    [[2, 2], [3, 2], [3, 1]],
    [[2, 3], [2, 4], [3, 3]],
    [[2, 3], [3, 3], [3, 2]],
    [[2, 4]],
    [[2, 4], [3, 3]],
    [[3, 0], [3, 1], [4, 0]],
    [[3, 0], [4, 0]],
    [[3, 0]],
    [[3, 1], [3, 2], [4, 1]],
    [[3, 1], [4, 1], [4, 0]],
    [[3, 2], [3, 3], [4, 2]],
    [[3, 2], [4, 2], [4, 1]],
    [[3, 3]],
    [[3, 3], [4, 2]],
    [[4, 0], [4, 1]],
    [[4, 0]],
    [[4, 1], [4, 2]],
    [[4, 1]],
    [[4, 2]]
  ]

  private fillBoard(pointA: number[], desert: number[]) {
    let [row, col] = pointA

    const moveSpiral = () => {
      const temp = this.moveMapping[pointA.join('')]
      if (Object.keys(temp).includes(`${row}${col}`))
        return [row, col] = temp[`${row}${col}`];
  
      [row, col] = this.moveMapping['all'][`${row}${col}`]
    }

    for (let i = 0; i < 18; i++) {
      if (row === desert[0] && col === desert[1]) {
        moveSpiral()
        i--; continue
      }

      this.board[row][col].number = this.pointMapping[String.fromCharCode(97 + i)];
      moveSpiral()
    }
  }

  private makeBuildSpots() {
    for (let combination of this.buildHexes) {
      let key = ''
      let value = 0

      for (let cords of combination) {
          const [row, col] = cords
          key += `${this.board[row][col].number} `

          if (this.board[row][col].number)
            value += 6 - Math.abs(this.board[row][col].number - 7)
      }

      value = +(value / 36 * 100).toFixed(2)
      this.buildSpots.push([key.trimEnd(), value])
    }

    this.buildSpots.sort((first, second) => second[1] - first[1])
  }
}

export default CatanBoard
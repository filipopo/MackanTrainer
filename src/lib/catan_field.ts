import CatanHex from './catan_hex'
import HexField from './hex_field'

class CatanField extends HexField {
  constructor(pointA: number[], deserts: number[][], public board: Array<CatanHex>[]) {
    super(board)

    const boardWidth = this.board[Math.floor(this.board.length / 2)].length
    if (!this.pointMapping[boardWidth])
      return

    if (!this.dirMap().includes(pointA.join(' ')))
      pointA = [0, 0]

    const a = this.board[pointA[0]][pointA[1]]
    const hexes = this.inward_spiral(a, this.dirMap().indexOf(pointA.join(' ')))
    let num = 0

    for (let hex of hexes as CatanHex[]) {
      if (deserts.every(desert => (
        desert.some((e, i) => e !== this.cordsToIndex(...hex.cords)[i])
      ))) {
        if (this.pointMapping[boardWidth][num])
          hex.number = this.pointMapping[boardWidth][num++]
      }
    }
  }

  public static makeBoard(boardWidth: number) {
    const board: Array<CatanHex>[] = []

    if (boardWidth % 2 === 1) {
      for (let row of HexField.makeBoard(Math.floor(boardWidth / 2)))
        board.push(row.map(hex => new CatanHex(...hex.cords)))
      return board
    }

    const size = 2 * boardWidth - 5
    for (let r = 0; r < size; r++) {
      const offset = (size - 1) / 2 - r
      board.push(Array.from({ length: boardWidth - Math.abs(offset) }, (_, col) => (
        new CatanHex(col + Math.max(0, offset), r)
      )))
    }

    return board
  }

  private pointMapping: {[k: number]: number[]} = {
    5: [5, 2, 6, 3, 8, 10, 9, 12, 11, 4, 8, 10, 9, 4, 5, 6, 3, 11],
    6: [2, 5, 4, 6, 3, 9, 8, 11, 11, 10, 6, 3, 8, 4, 8, 10, 11, 12, 10, 5, 4, 9, 5, 9, 12, 3, 2, 6],
    7: [2, 5, 4, 6, 3, 9, 8, 11, 11, 10, 6, 3, 8, 4, 8, 10, 11, 12, 10, 5, 4, 9, 5, 9, 12, 3, 2, 6, 3, 4, 6, 5, 9, 8, 10]
  }

  public dirMap() {
    const mid = Math.floor(this.board.length / 2)
    const end = this.board.length - 1
    const midLen = this.board[mid].length - 1

    return [
      `${end} 0`,
      `${end} 2`,
      `${mid} ${midLen}`,
      '0 2',
      '0 0',
      `${mid} 0`,
    ]
  }

  public buildSpots() {
    let buildHexes: number[][] | Set<string> = new Set<string>()

    for (let i = 0; i < this.board.length; i++) {
      for (let j = 0; j < this.board[i].length; j++) {
        for (let direction = 0; direction < 6; direction++) {
          const combination = [this.board[i][j].number]

          for (let intersection of [direction, direction + 1]) {
            const hex = this.getHex(...this.board[i][j].neighbor(intersection))
            if (hex) combination.push((hex as CatanHex).number)
          }

          combination.sort((a, b) => a - b)
          const hashedCombination = combination.join(' ')

          if (!buildHexes.has(hashedCombination))
            buildHexes.add(hashedCombination)
        }
      }
    }

    buildHexes = Array.from(buildHexes).map(cords => cords.split(' ').map(e => Number(e)))
    const buildSpots: [string, number][] = []

    for (let combination of buildHexes) {
      const key = combination.join(' ')
      const value = +(combination.reduce((acc, cur) => (
        cur ? acc + 6 - Math.abs(cur - 7) : 0
      ), 0) / 36 * 100).toFixed(2)

      buildSpots.push([key, value])
    }

    buildSpots.sort((first, second) => second[1] - first[1])
    return buildSpots
  }
}

export default CatanField

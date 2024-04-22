import CatanHex from './catan_hex'
import HexField from './hex_field'

class CatanField extends HexField {
  constructor(pointA: number[], deserts: number[][], public board: Array<CatanHex>[]) {
    super(board)

    const a = this.board[pointA[0]][pointA[1]]
    if (!a) throw 'Point A not found'

    let point = 0
    const hexes = this.inward_spiral(a, this.dirMap().indexOf(pointA.join(' ')))

    for (let hex of hexes as CatanHex[]) {
      if (deserts.every(desert => (
        desert.some((e, i) => e !== this.cordsToIndex(...hex.cords)[i])
      ))) {
        if (this.pointMapping[point]) hex.number = this.pointMapping[point++]
      }
    }
  }

  public static makeBoard(boardSize: number) {
    const board: Array<CatanHex>[] = []

    for (let r = 0; r < 2 * boardSize - 5; r++) {
      const offset = Math.floor(boardSize / 2) - r
      board.push(Array.from({ length: boardSize - Math.abs(offset) }, (_, col) => (
        new CatanHex(col + Math.max(0, offset), r)
      )))
    }

    return board
  }

  private pointMapping = [5, 2, 6, 3, 8, 10, 9, 12, 11, 4, 8, 10, 9, 4, 5, 6, 3, 11]

  public dirMap() {
    const mid = Math.floor(this.board.length / 2)
    const end = this.board.length - 1
    const midSize = (this.board.length + 5) / 2 - 1 // boardSize - 1

    return [
      `${end} 0`,
      `${end} 2`,
      `${mid} ${midSize}`,
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

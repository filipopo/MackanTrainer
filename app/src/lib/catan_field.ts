import CatanHex, { Resource } from './catan_hex'
import HexField from './hex_field'

class CatanField extends HexField {
  constructor(
    public pointA: number[],
    public deserts: number[][],
    public board: Array<CatanHex>[],
    resources: Resource[]
  ) {
    super(board)

    const a = pointA.join(' ')
    if (!this.corners().includes(a))
      pointA = [0, 0]

    this.hexes = this.inwardSpiral(this.board[pointA[0]][pointA[1]], this.corners().indexOf(a)) as CatanHex[]
    const boardWidth = this.board[this.midRow].length

    if (!this.pointMapping[boardWidth])
      return

    let num = 0
    for (const hex of this.hexes) {
      if (deserts.every(desert => (
        desert.some((e, i) => e !== this.cordsToIndex(hex.cords)[i])
      ))) {
        if (this.pointMapping[boardWidth][num]) {
          hex.resource = resources[num] || 'desert'
          hex.number = this.pointMapping[boardWidth][num++]
        }
      }
    }
  }

  public static makeBoard(boardWidth: number) {
    const board: Array<CatanHex>[] = []

    if (boardWidth > 6 && boardWidth % 2 === 1) {
      for (const row of HexField.makeBoard(Math.floor(boardWidth / 2)))
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

  public hexes

  public randomise() {
    const resourceAmount: {[k: number]: {[k in Resource]?: number}} = {
      5: {'wood': 4, 'clay': 3, 'wheat': 4, 'sheep': 4, 'stone': 3},
      6: {'wood': 6, 'clay': 5, 'wheat': 6, 'sheep': 6, 'stone': 5},
      7: {'wood': 8, 'clay': 6, 'wheat': 7, 'sheep': 8, 'stone': 6}
    }

    const resources: Resource[] = []
    const boardWidth = this.board[this.midRow].length

    for (const [resource, quantity] of Object.entries(resourceAmount[boardWidth])) {
      for (let i = 0; i < quantity; i++)
        resources.push(resource as Resource)
    }

    // Shuffle array
    for (let i = resources.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [resources[i], resources[j]] = [resources[j], resources[i]];
    }

    const randomPoint = this.corners()[Math.floor(Math.random() * 6)]
    const randomDesert = []

    for (let i = 0; i < this.deserts.length; i++) {
      randomDesert.push([Math.floor(Math.random() * this.board.length)])
      randomDesert[i].push(Math.floor(Math.random() * this.board[randomDesert[i][0]].length))
    }

    return [randomPoint.split(' ').map(e => Number(e)), randomDesert, resources]
  }

  private pointMapping: {[k: number]: number[]} = {
    5: [5, 2, 6, 3, 8, 10, 9, 12, 11, 4, 8, 10, 9, 4, 5, 6, 3, 11],
    6: [2, 5, 4, 6, 3, 9, 8, 11, 11, 10, 6, 3, 8, 4, 8, 10, 11, 12, 10, 5, 4, 9, 5, 9, 12, 3, 2, 6],
    7: [2, 5, 4, 6, 3, 9, 8, 11, 11, 10, 6, 3, 8, 4, 8, 10, 11, 12, 10, 5, 4, 9, 5, 9, 12, 3, 2, 6, 3, 4, 6, 5, 9, 8, 10]
  }

  public buildSpots() {
    let buildHexes: number[][] | Set<string> = new Set<string>()

    for (const hex of this.hexes) {
      for (let direction = 0; direction < 6; direction++) {
        const combination = [hex.number]

        for (const intersection of [direction, direction + 1]) {
          const hexn = this.getHex(...hex.neighbor(intersection))
          if (hexn) combination.push((hexn as CatanHex).number)
        }

        combination.sort((a, b) => a - b)
        const hashedCombination = combination.join(' ')

        if (!buildHexes.has(hashedCombination))
          buildHexes.add(hashedCombination)
      }
    }

    buildHexes = Array.from(buildHexes).map(cords => cords.split(' ').map(e => Number(e)))
    const buildSpots: [string, number][] = []

    for (const combination of buildHexes) {
      let key = ''
      const value = +(combination.reduce((acc, cur) => {
        key += `${cur} `
        return cur ? acc + 6 - Math.abs(cur - 7) : 0
      }, 0) / 0.36).toFixed(2)

      buildSpots.push([key.trimEnd(), value])
    }

    buildSpots.sort((first, second) => second[1] - first[1])
    return buildSpots
  }
}

export default CatanField
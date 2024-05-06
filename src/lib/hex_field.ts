import Hex, {Cords} from './hex'

class HexField {
  constructor(public board: Array<Hex>[]) {
    this.midRow = Math.floor(this.board.length / 2)
  }

  public static makeBoard(N: number) {
    const board: Array<Hex>[] = []
    const size = 2*N + 1

    for (let r = 0; r < size; r++) {
      board.push(Array.from({ length: size - Math.abs(N - r) }, (_, col) => (
        new Hex(col + Math.max(0, N - r), r)
      )))
    }

    return board
  }

  public midRow

  public cordsToIndex(cords: Cords) {
    if (cords.reduce((a, c) => a + c) !== 0) throw 'q + r + s must be 0'
    const col = cords[1] < this.midRow ? cords[0] - this.midRow + cords[1] : cords[0]
    return [cords[1], col]
  }

  public getHex(q: number, r: number, s = -q - r) {
    const col = this.cordsToIndex([q, r, s])[1]
    if (this.board[r] && this.board[r][col])
      return this.board[r][col]

    return false
  }

  // Also serves as a map to direct inwardSpiral i.e corners().indexof('0 0') === 4
  public corners() {
    const slen = this.board[0].length - 1
    const end = this.board.length - 1

    return [
      `${end} 0`,
      `${end} ${slen}`,
      `${this.midRow} ${this.board[this.midRow].length - 1}`,
      `0 ${slen}`,
      '0 0',
      `${this.midRow} 0`,
    ]
  }

  public inwardSpiral(hex: Hex, direction = 4) {
    let path = [hex]
    const rings = (this.board.length - 1) / 2 + 1 // N + 1

    for (let c = 0; c < rings; c++)
      for (let i = 0; i < 6; i++) {
        let next_hex: Hex | false = hex

        while (
          (next_hex = this.getHex(...next_hex.neighbor(direction))) &&
          path.every(hex => hex.cords.some((e, i) => e !== (next_hex as Hex).cords[i]))
        ) {
          hex = next_hex
          path.push(hex)
        }

        direction++
      }

    return path
  }
}

export default HexField
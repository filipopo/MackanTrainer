import Hex from './hex'

class HexField {
  constructor(public board: Array<Hex>[]) {}

  public static makeBoard(N: number) {
    const board: Array<Hex>[] = []

    for (let r = 0; r < 2*N + 1; r++) {
      board.push(Array.from({ length: 2*N + 1 - Math.abs(N - r) }, (_, col) =>
        new Hex(col + Math.max(0, N - r), r)
      ))
    }

    return board
  }

  public getHex(q: number, r: number, s = -q - r) {
    if (q + r + s !== 0) throw 'q + r + s must be 0'

    const half = Math.floor(this.board.length / 2)
    const col = r >= half ? q : q - half + r

    if (this.board[r] && this.board[r][col])
      return this.board[r][col]

    return false
  }

  public inward_spiral(hex: Hex, direction = 4) {
    const path = []

    for (let i = 0; i < 6; i++) {
      let next_hex: Hex | false = hex
      while (next_hex = this.getHex(...next_hex.neighbor(direction))) {
        hex = next_hex
        path.push(hex)
      }

      direction++
    }

    return path
  }
}

export default HexField

import CatanHex from './catan_hex'
import HexField from './hex_field'

class CatanField extends HexField {
  public static makeBoard(boardSize: number) {
    const board: Array<CatanHex>[] = []

    for (let i = 3; i < boardSize; i++) {
      board.push(Array.from({ length: i }, (_, col) =>
        new CatanHex(boardSize - i + col, i - 3)
      ))
    }

    for (let i = boardSize; i >= 3; i--) {
      board.push(Array.from({ length: i }, (_, col) =>
        new CatanHex(col, 2 * boardSize - i - 3)
      ))
    }

    return board
  }
}

export default CatanField

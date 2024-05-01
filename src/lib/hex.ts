type Cords = [number, number, number]

class Hex {
  constructor (q: number, r: number, s = -q - r) {
    if (q + r + s !== 0) throw 'q + r + s must be 0'
    this.cords = [q, r, s]
  }

  public cords: Cords

  public static directions: Cords[] = [
    [1, 0, -1],
    [1, -1, 0],
    [0, -1, 1],
    [-1, 0, 1],
    [-1, 1, 0],
    [0, 1, -1]
  ]

  public static direction(direction: number) {
    while (direction > 5) direction -= 6
    return Hex.directions[direction]
  }

  public static round(target: Cords) {
    let maxIndex = 0, maxVal = 0, sum = 0

    target = target.map((e, i) => {
      const diff = Math.abs((e = Math.round(e)) - target[i])
      if (diff > maxVal) [maxIndex, maxVal] = [i, diff]
      return sum += e, e
    }) as Cords

    target[maxIndex] -= sum
    return target
  }

  public equals(target: Hex) {
    return this.cords.every((e, i) => e === target.cords[i])
  }

  public add(target: Cords) {
    return this.cords.map((e, i) => e + target[i]) as Cords
  }

  public subtract(target: Cords) {
    return this.cords.map((e, i) => e - target[i]) as Cords
  }

  public neighbor(direction: number) {
    return this.add(Hex.direction(direction))
  }

  public len() {
    return this.cords.reduce((a, c) => a + Math.abs(c), 0) / 2
  }

  public distance(target: Cords) {
    return new Hex(...this.subtract(target)).len()
  }

  public lerp(target:Cords, t:number) {
    return this.cords.map((e, i) => e * (1 - t) + target[i] * t) as Cords
  }

  public scale(factor: number) {
    return this.cords.map(e => e * factor) as Cords
  }
}

export { Hex as default, type Cords }

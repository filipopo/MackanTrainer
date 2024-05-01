import Hex from './hex'

class Point {
  constructor (public x: number, public y: number) {}

  public toString() {
    return `${this.x},${this.y}`
  }

  public add(p: Point) {
    return new Point(this.x + p.x, this.y + p.y)
  }

  public subtract(p: Point) {
    return new Point(this.x + p.x, this.y + p.y)
  }

  public multiply(p: Point) {
    return new Point(this.x * p.x, this.y * p.y)
  }

  public divide(p: Point) {
    return new Point(this.x / p.x, this.y / p.y)
  }
}

class Orientation {
  constructor (
    public fx: number[],
    public fy: number[],
    public bq: number[],
    public br: number[],
    public start_angle: number
  ) {}
}

class Layout {
    constructor (public o: Orientation, public size: Point, public root: Point) {}

    public static pointy = new Orientation(
      [Math.sqrt(3), Math.sqrt(3) / 2],
      [0, 3 / 2],
      [Math.sqrt(3) / 3, -1 / 3],
      [0, 2 / 3],
      0.5
    )

    public static flat = new Orientation(
      [3 / 2, 0],
      [Math.sqrt(3) / 2, Math.sqrt(3)],
      [2 / 3, 0],
      [-1 / 3, Math.sqrt(3) / 3],
      0
    )

    public hexToPixel(h: Hex) {
      const [x, y] = [this.o.fx, this.o.fy].map(m => m[0] * h.cords[0] + m[1] * h.cords[1])
      return this.root.add(this.size.multiply(new Point(x, y)))
    }

    public pixelToHex(p: Point) {
      p = p.subtract(this.root).divide(this.size)
      const [q, r] = [this.o.bq, this.o.br].map(m => m[0] * p.x + m[1] * p.y)
      return Hex.round([q, r, -q - r])
    }

    public hexCornerOffset(corner: number) {
      const angle = 2 * Math.PI * (this.o.start_angle - corner) / 6
      return this.size.multiply(new Point(Math.cos(angle), Math.sin(angle)))
    }

    public polygonCorners(h: Hex) {
      let corners = ''
      const center = this.hexToPixel(h)

      for (var i = 0; i < 6; i++)
        corners += `${center.add(this.hexCornerOffset(i))} `

      return corners.trimEnd()
    }
}

export {Point, Layout}

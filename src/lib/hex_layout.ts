import Hex, { Cords } from './hex'

type Pixel = [number, number]

class Point {
  constructor (public x: number, public y: number) {}

  public add(x: number, y: number) {
    return new Point(this.x + x, this.y + y)
  }

  public multiply(x: number, y: number) {
    return new Point(this.x * x, this.y * y)
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
    constructor (public o: Orientation, size: Pixel, root: Pixel) {
      this.size = new Point(...size)
      this.root = new Point(...root)
    }

    public size: Point
    public root: Point

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
      const x = this.o.fx.reduce((a, c, i) => a + c * h.cords[i]) * this.size.x
      const y = this.o.fy.reduce((a, c, i) => a + c * h.cords[i]) * this.size.y
      return this.root.add(x, y)
    }

    public pixelToHex(p: Pixel): Cords {
      const pt = new Point((p[0] - this.root.x) / this.size.x, (p[1] - this.root.y) / this.size.y)
      const q = this.o.bq[0] * pt.x + this.o.bq[1] * pt.y
      const r = this.o.br[0] * pt.x + this.o.br[1] * pt.y

      return Hex.round([q, r, -q - r])
    }

    public hexCornerOffset(corner: number) {
      const angle = 2 * Math.PI * (this.o.start_angle - corner) / 6
      return this.size.multiply(Math.cos(angle), Math.sin(angle))
    }

    public polygonCorners(h: Hex) {
      const corners: Point[] = []
      const center = this.hexToPixel(h)

      for (var i = 0; i < 6; i++) {
        const offset = this.hexCornerOffset(i)
        corners.push(center.add(offset.x, offset.y))
      }

      return corners
    }
}

export default Layout

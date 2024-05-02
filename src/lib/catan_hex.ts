import Hex from './hex'

type Resource = 'wood' | 'clay' | 'wheat' | 'sheep' | 'stone' | 'desert'

class CatanHex extends Hex {
  public number = 0
  public resource: Resource = 'desert'
}

export {CatanHex as default, type Resource}
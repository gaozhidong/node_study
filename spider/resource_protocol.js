class Resource {
  constructor() {
    this._id = ''
  }

  static genUUID(oriThirdPartyId) {

  }

  static getIdByUUID() {

  }

  static getUUIDByID() {

  }
}

class DoubanNoteResource extends Resource {
  constructor() {
    super()
  }

  static get ['UUID_PREF']() {
    return `https://douban.com/note/`
  }

  static genUUID(oriThirdPartyId) {
    return `${DoubanNoteResource.UUID_PREF}${oriThirdPartyId}`
  }

  static getOriginalThirdPartyId(UUID) {
    returnUUID.split(DoubanNoteResource.UUID_PREF)[1]
  }
  static getIdByUUID(UUID) {
    return UUID
  }

  static getUUIDByID(ID) {
    return ID
  }
}
export default class Order {
  constructor() {
    this._id = null;
    this._createDate = new Date();
    this._version = 0;
    this._tenant = "1";
    this._purchasePrice = 0;
    this._purchaseProvision = 0;
    this._quantity = 0;
    this._sellPrice = 0;
    this._sellProvision = 0;
  }

  set tenant(tenant) {
    this._tenant = tenant;
  }

  get tenant() {
    return this._tenant;
  }

  set id(id) {
    this._id = id;
  }

  get id() {
    return this._id;
  }

  set version(version) {
    this._version = version;
  }

  get version() {
    return this._version;
  }

  set createUser(createUser) {
    this._createUser = createUser;
  }

  get createUser() {
    return this._createUser;
  }

  set createDate(createDate) {
    this._createDate = createDate;
  }

  get createDate() {
    return this._createDate;
  }

  set updateUser(updateUser) {
    this._updateUser = updateUser;
  }

  get updateUser() {
    return this._updateUser;
  }

  set stockId(stockId) {
    this._stockId = stockId;
  }

  get stockId() {
    return this._stockId;
  }

  set type(type) {
    this._type = type;
  }

  get type() {
    return this._type;
  }

  set quantity(quantity) {
    this._quantity = quantity;
  }

  get quantity() {
    return this._quantity;
  }

  set currency(currency) {
    this._currency = currency;
  }

  get currency() {
    return this._currency;
  }

  set purchasePrice(purchasePrice) {
    this._purchasePrice = purchasePrice;
  }

  get purchasePrice() {
    return this._purchasePrice;
  }

  set sellPrice(sellPrice) {
    this._sellPrice = sellPrice;
  }

  get sellPrice() {
    return this._sellPrice;
  }

  set purchaseProvision(purchaseProvision) {
    this._purchaseProvision = purchaseProvision;
  }

  get purchaseProvision() {
    return this._purchaseProvision;
  }

  set sellProvision(sellProvision) {
    this._sellProvision = sellProvision;
  }

  get sellProvision() {
    return this._sellProvision;
  }

  set purchaseDate(purchaseDate) {
    this._purchaseDate = purchaseDate;
  }

  get purchaseDate() {
    return this._purchaseDate;
  }

  set sellDate(sellDate) {
    this._sellDate = sellDate;
  }

  get sellDate() {
    return this._sellDate;
  }

  set status(status) {
    this._sellDate = status;
  }

  get status() {
    return this._status;
  }

  set optionType(optionType) {
    this._optionType = optionType;
  }

  get optionType() {
    return this._optionType;
  }

  set strikePrice(strikePrice) {
    this._strikePrice = strikePrice;
  }

  get strikePrice() {
    return this._strikePrice;
  }

  set strikeDate(strikeDate) {
    this._strikeDate = strikeDate;
  }

  get strikeDate() {
    return this._strikeDate;
  }
}

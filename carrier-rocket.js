class CarrierRocket {
  constructor(stages) {
    this.stages = [...stages];
  }

  detachStage() {
    this.stages.splice(0, 1);
  }
}

module.exports = CarrierRocket;

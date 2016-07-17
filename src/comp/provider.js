class Provider {
  constructor() {
    this.logger = null;

    this.instances = new Map();
  }

  add(name, func) {
    if (this.logger) {
      this.logger.debug('add', name);
    }

    this.addInstance(name, func());// todo create on demand
  }

  addInstance(name, instance) {
    if (this.logger) {
      this.logger.debug('addInstance', name);
    }

    this.instances.set(name, instance);
  }

  addClass(name, class_) {

  }

  get(name) {
    if (this.logger) {
      this.logger.debug('get', name);
    }

    return this.instances.get(name);
  }

  getClass(name) {

  }

  setLogger(logger) {
    this.logger = logger;
  }
}

module.exports = Provider;

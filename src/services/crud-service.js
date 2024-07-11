class CrudService {
  constructor(repository) {
    this.repository = repository;
  }

  async create(data) {
    console.log("!!", data);
    try {
      const result = await this.repository.create(data);
      return result;
    } catch (err) {
      console.log("something went wrong in crud service");
      throw err;
    }
  }

  async destroy(data) {
    try {
      const result = await this.repository.destroy(data);
      return result;
    } catch (err) {
      console.log("something went wrong in crud service");
      throw err;
    }
  }

  async update(id, data) {
    try {
      const result = await this.repository.update(id, data);
      return result;
    } catch (err) {
      console.log("something went wrong in crud service");
      throw err;
    }
  }

  async get(id) {
    try {
      const result = await this.repository.get(id);
      return result;
    } catch (err) {
      console.log("something went wrong in crud service");
      throw err;
    }
  }

  async getAll() {
    try {
      const result = await this.repository.getAll();
      return result;
    } catch (err) {
      console.log("something went wrong in crud service");
      throw err;
    }
  }
}

module.exports = CrudService;

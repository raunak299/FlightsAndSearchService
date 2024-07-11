class CrudRepository {
  constructor(model) {
    this.model = model;
  }

  async create(data) {
    console.log("crud");
    console.log("!!", data);
    try {
      const result = await this.model.create(data);
      return result;
    } catch (err) {
      console.log("Something went wrong in crud repo");
      throw err;
    }
  }

  async destroy(id) {
    try {
      await this.model.destroy({
        where: {
          id: id,
        },
      });
      return true;
    } catch (err) {
      console.log("Something went wrong in crud repo");
      throw err;
    }
  }

  async update(id, data) {
    try {
      const result = await this.model.update(data, {
        where: {
          id: id,
        },
      });
      return result;
    } catch (error) {
      console.log("Something went wrong in crud repo");
      throw error;
    }
  }

  async get(id) {
    try {
      const result = await this.model.findByPk(id);
      return result;
    } catch (err) {
      console.log("Something went wrong in crud repo");
      throw err;
    }
  }

  async getAll() {
    try {
      const result = await this.model.findAll();
      return result;
    } catch (err) {
      console.log("Something went wrong in crud repo");
      throw err;
    }
  }
}

module.exports = CrudRepository;

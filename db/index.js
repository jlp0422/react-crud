const Sequelize = require('sequelize');
const conn = new Sequelize(process.env.DATABASE_URL || 'postgres://localhost/demo_db', {
  logging: false
})

const Product = conn.define('product', {
  name: Sequelize.STRING
})

const sync = () => {
  return conn.sync({ force: true })
}

const seed = () => {
  return Promise.all([
    Product.create({ name: 'Bananas' }),
    Product.create({ name: 'Apples' }),
    Product.create({ name: 'Carrots' })
  ])
}

module.exports = {
  sync,
  seed,
  models: {
    Product
  }
}

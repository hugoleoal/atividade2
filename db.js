const Sequelize = require('sequelize');
sequelize = new Sequelize('postgres://qhpfkognppjydr:72fae4ee26d20a6623e06dfe08a23cffff0c667ea09b7df224f084dca3ab660e@ec2-44-206-204-65.compute-1.amazonaws.com:5432/dfqdae10u8v346', 
{
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false
      }
    }
  }
);

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });


  module.exports = sequelize;
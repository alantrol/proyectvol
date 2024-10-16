const { Sequelize, DataTypes } = require('sequelize');



// Option 3: Passing parameters separately (other dialects)
const sequelize = new Sequelize('archivos', 'root', '', {
    host: 'localhost',
    port:3306,
    dialect:'mysql'/* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */
  });

  const Usuario =sequelize.define("Usuario",{

    firstName:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    lastName:{

        type:DataTypes.STRING,
        allowNull:true,
    },
    email: {
        type:DataTypes.STRING,
        allowNull:false,

    },
    password:{
        type:DataTypes.STRING,
        allowNull:false,

    },
    ci:{
        type:DataTypes.BIGINT,
        allowNull:false,


    }
  })
  const Documento =sequelize.define("Documento",{
      nombre:{
        type:DataTypes.STRING,
        allowNull:false,
      },
      numero:{
        type:DataTypes.INTEGER,
      allowNull:false,
      },
      fecha:{
        type:DataTypes.DATE,
      allowNull:false,
      }
  })


  async function db(){
  try {
    await sequelize.authenticate();
    await sequelize.sync({ force: true });
    console.log('All models were synchronized successfully.');
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}
module.exports = {db,Usuario,Documento}
const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('dog', {
    ID: {
      type: DataTypes.UUID,
      primaryKey:true
    },    
    Nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Altura: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Peso: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Anos_de_vida: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Imagen: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  });
};


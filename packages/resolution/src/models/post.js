const Place = require("./place")
const Category = require("../models/category");
const User = require("../models/user");

const db = require("../config/database");

// const { Sequelize, DataTypes } = require("sequelize");
// const sequelize = new Sequelize(db);


const model = (sequelize, DataTypes) => {
  const Post = sequelize.define("post", 
  {
    post_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: {
          tableName: "user",
          schema: "resolution"
        },
        key: "user_id"
      }
    },
    category_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: {
          tableName: "category",
          schema: "resolution"
        },
        key: "category_id"
      }
    },
    place_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: {
          tableName: "place",
          schema: "resolution"
        },
        key: "place_id"
      }
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false
    },
    dt_creation: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: "post",
    schema: "resolution"
});

Post.belongsTo(Place, {
  foreignKey: "place_id"
});
// Place.hasOne(Post, {
//   foreignKey: "place_id"
// });

Post.belongsTo(Category, { 
  foreignKey: "category_id"
});
// Category.hasOne(Post, { 
//   foreignKey: "category_id"
// });

Post.belongsTo(User, { 
  foreignKey: "user_id"
});
// User.hasOne(Post, { 
//   foreignKey: "user_id"
// });
  return Post;
};


module.exports = model;

// import models - DONE
const Product = require("./Product");
const Category = require("./Category");
const Tag = require("./Tag");
const ProductTag = require("./ProductTag");

// Products belongsTo Category - DONE
Product.belongsTo(Category);
// Categories have many Products - DONE
Category.hasMany(Product);
// Products belongToMany Tags (through ProductTag) - DONE
Product.belongsToMany(Tag, {
  through: {
    model: ProductTag,
    unique: false,
  },
});
// Tags belongToMany Products (through ProductTag) - DONE
Tag.belongsToMany(Product, {
  through: {
    model: ProductTag,
    unique: false,
  },
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};

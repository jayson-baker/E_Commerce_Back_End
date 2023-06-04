const router = require("express").Router();
const { Category, Product } = require("../../models");

// The `/api/categories` endpoint

router.get("/", async (req, res) => {
  // find all categories
  // be sure to include its associated Products
  try {
    const categoryData = await Category.findAll({
      include: [{ model: Product, as: "Products" }],
    });
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/:id", async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  try {
    const catagoryData = await Tag.findByPk(req.params.id, {
      include: [{ model: Product, as: "Products" }],
    });

    if (!catagoryData) {
      res.status(404).json({ message: "No Category found with this id.." });
      return;
    }
    res.status(200).json(catagoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/", (req, res) => {
  // create a new category
  //   Category.create(req.body)
  //     .then((catagory) => {
  //       if (req.body.tagIds.length) {
  //         const catagoryTagIdArr = req.body.tagIds.map((category_name) => {
  //           return {
  //             category_name: category_name,
  //           };
  //         });
  //         return ProductTag.bulkCreate(catagoryTagIdArr);
  //       }
  //       res.status(200).json(catagory);
  //     })
  //     .then((catagoryTagIds) => res.status(200).json(catagoryTagIds))
  //     .catch((err) => {
  //       console.log(err);
  //       res.status(400).json(err);
  //     });
});

router.put("/:id", (req, res) => {
  // update a category by its `id` value
});

router.delete("/:id", async (req, res) => {
  // delete a category by its `id` value
  try {
    const categoryData = await Product.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!categoryData) {
      res.status(404).json({ message: "No Category found with this id.." });
      return;
    }
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;

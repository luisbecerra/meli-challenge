const { items } = require("./items");
const { item } = require("./item");

const index = (req, res) => {
    res.status(200).json({ msg: "WORKING!!!" });
}

module.exports = { index, items, item }
const mongoose = require("mongoose");
const { DB_URL } = require("../config");
const { ProductModel } = require("./models");
const fs = require("fs");
const path = require("path");

module.exports = async () => {
  try {
    await mongoose.connect(DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("Db Connected");

    const count = await ProductModel.countDocuments();
    console.log("Product count:", count);

    if (count === 0) {
      const dataPath = path.join(__dirname, "sampledata.json");
      const rawData = fs.readFileSync(dataPath);
      const sampleData = JSON.parse(rawData);

      await ProductModel.insertMany(sampleData);
      console.log("Sample data inserted.");
    }
  } catch (error) {
    console.error("MongoDB init error:", error);
  }
};

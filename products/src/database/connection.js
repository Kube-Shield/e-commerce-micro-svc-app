const mongoose = require("mongoose");
const { DB_URL } = require("../config");
const { ProductModel } = require("./models");
module.exports = async () => {
  try {
    await mongoose.connect(DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });

    console.log("Db Connected");    
    const count = await ProductModel.countDocuments();
    if (count === 0) {
      await ProductModel.insertMany(sampleData);
    }

    // Load sample data after successful connection
  } catch (error) {
    console.log("Error ============");
    console.log(error);
  }
};

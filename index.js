const express = require("express");
const app = express();
const PORT = 3000;
const homeRoutes = require("./routes/homeRoutes");

app.use("/", homeRoutes);

app.listen(PORT, () => {
  console.log(`Test server running on port: ${PORT}`);
});
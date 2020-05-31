const express = require("express");

app.get("/user/info", function(req, res) {
  res.send({
    status: 200,
    items: [
      { id: 1, name: "赵丽颖" },
      { id: 2, name: "杨幂" },
    ],
  });
});

app.listen(4000, () => {
  console.log("server started listen on http://localhost:4000");
});

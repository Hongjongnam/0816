const express = require("express");
const router = express.Router();
const { pool } = require("../DB/db");

router.post("/upload", async (req, res) => {
  console.log("asd", req.body);
  const { inputAccount, image, apk, explain } = req.body;
  const sql = `INSERT INTO dapp_info(account, img, files, explains) VALUES(?, ?, ?, ?)`;
  const params = [inputAccount, image, apk, explain];
  try {
    const [result] = await pool.execute(sql, params);
    console.log(result);
  } catch (e) {
    console.log(e);
  }
});

module.exports = router;

const express = require("express");
const adminRouter = require("./admin/adminRouter.js");
const router = express.Router();
// const { pool } = require("../DB/db");

// router.post("/upload", async (req, res) => {
//   const { inputAccount, image, apk, explain } = req.body;
//   const sql = `INSERT INTO dapp_info(account, img, files, explains) VALUES(?, ?, ?, ?)`;
//   const params = [inputAccount, image, apk, explain];
//   try {
//     const [result] = await pool.execute(sql, params);
//     console.log("DAPP 등록 완료");
//   } catch (e) {
//     console.log(e);
//   }
// });

router.use("/admin", adminRouter);

module.exports = router;

import express from "express";
import dbConnection from "./dbCon.js";
import UserRoutes from "./routes/UserRoutes.js";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// app.get("/", (req, res) => {
//   res.send("this is my server");
// });

// app.get("/get-test", (req, res) => {
//   //console.log(res.status(400));
//   const sql = "select * from test where id = ? and name = ?";
//   var vals = [2, 'kamal']
//   dbConnection.query(sql, vals, (err, data) => {
//     if (err) {
//         console.log(err);
//       return res.status(500).json({ error: "error" });
//     } else {
//       return res.json(data);
//     }
//   });
// });

// app.get("/test", (req, res) => {
//   res.send("this is test");
// });


app.use('/users',UserRoutes);

const port = process.env.SERVER_PORT || 6000

app.listen(port, ()=>{
    console.log(`Server running on port ${port}`);
});


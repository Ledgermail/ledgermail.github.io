const express = require("express");
const app = express();
const cors = require("cors");
const { sendMail } = require("./mail");
const port = process.env.PORT || "3000";
app.use(express.json());
app.use(express.urlencoded());
app.use(cors());


// (async()=>{await sendMail({name:"nagnath"})})()


app.post("/ledgermail/contact-form",async (req, res) => {
 
   let t =  await sendMail(req.body)
  

  return res.send(t.response);
});
app.get("/", (req, res) => {
  console.log("request", req.body);
  return res.send({ error: false });
});

app.listen(port, () => {
  console.log("running port :", port);
});

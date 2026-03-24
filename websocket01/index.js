import express from "express";

const app = express();
const PORT = 3000;


app.get("/", (req, res) => {
    res.send("Hello Server");
});

app.get("/cart", (req, res) => {
    res.send("This is Cart");
});



app.listen(PORT, () => {
    console.log(`SERVER有開了 http://localhost:${PORT}`);

});
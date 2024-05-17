import express from "express";
import db from "./config/dbConnect.js";
import routes from "./routes/index.js";
import handler404 from "./middleware/Handler404.js";
import errorHandler from "./middleware/errorHandler.js";


db.on("error", console.log.bind(console, "erro de conexao"));
db.once("open" ,() => {
  console.log("conexao com o banco feita com sucesso");
});

const app = express();
app.use(express.json());

routes(app);

app.use(handler404);

// eslint-disable-next-line no-unused-vars
app.use(errorHandler);


export default app;

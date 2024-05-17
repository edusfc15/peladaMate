import express from "express";
import teste from "./jogadorRoutes.js";

const routes = (app) => {
    app.route("/").get((req, res)=>{
        res.status(200).send({ titulo: "curso de node"});
    });

    app.use(
        express.json(),
        teste
    );
};

export default routes;
const express = require("express");
const logger = require("pino")();

const app = express();

app.set("view engine", "pug");
app.set("views", `${process.cwd()}/views`);

app.locals.pretty = true;

app.use("/public", express.static(`${__dirname}/../components`));

app.get("/", (req, res) => {
    res.render("main");
});

const server = app.listen(process.env.PORT || 3000, () => {
    logger.info("Listening on port %d", server.address().port);
});

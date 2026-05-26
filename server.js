import express from "express";
import getGithubUser from "./services/githubApi.js";
const app = express();

const port = 3000;
app.use(express.static("public"));

app.get("/", (req,res) => {
    res.send("Hello There!");
});

app.get("/api/github/:username", async (req,res) => {
    try {        
        const username = req.params.username;
        const data = await getGithubUser(username);
        res.json(data);
    } catch (err) {
        res.status(err.status || 500).json({
        error: err.message || "Internal server error"
    });
}
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
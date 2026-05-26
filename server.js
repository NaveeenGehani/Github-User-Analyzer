import express from "express";
import getGithubUser from "./services/githubApi.js";
const app = express();

const port = 3000;

app.get("/", (req,res) => {
    res.send("Hello There!");
});

app.get("/api/github/:username", async (req,res) => {
    try {        
        const username = req.params.username;
        const data = await getGithubUser(username);
        res.json(data);
    } catch (error) {
        res.status(500).json({
            error: error.message || "something went wrong!"
        });
    }
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
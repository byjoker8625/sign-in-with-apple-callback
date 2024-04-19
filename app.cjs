const express = require('express');
const app = express();

const endpoint = process.env.ENDPOINT || "/oauth/apple/callback";
const clientId = process.env.CLIENT_ID || "";

if (clientId.length === 0) {
    console.error("Missing CLIENT_ID environment variable");
    process.exit(1);
}

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post(endpoint, (req, res) => {
    const body = req.body;

    if (!body) {
        res.json({statusCode: 400, error: "invalid_request"}).status(400);
        return;
    }

    const urlEncodedBody = Object.entries(body)
        .map(([key, value]) => `${key}=${encodeURIComponent(value)}`)
        .join('&');

    res.redirect(`intent://callback?${urlEncodedBody}#Intent;package=${clientId};scheme=signinwithapple;end`);
});

app.post("/", (req, res) => {
    res.json({statusCode: 404, error: "not_found"}).status(404);
});

app.get("/", (req, res) => {
    res.json({statusCode: 404, error: "not_found"}).status(404);
});


app.listen(3080, () => {
    console.log(`Sign in with Apple callback app listening at port 3080 for ${clientId} app...`);
});


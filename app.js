const express = require("express");
const bodyParser = require("body-parser");
const speakeasy = require("speakeasy");
const qrcode = require("qrcode");
const path = require("path");

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

// Set EJS View Engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static('public'));


// Store secret temporarily (in real time - store in Database)
let secret;

// ----------------------
// 1️⃣ Show QR + Secret Page
// ----------------------
app.get("/", async (req, res) => {
    secret = speakeasy.generateSecret({
        name: "MyApp 2FA",
    });
    const qrImage = await qrcode.toDataURL(secret.otpauth_url);

    return res.render("index", {
        qr_image: qrImage,
        secret: secret.base32
    });
});

// ----------------------
// 2️⃣ Verify OTP
// ----------------------
app.post("/verify", (req, res) => {
    const userToken = req.body.token;

    const verified = speakeasy.totp.verify({
        secret: secret.base32,
        encoding: "base32",
        token: userToken,
        window: 1
    });
    return res.render("verify", { verified });
});

// ----------------------
// 🚀 Start Server
// ----------------------
app.listen(5000, () => {
    console.log("🚀 Server running at http://localhost:5000");
});

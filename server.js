
const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const app = express();
const port = 8000;
const methodOverride = require("method-override");
const cors = require("cors");
const session = require("express-session");
const dotenv = require("dotenv");
const bcrypt = require('bcrypt');
const User = require('./models/users');


app.use(methodOverride("_method"));

const mahasiswa = require("./routes/mahasiswa");
const dosen = require("./routes/dosen");
const admin = require("./routes/admin");

const authRouter = require("./routes/auth");
const { authenticateToken, checkUser } = require("./middleware/verifyToken");


app.use(express.static("public"));
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.use(express.static('public'));
app.get("*", checkUser);

app.use("/auth", authRouter);

app.use("/mahasiswa", mahasiswa);
app.use("/dosen", dosen);
app.use("/admin", admin);

app.use(express.urlencoded({ extended: true }));


app.use(session({
  secret: process.env.SESS_SECRET,
  resave: false,
  saveUninitialized: true,
  cookie: {
    secure: 'auto'
  }
}));
app.use(cors({
  credentials: true,
  origin: 'http://localhost:3000'
}));

dotenv.config();



app.get("/", authenticateToken, (req, res) => {
  res.render("home");
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.post('/mahasiswa/profil-edit/:id', async (req, res) => {
  const userId = req.params.id;
  const { currentPassword, password, ...rest } = req.body;

  try {
    const user = await User.findById(userId);

   
    if (currentPassword) {
      const match = await bcrypt.compare(currentPassword, user.password);
      if (!match) {
        return res.status(400).send("Password lama tidak cocok");
      }
    }

    
    if (password) {
      rest.password = await bcrypt.hash(password, 10);
    }

    await User.findByIdAndUpdate(userId, rest);
    res.redirect('/some-success-page'); 
  } catch (error) {
    res.status(500).send("Terjadi kesalahan");
  }
});




app.use("/", (req, res) => {
  res.render("err404.ejs");
});


app.listen(port, () => {
  console.log(`Server berada di port  ${port}`);
});

const User = require("../models/users");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const bcrypt = require("bcrypt");
const db = require("../config/conn");
const path = require('path');
const fs = require('fs');



const profile_get = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (user) {
      let view;
      switch (user.type) {
        case '':
          view = 'mahasiswa/profil';
          break;
          case 'M':
          view = 'mahasiswa/profil';
          break;
        case 'D':
          view = 'dosen/profil';
          break;
        case 'T':
          view = 'admin/profil';
          break;
        default:
          return res.status(404).send("User type not recognized");
      }
      res.render(view, { user: user });
    } else {
      res.status(404).send("User not found");
    }
  } catch (error) {
    res.status(500).send("Server error");
  }
};


const profile_edit_get = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (user) {
      let view;
      switch (user.type) {
        case '':
          view = 'mahasiswa/profil-edit';
          break;
        case'M':
            view = 'mahasiswa/profil-edit';
            break;
        case 'D':
          view = 'dosen/profil-edit';
          break;
        case 'T':
          view = 'admin/profil-edit';
          break;
        default:
          return res.status(404).send("User type not recognized");
      }
      res.render(view, { user: user });
    } else {
      res.status(404).send("User not found");
    }
  } catch (error) {
    res.status(500).send("Server error");
  }
};

const profile_edit_post = async (req, res) => {
  try {
    const { name, phone, nim, judul_tugas_akhir,nama_mahasiswa, nama_dosen,bidang, gelar, fakultas, jurusan,jabatan, program_studi, semester, nip } = req.body;
    console.log("Received data:", req.body);

    const user = await User.findByPk(req.params.id);
    if (!user) {
      console.log("User not found");
      return res.status(404).send("User not found");
    }

    user.name = name;
    user.phone = phone;
    user.nim = nim;
    user.judul_tugas_akhir = judul_tugas_akhir;
    user.nama_mahasiswa = nama_mahasiswa;
    user.nama_dosen = nama_dosen;
    user.bidang = bidang;
    user.gelar = gelar;
    user.fakultas = fakultas;
    user.jurusan = jurusan;
    user.jabatan = jabatan;
    user.program_studi = program_studi;
    user.semester = semester;
    user.nip = nip;

    if (req.file) {
      user.foto = `${req.file.filename}`;
    }

    console.log("Updating user:", user);
    await user.save();
    console.log("User updated successfully");

    let redirectUrl;
    switch (user.type) {
      case '':
        redirectUrl = `/mahasiswa/profil/${user.id}`;
        break;
      case 'M':
          redirectUrl = `/mahasiswa/profil/${user.id}`;
          break;
      case 'D':
        redirectUrl = `/dosen/profil/${user.id}`;
        break;
      case 'T':
        redirectUrl = `/admin/profil/${user.id}`;
        break;
      default:
        return res.status(404).send("User type not recognized");
    }
    res.redirect(redirectUrl);
  } catch (error) {
    console.error("Server error:", error);
    res.status(500).send("Server error");
  }
};



const login = async function (email, password) {
  const user = await User.findOne({ where: { email: email } });
  if (user) {
    const auth = await User.findOne({ where: { password: password } });
    if (auth) {
      return user;
    }
    throw Error("incorrect password");
  }
  throw Error("incorrect email");
};


const handleErrors = (err) => {
  console.log(err.message, err.code);
  let errors = { email: "", password: "" };

  
  if (err.message === "incorrect email") {
    errors.email = "That email is not registered";
  }

  
  if (err.message === "incorrect password") {
    errors.password = "That password is incorrect";
  }

  
  if (err.code === 11000) {
    errors.email = "that email is already registered";
    return errors;
  }

  
  if (err.message.includes("user validation failed")) {
    Object.values(err.errors).forEach(({ properties }) => {
      errors[properties.path] = properties.message;
    });
  }

  return errors;
};


const maxAge = 3 * 24 * 60 * 60;
dotenv.config();
let secret = process.env.TOKEN_SECRET;
const createToken = (id, type) => {
  return jwt.sign({ id, type }, secret, {
    expiresIn: maxAge,
  });
};

const signup_get = (req, res) => {
  res.render("signup");
};

const login_get = (req, res) => {
  res.render("login");
};

const signup_post = async (req, res) => {
  const { name, email, password, confPassword, type } = req.body;
  if (password !== confPassword) return res.status(400).json({ msg: "Password dan Confirm Password tidak cocok" });

  const salt = await bcrypt.genSalt();
  const hashPassword = await bcrypt.hash(password, salt);

  const emailExist = await User.findOne({ where: { email } });
  if (emailExist) return res.status(400).send("Email sudah dipakai");

  try {
    const user = await User.create({
      name,
      email,
      password: hashPassword,
      type,
    });
    res.status(201).json({ user: user.id });
  } catch (err) {
    const errors = handleErrors(err);
    res.status(400).json({ errors });
  }
};


const login_post = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await login(email, password);
    if (!user) return res.status(400).send("Email tidak ditemukan");

    
    const validPass = await bcrypt.compare(req.body.password, user.password);
    if (!validPass) return res.status(400).send("Password Salah");

    let today = new Date();
    let date = today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
    let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    let dateTime = date + " " + time;

    const token = createToken(user.id, user.type);
    const type = user.type;

    await User.update(
      {
        remember_token: token,
        email_verified_at: dateTime,
      },
      {
        where: { email: req.body.email },
      }
    );

    res.cookie("jwt", token, { httpOnly: true, maxAge: maxAge * 1000 }).cookie("type", type, {
      httpOnly: true,
      maxAge: 24 * 60 * 60 * 1000,
    });
    res.status(200).json({ user: user.id });
  } catch (err) {
    const errors = handleErrors(err);
    res.status(400).json({ errors });
  }
};

const settings_get = (req, res) => {
  res.render('settings', { user: req.user });
};

const change_password_post = async (req, res) => {
  try {
    const { currentPassword, newPassword } = req.body;
    const user = await User.findByPk(req.user.id);

    const match = await bcrypt.compare(currentPassword, user.password);
    if (!match) {
      return res.status(400).send('Password saat ini salah');
    }

    const salt = await bcrypt.genSalt();
    user.password = await bcrypt.hash(newPassword, salt);
    await user.save();

    res.redirect('/settings');
  } catch (error) {
    res.status(500).send('Server error');
  }
};

const logout_get = (req, res) => {
  res.cookie("jwt", "", { maxAge: 1 });
  res.cookie("type", "", { maxAge: 1 });
  res.redirect("/auth/login");
};



module.exports = {
  signup_get, 
  signup_post, 
  login_get, 
  login_post, 
  logout_get, 
  profile_get, 
  profile_edit_get,
  profile_edit_post,
  settings_get,
  change_password_post 
};

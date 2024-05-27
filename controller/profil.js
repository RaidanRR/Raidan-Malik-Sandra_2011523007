const users = require("../models/users");

// Fungsi untuk mendapatkan profil mahasiswa berdasarkan id
const getProfilMahasiswa = async (req, res) => {
  try {
    // Mendapatkan id mahasiswa dari sesi atau token
    const userId = req.user.id;

    // Mendapatkan data profil mahasiswa dari database berdasarkan id
    const user = await users.findOne({ where: { id: userId } });

    if (!user) {
      // Jika tidak ditemukan, kirimkan respons error
      return res.status(404).json({ message: "Profil mahasiswa tidak ditemukan" });
    }

    // Kirimkan data profil mahasiswa ke halaman profil
    res.render("mahasiswa/profil", { profilData: user });
  } catch (error) {
    // Tangani kesalahan dan kirimkan respons error
    console.error("Error:", error);
    res.status(500).json({ message: "Terjadi kesalahan saat mengambil data profil mahasiswa" });
  }
};

module.exports = { getProfilMahasiswa };

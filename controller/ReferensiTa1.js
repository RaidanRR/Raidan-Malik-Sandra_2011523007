exports.getReferensiTa1 = (req, res) => {
    res.render('dosen/ReferensiTa1', { title: 'Referensi TA Mahasiswa' });
};

exports.listAngkatan = (req, res) => {
  
    const angkatanList = ['2018', '2019', '2020', '2021'];
    
    res.render('mahasiswa/list-angkatan', { angkatanList });
  };
  
  exports.listMahasiswaByAngkatan = (req, res) => {
    const angkatan = req.params.angkatan;
  

    const mahasiswaList = [
      { name: 'John Doe', nim: '123456', angkatan: angkatan },
      { name: 'Jane Smith', nim: '654321', angkatan: angkatan }
    ];
  
    res.render('mahasiswa/list-mahasiswa', { mahasiswaList, angkatan });
  };
  

  
  
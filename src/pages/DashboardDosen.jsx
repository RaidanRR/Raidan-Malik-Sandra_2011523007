import './DashboardDosen.css'

export default function DashboardDosen() {
  return (
    <div className="dashboard-dosen">
      <div className="container">
        <div className="container-5">
          <div className="line-12">
          </div>
          <div className="line-13">
          </div>
        </div>
        <div className="nama-dosen">
        [Nama Dosen]
        </div>
        <div className="nip-dosen">
        [NIP Dosen]
        </div>
        <div className="line-14">
        </div>
        <div className="daftar-mahasiswa">
        Daftar Mahasiswa
        </div>
        <div className="progress-mahasiswa">
        Progress Mahasiswa
        </div>
        <div className="penjadwalan">
        Penjadwalan
        </div>
        <div className="container-2">
          <span className="notifikasi">
          Notifikasi
          </span>
          <div className="container-3">
            <div className="line-18">
            </div>
            <div className="line-19">
            </div>
          </div>
        </div>
        <div className="chat">
        Chat
        </div>
        <span className="logout">
        Logout
        </span>
      </div>
      <div className="container-4">
        <div className="container-1">
          <div className="line-7">
          </div>
          <div className="selamat-datang-nama-dosen-pantau-progress-tugas-akhir-mahasiswa-bimbinganmu-di-sini">
          Selamat Datang, [Nama Dosen]<br />
          Pantau Progress Tugas Akhir <br />
          Mahasiswa Bimbinganmu Di sini
          </div>
          <span className="ada-xmahasiswa-yang-menunggu-responmu-untuk-revisi-tugas-akhir-mereka">
          Ada X mahasiswa yang menunggu responmu<br />
          untuk revisi Tugas Akhir mereka
          </span>
        </div>
        <div className="line-8">
        </div>
      </div>
    </div>
  )
}
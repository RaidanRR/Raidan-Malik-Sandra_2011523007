import './DashboardMahasiswa.css'

export default function DashboardMahasiswa() {
  return (
    <div className="dashboard-mahasiswa">
      <div className="container-5">
        <div className="container-4">
          <div className="line-12">
          </div>
          <div className="line-13">
          </div>
        </div>
        <div className="nama-mahasiswa">
        [Nama Mahasiswa]
        </div>
        <div className="nim-mahasiswa">
        [NIM Mahasiswa]
        </div>
        <div className="line-14">
        </div>
        <div className="progress-saya">
        Progress Saya
        </div>
        <div className="penjadwalan">
        Penjadwalan
        </div>
        <div className="container-2">
          <span className="notifikasi">
          Notifikasi
          </span>
          <div className="container-1">
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
      <div className="container-3">
        <div className="container">
          <div className="line-7">
          </div>
          <div className="image-1">
          </div>
          <div className="halo-nama-mahasiswa-ayo-selesaikan-tugas-akhirmu-agar-cepat-lulus">
          Halo, [Nama Mahasiswa]<br />
          Ayo selesaikan Tugas Akhirmu<br />
          agar cepat lulus!
          </div>
          <div className="nama-dosen-sedang-memantau-progress-tugas-akhirmu-lho">
          [Nama Dosen] sedang memantau progress <br />
          Tugas Akhirmu lho.
          </div>
          <div className="image-2">
          </div>
        </div>
        <div className="line-8">
        </div>
      </div>
    </div>
  )
}
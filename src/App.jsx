import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import F12Main from './F12Main';

import ChatDosenbelumDisetujui from './pages/ChatDosenbelumDisetujui';
import ChatDosendisetujui from './pages/ChatDosendisetujui';
import ChatMahasiswa from './pages/ChatMahasiswa';
import DashboardDosen from './pages/DashboardDosen';
import DashboardMahasiswa from './pages/DashboardMahasiswa';
import DetailPembatalan1 from './pages/DetailPembatalan1';
import DetailPembatalan2 from './pages/DetailPembatalan2';
import DetailPembatalan3 from './pages/DetailPembatalan3';
import DetailPermintaan1 from './pages/DetailPermintaan1';
import DetailPermintaan2 from './pages/DetailPermintaan2';
import DetailPermintaan3 from './pages/DetailPermintaan3';
import DetailPermintaan5 from './pages/DetailPermintaan5';
import DetailPermintaanPertemuanBelumDisetujui2 from './pages/DetailPermintaanPertemuanBelumDisetujui2';
import DetailPertemuanMendatangSudahDisetujui from './pages/DetailPertemuanMendatangSudahDisetujui';
import DetailPertemuanPermintaanBelumDisetujui1 from './pages/DetailPertemuanPermintaanBelumDisetujui1';
import DetailRiwayatPertemuanSelesai from './pages/DetailRiwayatPertemuanSelesai';
import Dikoreksi from './pages/Dikoreksi';
import Faq from './pages/Faq';
import JanjiDenganMahasiswa1 from './pages/JanjiDenganMahasiswa1';
import JanjiDenganMahasiswa2 from './pages/JanjiDenganMahasiswa2';
import ListMahasiswa1 from './pages/ListMahasiswa1';
import ListMahasiswa2 from './pages/ListMahasiswa2';
import ListMahasiswa3 from './pages/ListMahasiswa3';
import Login from './pages/Login';
import LoginDosen from './pages/LoginDosen';
import Mengkoreksi1 from './pages/Mengkoreksi1';
import Mengkoreksi2 from './pages/Mengkoreksi2';
import Notifikasi1 from './pages/Notifikasi1';
import Notifikasi2 from './pages/Notifikasi2';
import NotifikasiDosen from './pages/NotifikasiDosen';
import NotifikasiDosen1 from './pages/NotifikasiDosen1';
import PenerimaanPermintaan1 from './pages/PenerimaanPermintaan1';
import PenerimaanPermintaan2 from './pages/PenerimaanPermintaan2';
import PenerimaanPermintaan3 from './pages/PenerimaanPermintaan3';
import Penjadwalan1 from './pages/Penjadwalan1';
import Penjadwalan11 from './pages/Penjadwalan11';
import Penjadwalan2 from './pages/Penjadwalan2';
import Penjadwalan21 from './pages/Penjadwalan21';
import Penjadwalan3 from './pages/Penjadwalan3';
import Penjadwalan4 from './pages/Penjadwalan4';
import Penjadwalan5 from './pages/Penjadwalan5';
import Penjadwalan6 from './pages/Penjadwalan6';
import PertemuanSelesai from './pages/PertemuanSelesai';
import PertemuanSelesai1 from './pages/PertemuanSelesai1';
import PertemuanSelesai2 from './pages/PertemuanSelesai2';
import PertemuanSelesai3 from './pages/PertemuanSelesai3';
import ProfilDosen from './pages/ProfilDosen';
import ProfilMahasiswa from './pages/ProfilMahasiswa';
import ProfilMahasiswa1 from './pages/ProfilMahasiswa1';
import ProfileMahasiswaPovDosen from './pages/ProfileMahasiswaPovDosen';
import ProfileMahasiswaPovDosen1 from './pages/ProfileMahasiswaPovDosen1';
import Progress1 from './pages/Progress1';
import Progress3 from './pages/Progress3';
import Progress4 from './pages/Progress4';
import Progress5 from './pages/Progress5';
import Progress6 from './pages/Progress6';
import Progress7 from './pages/Progress7';
import ReferensiTa1 from './pages/ReferensiTa1';
import ReferensiTa2 from './pages/ReferensiTa2';
import ReferensiTa3 from './pages/ReferensiTa3';
import Registrasi from './pages/Registrasi';
import RegistrasiDosen from './pages/RegistrasiDosen';
import Wireframe1 from './pages/Wireframe1';


const router = createBrowserRouter([
  { path: '/', element: <F12Main /> },
{ path: '/ChatDosenbelumDisetujui', element: <ChatDosenbelumDisetujui /> },
{ path: '/ChatDosendisetujui', element: <ChatDosendisetujui /> },
{ path: '/ChatMahasiswa', element: <ChatMahasiswa /> },
{ path: '/DashboardDosen', element: <DashboardDosen /> },
{ path: '/DashboardMahasiswa', element: <DashboardMahasiswa /> },
{ path: '/DetailPembatalan1', element: <DetailPembatalan1 /> },
{ path: '/DetailPembatalan2', element: <DetailPembatalan2 /> },
{ path: '/DetailPembatalan3', element: <DetailPembatalan3 /> },
{ path: '/DetailPermintaan1', element: <DetailPermintaan1 /> },
{ path: '/DetailPermintaan2', element: <DetailPermintaan2 /> },
{ path: '/DetailPermintaan3', element: <DetailPermintaan3 /> },
{ path: '/DetailPermintaan5', element: <DetailPermintaan5 /> },
{ path: '/DetailPermintaanPertemuanBelumDisetujui2', element: <DetailPermintaanPertemuanBelumDisetujui2 /> },
{ path: '/DetailPertemuanMendatangSudahDisetujui', element: <DetailPertemuanMendatangSudahDisetujui /> },
{ path: '/DetailPertemuanPermintaanBelumDisetujui1', element: <DetailPertemuanPermintaanBelumDisetujui1 /> },
{ path: '/DetailRiwayatPertemuanSelesai', element: <DetailRiwayatPertemuanSelesai /> },
{ path: '/Dikoreksi', element: <Dikoreksi /> },
{ path: '/Faq', element: <Faq /> },
{ path: '/JanjiDenganMahasiswa1', element: <JanjiDenganMahasiswa1 /> },
{ path: '/JanjiDenganMahasiswa2', element: <JanjiDenganMahasiswa2 /> },
{ path: '/ListMahasiswa1', element: <ListMahasiswa1 /> },
{ path: '/ListMahasiswa2', element: <ListMahasiswa2 /> },
{ path: '/ListMahasiswa3', element: <ListMahasiswa3 /> },
{ path: '/Login', element: <Login /> },
{ path: '/LoginDosen', element: <LoginDosen /> },
{ path: '/Mengkoreksi1', element: <Mengkoreksi1 /> },
{ path: '/Mengkoreksi2', element: <Mengkoreksi2 /> },
{ path: '/Notifikasi1', element: <Notifikasi1 /> },
{ path: '/Notifikasi2', element: <Notifikasi2 /> },
{ path: '/NotifikasiDosen', element: <NotifikasiDosen /> },
{ path: '/NotifikasiDosen1', element: <NotifikasiDosen1 /> },
{ path: '/PenerimaanPermintaan1', element: <PenerimaanPermintaan1 /> },
{ path: '/PenerimaanPermintaan2', element: <PenerimaanPermintaan2 /> },
{ path: '/PenerimaanPermintaan3', element: <PenerimaanPermintaan3 /> },
{ path: '/Penjadwalan1', element: <Penjadwalan1 /> },
{ path: '/Penjadwalan11', element: <Penjadwalan11 /> },
{ path: '/Penjadwalan2', element: <Penjadwalan2 /> },
{ path: '/Penjadwalan21', element: <Penjadwalan21 /> },
{ path: '/Penjadwalan3', element: <Penjadwalan3 /> },
{ path: '/Penjadwalan4', element: <Penjadwalan4 /> },
{ path: '/Penjadwalan5', element: <Penjadwalan5 /> },
{ path: '/Penjadwalan6', element: <Penjadwalan6 /> },
{ path: '/PertemuanSelesai', element: <PertemuanSelesai /> },
{ path: '/PertemuanSelesai1', element: <PertemuanSelesai1 /> },
{ path: '/PertemuanSelesai2', element: <PertemuanSelesai2 /> },
{ path: '/PertemuanSelesai3', element: <PertemuanSelesai3 /> },
{ path: '/ProfilDosen', element: <ProfilDosen /> },
{ path: '/ProfilMahasiswa', element: <ProfilMahasiswa /> },
{ path: '/ProfilMahasiswa1', element: <ProfilMahasiswa1 /> },
{ path: '/ProfileMahasiswaPovDosen', element: <ProfileMahasiswaPovDosen /> },
{ path: '/ProfileMahasiswaPovDosen1', element: <ProfileMahasiswaPovDosen1 /> },
{ path: '/Progress1', element: <Progress1 /> },
{ path: '/Progress3', element: <Progress3 /> },
{ path: '/Progress4', element: <Progress4 /> },
{ path: '/Progress5', element: <Progress5 /> },
{ path: '/Progress6', element: <Progress6 /> },
{ path: '/Progress7', element: <Progress7 /> },
{ path: '/ReferensiTa1', element: <ReferensiTa1 /> },
{ path: '/ReferensiTa2', element: <ReferensiTa2 /> },
{ path: '/ReferensiTa3', element: <ReferensiTa3 /> },
{ path: '/Registrasi', element: <Registrasi /> },
{ path: '/RegistrasiDosen', element: <RegistrasiDosen /> },
{ path: '/Wireframe1', element: <Wireframe1 /> },
]);

export default function App() {
  return (
    <RouterProvider router={router} />
  );
}
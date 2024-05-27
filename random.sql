SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+07:00";

-- Buat database
CREATE DATABASE IF NOT EXISTS db_pweb;
USE db_pweb;

-- Buat tabel users
CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    type ENUM('admin', 'dosen', 'mahasiswa') NOT NULL,
    remember_token VARCHAR(255),
    email_verified_at DATETIME,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);


-- Buat tabel notifications
CREATE TABLE IF NOT EXISTS notifications (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    message TEXT NOT NULL,
    is_read BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

-- Buat tabel profile
CREATE TABLE IF NOT EXISTS profile (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    photo VARCHAR(255),
    nim VARCHAR(50),
    thesis_title VARCHAR(255),
    advisor VARCHAR(100),
    faculty VARCHAR(100),
    department VARCHAR(100),
    study_program VARCHAR(100),
    semester ENUM('1', '2', '3', '4', '5', '6', '7', '8'),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

-- Contoh data untuk tabel users
INSERT INTO users (name, email, password, type)
VALUES ('Admin User', 'admin@unand.ac.id', 'hashed_password', 'admin'),
       ('Dosen User', 'dosen@unand.ac.id', 'hashed_password', 'dosen'),
       ('Mahasiswa User', 'mahasiswa@unand.ac.id', 'hashed_password', 'mahasiswa');


-- Contoh data untuk tabel notifications
INSERT INTO notifications (user_id, message)
VALUES (3, 'Pengumuman: Jadwal Ujian telah diumumkan.'),
       (3, 'Reminder: Harap mengisi KRS.');

-- Contoh data untuk tabel profile
INSERT INTO profile (user_id, photo, nim, thesis_title, advisor, faculty, department, study_program, semester)
VALUES (3, 'path/to/photo.jpg', '2011523007', 'Sistem Informasi Akademik', 'Dr. Dosen Pembimbing', 'Teknik', 'Informatika', 'S1 Informatika', '8');

INSERT INTO progress ('user_id', 'progress_date', 'progress_description', 'status', `created_at`, `updated_at`)
VALUES (3, '2023-05-01', 'Menyelesaikan Bab 1', 'Completed', '2022-06-12 12:28:36', '2022-06-12 12:28:36'),
       (3, '2023-06-01', 'Menyelesaikan Bab 2', 'Completed'),
       (3, '2023-07-01', 'Menyelesaikan Bab 3', 'In Progress');

-- Struktur dari tabel `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `type` enum('M','D','T') COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `email_verified_at`, `password`, `remember_token`, `type`, `created_at`, `updated_at`) VALUES
(1, 'admin', 'admin@unand.ac.id', '2022-06-27 20:29:36', '$2b$10$0QNzlWWdSwTVJP0NZIKTGeRcpxSm0p0k5l1pLt8kC502LlJuac8Gu', NULL, 'T', NULL, '2022-06-27 20:46:26'),
(2, 'Husnil Kamil', '198201182008121002@unand.ac.id', '2022-06-27 21:05:07', '$2b$10$5roDRuCOTXkzIi4btl/kueyiMfoma/G2L862SxpISNmGi/BixaoBC', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwidHlwZSI6IkQiLCJpYXQiOjE2NTYzNjM5MDcsImV4cCI6MTY1NjY', 'D', '2022-03-25 00:43:20', '2022-06-27 20:46:14'),
(3, 'Hasdi Putra', '198307272008121003@unand.ac.id', '2022-06-27 16:23:07', '$2b$10$5roDRuCOTXkzIi4btl/kueyiMfoma/G2L862SxpISNmGi/BixaoBC', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywidHlwZSI6IkQiLCJpYXQiOjE2NTYzNDY5ODcsImV4cCI6MTY1NjY', 'D', '2022-03-25 00:43:20', '2022-03-25 00:43:20'),
(4, 'Fajril Akbar', '198001102008121002@unand.ac.id', NULL, '12345', NULL, 'D', '2022-03-25 00:43:20', '2022-03-25 00:43:20'),
(5, 'Surya Afnarius', '196404091995121001@unand.ac.id', NULL, '12345', NULL, 'D', '2022-03-25 00:43:20', '2022-03-25 00:43:20'),
(6, 'Meza Silvana', '198103252008122003@unand.ac.id', NULL, '12345', NULL, 'D', '2022-03-25 00:43:20', '2022-03-25 00:43:20'),
(7, 'Ricky Akbar', '198410062012121001@unand.ac.id', NULL, '12345', NULL, 'D', '2022-03-25 00:43:20', '2022-03-25 00:43:20'),
(8, 'Haris Suryamen', '197503232012121001@unand.ac.id', NULL, '12345', NULL, 'D', '2022-03-25 00:43:20', '2022-03-25 00:43:20'),
(9, 'Wahyudi', '198105052014041001@unand.ac.id', NULL, '12345', NULL, 'D', '2022-03-25 00:43:20', '2022-03-25 00:43:20'),
(547, 'Alizar Hasan', '195312181980031002@unand.ac.id', NULL, '12345', NULL, 'D', '2022-03-25 00:43:20', '2022-03-25 00:43:20'),
(548, 'Syafii', '197405051998021001@unand.ac.id', NULL, '12345', NULL, 'D', '2022-03-25 00:43:20', '2022-03-25 00:43:20'),
(550, 'Hafid Yoza Putra', '1308051406930001@unand.ac.id', NULL, '12345', NULL, 'D', '2022-03-25 00:43:20', '2022-03-25 00:43:20'),
(551, 'Rahmatika Pratama Santi', '1371085508930003@unand.ac.id', NULL, '12345', NULL, 'D', '2022-03-25 00:43:20', '2022-03-25 00:43:20'),
(552, 'Difana Meilani', '198005252005012005@unand.ac.id', NULL, '12345', NULL, 'D', '2022-03-25 00:43:20', '2022-03-25 00:43:20'),
(553, 'Darwison', '196409141995121001@unand.ac.id', NULL, '12345', NULL, 'D', '2022-03-25 00:43:20', '2022-03-25 00:43:20'),
(554, 'Rahmat Hidayat', '197804152000121002@unand.ac.id', NULL, '12345', NULL, 'D', '2022-03-25 00:43:20', '2022-03-25 00:43:20'),
(555, 'Darmawan', '197708162005011002@unand.ac.id', NULL, '12345', NULL, 'D', '2022-03-25 00:43:20', '2022-03-25 00:43:20'),
(559, 'Jefril Rahmadoni', '198904152019031009@unand.ac.id', NULL, '12345', NULL, 'D', '2022-03-25 00:43:20', '2022-03-25 00:43:20'),
(560, 'Afriyanti Dwi Kartika', '198904212019032024@unand.ac.id', NULL, '12345', NULL, 'D', '2022-03-25 00:43:20', '2022-03-25 00:43:20'),
(561, 'Ullya Mega Wahyuni', '199011032019032008@unand.ac.id', NULL, '12345', NULL, 'D', '2022-03-25 00:43:20', '2022-03-25 00:43:20'),
(562, 'Dwi Welly Sukma Nirad', '199108122019032018@unand.ac.id', NULL, '12345', NULL, 'D', '2022-03-25 00:43:20', '2022-03-25 00:43:20'),
(563, 'Adi Arga Arifnur', '199208202019031005@unand.ac.id', NULL, '12345', NULL, 'D', '2022-03-25 00:43:20', '2022-03-25 00:43:20'),
(564, 'Hafizah Hanim', '199309292019032022@unand.ac.id', NULL, '12345', NULL, 'D', '2022-03-25 00:43:20', '2022-03-25 00:43:20');

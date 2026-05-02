# Authentication & Authorization React Native App

## Informasi Mahasiswa

- Nama : Muhammad Prayogo Pangestu
- Nim : 2410501046
- Kelas : B

## Tech Stack

- React Native
- Expo
- Firebase Authentication
- React Navigation
- AsyncStorage
- Expo Secure Store
- Expo Local Authentication

## Fitur Utama

### Authentication

- Daftar akun baru
- Login menggunakan email dan password
- Logout dari aplikasi
- Tetap login saat aplikasi dibuka kembali

### Authorization

- Halaman login untuk user yang belum masuk
- Halaman utama hanya untuk user yang sudah login

### Security

- Email verification
- Reset password via email
- Login dengan fingerprint / biometric
- Auto logout setelah 5 menit idle

### Catatan

Email verifikasi dan reset password dari Firebase kadang masuk ke folder Spam Gmail.

## Cara Install dan Run

- clone project
- Firebase Configuration
  Buat file .env di root project:

  ```bash
  EXPO_PUBLIC_FIREBASE_API_KEY=your_key
  EXPO_PUBLIC_FIREBASE_AUTH_DOMAIN=your_domain
  EXPO_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
  EXPO_PUBLIC_FIREBASE_STORAGE_BUCKET=your_bucket
  EXPO_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
  EXPO_PUBLIC_FIREBASE_APP_ID=your_app_id

  ```

- npm install
- npx expo start

## Tugas Mandiri

Nomor 3 - Auto Logout setelah 5 menit idle.

Fitur ini dibuat menggunakan:

1. AppState untuk mendeteksi aplikasi sedang aktif atau di background.
2. Pengecekan waktu idle menghitung lama aplikasi tidak digunakan.
3. Firebase signOut() logout otomatis ketika waktu idle sudah 5 menit.

Jika user buka aplikasi lagi setelah 5 menit, maka akan diarahkan ke halaman login.

## Link Vidio demo

https://drive.google.com/file/d/1VwRzgy-RH2OyaXF008bm6mre2KG3OAUs/view?usp=drivesdk

https://youtube.com/shorts/BzeQXBzVlmI?si=ZBF36reQ313zmTka

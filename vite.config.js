import react from '@vitejs/plugin-react'

export default {
  plugins: [react()],
  server: {
    proxy: {
      '/api': 'https://bios-updater-backend.onrender.com',
    },
  },
}

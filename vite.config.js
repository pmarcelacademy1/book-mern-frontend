import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
    plugins: [react()],
    server: {
        port: 5173,
        proxy: {
            '/api': {
                target: 'https://book-mern-backend.onrender.com',
                changeOrigin: true,
                secure: true,
            },
        },
    },
});
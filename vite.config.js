import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [
    react({
      include: [/\.js$/, /\.jsx$/], // Explicitly handle both .js and .jsx files
    })
  ]
});

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
    plugins: [
        tsconfigPaths(),
        react({
            jsxImportSource: '@emotion/react',
            babel: {
                plugins: [['@emotion', { sourceMap: true, autoLabel: 'dev-only' }]],
            },
        }),
    ],
    resolve: {
        dedupe: ['react', 'react-dom', 'recoil', '@emotion/react', '@emotion/styled'],
    }
})
import { FileSystemIconLoader } from '@iconify/utils/lib/loader/node-loaders'
import { createLocalFontProcessor } from '@unocss/preset-web-fonts/local'

import {
  defineConfig,
  presetIcons,
  presetWebFonts,
  presetWind3,
} from 'unocss'

export default defineConfig({
  presets: [
    presetWind3({
      preflight: true,
    }),
    presetWebFonts({
      provider: 'google', // default provider
      fonts: {
        // these will extend the default theme
        sans: 'Source Sans 3:400,500,700',
      },
      processors: createLocalFontProcessor({
        // Directory to cache the fonts
        cacheDir: 'node_modules/.cache/unocss/fonts',
        // Directory to save the fonts assets
        fontAssetsDir: 'public/assets/fonts',
        // Base URL to serve the fonts from the client
        fontServeBaseUrl: '/assets/fonts',
      }),
    }),
    presetIcons({
      collections: {
        custom: FileSystemIconLoader(
          './assets/icons',
        ),
      },
    }),
  ],
})

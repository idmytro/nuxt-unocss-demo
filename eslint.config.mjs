import antfu from '@antfu/eslint-config'
import unocss from '@unocss/eslint-config/flat'

// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
  antfu(
  // {
  //   unocss: true,
  //   formatters: true,
  // },
    unocss,
    {
      rules: {
      // Allow trailing space in comments, for possible JSDoc formattings
        'style/no-trailing-spaces': ['error', { ignoreComments: true }],
      },
    },
    // Allow trailing space for markdown formatting
    {
      files: ['**/*.md'],
      rules: {
        'style/no-trailing-spaces': 'off',
      },
    },
  ),
)

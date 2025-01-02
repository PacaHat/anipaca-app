import type { DefaultTheme } from 'vitepress'

const nav: DefaultTheme.NavItem[] = [
  {
    text: 'Get app',
    activeMatch: '^/*?(download|changelogs)/*?$',
    items: [
      {
        text: 'Download',
        link: 'https://github.com/PacaHat/anipaca-app/releases/download/',
      },
    ],
  },
]

export default nav

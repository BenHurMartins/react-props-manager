type Link = {
  type: string
  value: string
}
export type LinkManagedProps = {
  links: Link[]
}
export type ContainerManagedProps = {
  title: string
  description: string
  backgroundColor: string
}

export const values = {
  home: {
    title: 'Home Page',
    description: 'Subtitle of home page',
    backgroundColor: '#339989'
  },
  about: {
    title: 'About Us',
    description: 'Subtitle of about us',
    backgroundColor: '#1F487E'
  },
  docs: {
    title: 'Docs',
    description: 'Subtitle of docs',
    backgroundColor: '#FB3640'
  },
  docLinks: {
    links: [
      {
        type: 'github',
        value: 'https://github.com/BenHurMartins/react-props-manager'
      },
      {
        type: 'npm',
        value: 'https://www.npmjs.com/package/react-props-manager'
      }
    ]
  }
}

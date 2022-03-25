# react-props-manager

> Manage your props in a single space

[![NPM](https://img.shields.io/npm/v/react-props-manager.svg)](https://www.npmjs.com/package/react-props-manager) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

This library intends to be an easy way to control props in components that are often used, or can have multiple props. Getting your props inside your component can keep you code cleaner and easier to read. This pattern is based on a Redux model, but simpler to use and props focused.

## Install

```bash
npm install --save react-props-manager
```

## Usage

### Create the props constant

It must be an object and each node key on root level is a collection of props that will be acessible by a component. The props can be any value or type and can have as many properties as we want.

```tsx
const propsValue = {
  home: {
    title: 'Home Page',
    subtitle: 'Subtitle of home page',
    backgroundColor: '#339989'
  },
  about: {
    title: 'About Us',
    subtitle: 'Subtitle of about us',
    backgroundColor: '#1F487E'
  },
  docs: {
    title: 'Docs',
    subtitle: 'Subtitle of docs',
    backgroundColor: '#FB3640'
  }
}
```

### Wrap your app with the Provider

On the root of your project, wrap your app content with the provider and pass your props to it.

```tsx
import React from 'react'
import { PropsManagerProvider } from 'react-props-manager'

const App = () => {
  return (
    <div style={{ flex: 1, width: '100%', height: '100%' }}>
      <PropsManagerProvider propsValue={propsValue}>
        <HeaderMenu />
        <Switch>
          <Route path='/home' component={Home} />
          <Route path='/about' component={AboutUs} />
          <Route path='/docs' component={Docs} />
        </Switch>
      </PropsManagerProvider>
    </div>
  )
}
```

### Get your props in any component passing the key value

Use the hook `usePropsContext` to retrieve `getProps` function, with `getProps` we can recover our props object, and if needed as in the exemple bellow, we can type the returned object, case the `id` passed didn't match any props it will return an empty object.

```tsx
import React from 'react'
import { usePropsContext } from 'react-props-manager'

type ManagedProps = {
  title: string
  description: string
  backgroundColor: string
}

const Container: React.FC<ContainerProps> = ({ children, id }) => {
  const { getProps } = usePropsContext()
  const { backgroundColor, description, title } = getProps(id) as ManagedProps

  return (
    <div style={{ ...styles.container, backgroundColor: backgroundColor }}>
      <div style={styles.contentContainer}>
        <h1>{title}</h1>
        <p>{description}</p>
        {children}
      </div>
    </div>
  )
}
```

## Contributions

In order to contribute with this project, fork the repo, create a new branch and fill all relevant information about your PR in the PR description. Feel free to address any possible bug or improvement and send us a pull request.

## License

MIT © [BenHurMartins](https://github.com/BenHurMartins)

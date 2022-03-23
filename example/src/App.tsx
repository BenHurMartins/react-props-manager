import React from 'react'

import { PropsManagerProvider } from 'react-props-manager'
import { Route, Switch } from 'react-router-dom'
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import Docs from './pages/Docs'
import HeaderMenu from './components/HeaderMenu'

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

export default App

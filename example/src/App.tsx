import React from 'react'

import { PropsManagerProvider } from 'react-props-manager'
import { Route, Switch } from 'react-router-dom'
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import Docs from './pages/Docs'
import HeaderMenu from './components/HeaderMenu'
import { values } from './props'

const App = () => {
  return (
    <PropsManagerProvider propsValue={values}>
      <HeaderMenu />
      <Switch>
        <Route path='/home' component={Home} />
        <Route path='/about' component={AboutUs} />
        <Route path='/docs' component={Docs} />
      </Switch>
    </PropsManagerProvider>
  )
}

export default App

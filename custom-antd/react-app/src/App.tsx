import React from 'react'

import './App.scss'

import 'custom-antd-libs/dist/esm/index.css'
import { MyButton } from './components/MyButton'
import { MySwitch } from './components/MySwitch'

export const App = () => {
  return (
    <div className={'div-app1'}>
      <h1 className={'cabecalho1'}>
        React TypeScript Webpack Starter Template
      </h1>
      <MyButton />
      <MySwitch />
    </div>
  )
}

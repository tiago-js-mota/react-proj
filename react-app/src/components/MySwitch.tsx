import React from 'react'
import { SwitchButton } from 'custom-antd-libs'

export const MySwitch = () => {
  return (
    <div>
      {/* eslint-disable-next-line react/jsx-key */}
      <h3>CBE - Switch </h3>
      {/* eslint-disable-next-line react/jsx-key */}
      <SwitchButton checkedChildren="On" unCheckedChildren="Off" />
    </div>
  )
}

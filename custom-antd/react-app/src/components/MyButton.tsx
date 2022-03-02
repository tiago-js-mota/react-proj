import React from 'react'
import { Button } from 'custom-antd-libs'

export const MyButton = () => {
  return (
    <div>
      {/* eslint-disable-next-line react/jsx-key */}
      <h3>CBE - Button</h3>
      {/* eslint-disable-next-line react/jsx-key */}
      <Button actionType={'warning'} label={'Warning'} />
    </div>
  )
}

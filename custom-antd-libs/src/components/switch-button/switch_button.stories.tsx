const React = require('react')

import { Story, Meta } from '@storybook/react'

import SwitchButton from './switch-button'
import { ISwitchButton } from './i-switch-button'

export default {
    title: 'CBE/SwitchButton',
    component: SwitchButton,
} as Meta

const Template: Story<ISwitchButton> = (args) => <SwitchButton {...args} />

export const Default = Template.bind({})
Default.args = {
    shape: 'round',
    defaultChecked: false,
    labelName: 'teste',
    labelPositioning: 'left',
    disabled: false,
    size: 'default',
    checkedChildren: 'On',
    unCheckedChildren: 'Off',
}

export const Small = Template.bind({})
Small.args = {
    defaultChecked: true,
    labelName: 'teste',
    labelPositioning: 'bottom',
    disabled: false,
    size: 'small',
    checkedChildren: 'On',
    unCheckedChildren: 'Off',
}

export const Square = Template.bind({})
Square.args = {
    shape: 'square',
    defaultChecked: true,
    checkedChildren: 'On',
    unCheckedChildren: 'Off',
}
export const Round = Template.bind({})
Round.args = {
    defaultChecked: true,
    checkedChildren: 'On',
    unCheckedChildren: 'Off',
}
export const Disable = Template.bind({})
Disable.args = {
    disabled: true,
    checkedChildren: 'On',
    unCheckedChildren: 'Off',
}

export const SimpleSwitch = Template.bind({})
SimpleSwitch.args = {
    checkedChildren: 'On',
    unCheckedChildren: 'Off',
}

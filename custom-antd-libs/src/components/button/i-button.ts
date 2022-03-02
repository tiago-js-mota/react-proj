import React from 'react'

export type IButton = {
    type?: 'button' | 'submit' | 'reset'
    /**
     * Action Types
     */
    actionType?:
        | 'default'
        | 'primary'
        | 'success'
        | 'info'
        | 'warning'
        | 'danger'
    /**
     * Show Loading
     */
    loading?: boolean
    /**
     * Show Loading
     */
    disabled?: boolean
    /**
     * What background color to use
     */
    backgroundColor?: string
    /**
     * How large should the button be?
     */
    size?: 'normal' | 'small' | 'mini'
    /**
     * Button contents
     */
    label?: string
    /**
     * Optional click handler
     */
    onClick?: () => void
    /**
     * Optional Icon
     */
    icon?: React.ReactNode
    /**
     * Optional position, if top or bottom button become a square button
     */
    iconPosition?: 'top' | 'right' | 'bottom' | 'left' | undefined
    /**
     * Optional Icon
     */
    block?: boolean
    /**
     * Optional children
     */
    children?: React.ReactNode
}

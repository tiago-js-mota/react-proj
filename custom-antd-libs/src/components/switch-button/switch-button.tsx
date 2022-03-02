import React, { useState, forwardRef, useEffect, useRef } from 'react'
import ReactDOM from 'react-dom'
import { v4 as uuid } from 'uuid'
import { Switch } from 'antd'

import 'antd/dist/antd.css'
import { ISwitchButton } from './i-switch-button'
import '../../assets/styles/base.css'
import styles from './switch-button.scss'
import { BaseController } from '../base-controller/base-controller'

const SwitchButton = forwardRef<HTMLElement, ISwitchButton>(
    (
        {
            shape = 'round',
            customStyle,
            customClass,
            labelId = '',
            labelName,
            labelPositioning = 'top',
            disabled = false,
            locked = false,
            size = 'default',
            checkedChildren,
            unCheckedChildren,
            defaultChecked,
            standAlone = false,
            ...props
        },
        forwardedRef
    ) => {
        const baseRef = useRef<HTMLDivElement | any>()
        const htmlForId = labelId ? labelId : uuid()

        const [value, setValue] = useState<boolean>(defaultChecked || false)

        /* Ant Design doesn't have text inside the toogle button
           This UseEffect is used to add this functionality
         */
        useEffect(() => {
            let el = baseRef.current
            el = el.querySelector('.ant-switch-handle')
            const buttonLabel = value ? checkedChildren : unCheckedChildren
            ReactDOM.render(
                <span className={styles['showOnButtonContent']}>
                    {size !== 'small' && buttonLabel}
                </span>,
                el
            )
        }, [value, checkedChildren, unCheckedChildren, size])

        const handleOnChange = () => {
            setValue(!value)
        }

        /**
         * To be applied on situations that BaseController is not required such as ValidationToggler
         *
         * @returns {void}
         */
        const renderStandAloneSwitch = () => {
            return (
                <Switch
                    ref={forwardedRef}
                    checkedChildren={size !== 'small' && unCheckedChildren}
                    unCheckedChildren={size !== 'small' && checkedChildren}
                    size={size}
                    disabled={disabled}
                    checked={value}
                    onChange={handleOnChange}
                    style={customStyle}
                    className={`
                        ${styles[shape]} 
                        ${customClass ? customClass?.join(' ') : ''}
                    `}
                    {...props}
                />
            )
        }

        /**
         * To be applied on situations that is required/or not BaseController
         *
         * @returns {void}
         */
        const renderBaseControllerSwitch = () => {
            return (
                <BaseController
                    ref={baseRef}
                    labelId={htmlForId}
                    labelName={labelName}
                    labelPositioning={labelPositioning}
                    disabled={disabled}
                    locked={locked}
                >
                    {renderStandAloneSwitch()}
                </BaseController>
            )
        }

        return standAlone ? (
            <div ref={baseRef}>{renderStandAloneSwitch()}</div>
        ) : (
            renderBaseControllerSwitch()
        )
    }
)
SwitchButton.displayName = 'SwitchButton'
export default SwitchButton

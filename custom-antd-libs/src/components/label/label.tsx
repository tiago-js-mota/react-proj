import React, { FC } from 'react'
import { ILabel } from './i-label'
import '../../assets/styles/base.css'
import styles from './label.scss'

const Label: FC<ILabel> = ({
    labelId,
    labelName,
    labelPositioning = 'top',
    children,
    disabled = false,
}) => {
    return (
        <label
            htmlFor={labelId}
            className={[
                // styles['label'],
                labelPositioning
                    ? `${styles[`label-position-${labelPositioning}`]}`
                    : '',
                disabled ? `${styles['disabled']}` : '',
            ].join(' ')}
        >
            {labelName}
            {children}
        </label>
    )
}
export default Label

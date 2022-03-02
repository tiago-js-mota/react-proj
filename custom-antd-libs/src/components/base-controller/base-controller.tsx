import React, { forwardRef } from 'react'
import Label from '../label/label'
import { IBaseController } from './i-base-controller'
import styles from './base-controler.scss'

export const BaseController = forwardRef<HTMLDivElement, IBaseController>(
    (
        {
            children,
            labelId = '',
            labelName,
            labelPositioning = 'top',
            labelChildren,
            disabled = false,
            locked = false,
            customClass,
            isVisible = true,
            ...rest
        },
        baseRef
    ) => {
        const renderLabelChildren = () => {
            return (
                <div className={styles['label-children']}>{labelChildren}</div>
            )
        }

        return (
            <div
                ref={baseRef}
                className={[
                    styles['input-wrapper'],
                    styles[`input-wrapper-position-${labelPositioning}`],
                    disabled ? styles.disabled : '',
                    locked ? styles.locked : '',
                    isVisible ? '' : 'd-hidden',
                    customClass ? customClass.join(' ') : '',
                ].join(' ')}
                {...rest}
            >
                <Label
                    labelId={labelId}
                    labelName={labelName}
                    labelPositioning={labelPositioning}
                    disabled={disabled}
                >
                    <div
                        className={[styles['label-children-container']].join(
                            ' '
                        )}
                    >
                        {labelChildren && renderLabelChildren()}
                    </div>
                </Label>
                {children}
            </div>
        )
    }
)

BaseController.displayName = 'BaseController'

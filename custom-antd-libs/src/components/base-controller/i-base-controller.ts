import { CSSProperties, ReactNode } from 'react'

import { ILabel } from '../label/i-label'

// !!! ID and NAME are an mandatory props
export interface IBaseController extends ILabel {
    children?: ReactNode
    labelChildren?: ReactNode
    customStyle?: CSSProperties
    customClass?: string[]
    isVisible?: boolean

    locked?: boolean

    // child ID and NAME for Controls such Input / Combo / Checkable / Radio / etc.
    controlId?: string | undefined
    controlName?: string | undefined
}

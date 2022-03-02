import { ILabel } from '../label/i-label'
import { SwitchProps } from 'antd/lib/switch'
import { IBaseController } from '../base-controller/i-base-controller'

export interface IToggleButton extends ILabel, SwitchProps {
    shape?: 'round' | 'square'
    standAlone?: boolean
    // block?: boolean
    // onBackgroundColor?: string
    // onTextColor?: string
    // offBackgroundColor?: string
    // offTextColor?: string
}

export interface ISwitchButton extends IToggleButton, IBaseController {}

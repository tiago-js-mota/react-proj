export interface ILabel {
    /**
     * Optional id, used with for attribute
     */
    labelId?: string | undefined
    /**
     * Optional label text
     */
    labelName?: string | undefined
    /**
     * Optional label positioning
     */
    labelPositioning?: 'top' | 'right' | 'bottom' | 'left'

    styled?: 'normal' | 'inline'

    disabled?: boolean
}

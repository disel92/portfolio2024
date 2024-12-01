

type FontPropsType = {
    family?: string
    weight?: number
    color?: string
    lineHeight?: number
}

export const font = ({family, weight, color, lineHeight}: FontPropsType) =>`
    font-family: &{family || 'Poppins'};
    
`
    

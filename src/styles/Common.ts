import {theme} from "./Theme";


type FontPropsType = {
    color?: string
    fMax?: number
    fMin?: number
    family?: string
    lineHeight?: number
    weight?: number
}

export const font = ({family, weight, color, lineHeight, fMin, fMax}: FontPropsType) =>`
    font-family: ${family || "Poppins"};
    font-weight: ${weight || 400};
    color: ${color || theme.colors.font};
    line-height: ${lineHeight || 1.2};
    font-size: calc( (100vw - 360px)/(1440 - 360) * (${fMax} - ${fMin}) + ${fMin}px);
`
    

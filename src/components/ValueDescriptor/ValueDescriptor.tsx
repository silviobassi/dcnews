import * as VD from './ValueDescriptor.styles'

export interface ValueDescriptorProps {
    description: string
    value: number
    isCurrency?: boolean
    variant: 'primary' | 'default'
}

export default function ValueDescriptor( {variant, ...props}: ValueDescriptorProps) {
    return <VD.Wrapper variant={variant}>
        <span className="Description">{props.description}:</span>
        <div>
            {
                props.isCurrency &&
                <span className="Currency">
                    {'R$'}
                </span>
            }

            <span className="Value">{props.value.toLocaleString('pt-br')}</span>
        </div>
    </VD.Wrapper>
}
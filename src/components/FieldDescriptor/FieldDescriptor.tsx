import * as FD from './FieldDescriptor.styles'

export interface FieldDescriptorProps {
    field: string,
    description: string
}

export default function FieldDescriptor({ field, description }: FieldDescriptorProps) {
    return <FD.Wrapper>
        <span className="Field">{field}:</span>
        <p className="Description">{description}</p>
    </FD.Wrapper>
}


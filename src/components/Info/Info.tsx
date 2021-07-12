import Icon from '@mdi/react'
import { mdiInformation } from '@mdi/js'
import Paragraph from '../Typography/Paragraph'
import * as I from './Info.styles'

export interface InfoProps {
    title: string,
    description: string
}

export default function Info({ title, description }: InfoProps) {
    return <I.InfoWrapper>
        <I.InfoIconWrapper>
            <Icon 
                path={ mdiInformation }
                size="40px"
                color="#0099FF"
            />
        </I.InfoIconWrapper>
        <I.InfoContentWrapper>
            <I.InfoTitle>{title}</I.InfoTitle>
            <Paragraph children={description}></Paragraph>
        </I.InfoContentWrapper>
    </I.InfoWrapper>
}
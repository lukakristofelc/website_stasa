import React from 'react'
import { Button } from '../ButtonElement'
import { 
    Column2, 
    Img, 
    ImgWrap, 
    InfoContainer, 
    InfoWrapper, 
    InfoRow, 
    Column1, 
    TextWrapper, 
    TopLine, 
    Heading, 
    Subtitle, 
    BtnWrap 
} from './InfoElements'

const InfoSection = (data) => {
    console.log(data);
    
    return (
        <>
            <InfoContainer lightBg={data.lightBg} id = {data.id}>
                <InfoWrapper>
                    <InfoRow imgStart={data.imgStart}>
                        <Column1>
                            <TextWrapper>
                                <TopLine>{data.topLine}</TopLine>
                                <Heading lightText={data.lightText}>{data.headline}</Heading>
                                <Subtitle darkText={data.darkText}>{data.description}</Subtitle>
                                <BtnWrap>
                                    <Button to='home' 
                                    smooth={true}
                                    duration={500}
                                    spy={true}
                                    exact="true"
                                    offset={-80}
                                    primary={data.primary ? 1 : 0}
                                    dark={data.dark ? 1 : 0}
                                    dark2={data.dark2 ? 1 : 0}
                                    >{data.buttonLabel}</Button>
                                </BtnWrap>
                            </TextWrapper>
                        </Column1>
                        <Column2>
                            <ImgWrap>
                                <Img src={data.img.default} alt={data.alt} />
                            </ImgWrap>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
        </>
    )
}

export default InfoSection

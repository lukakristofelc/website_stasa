import React from 'react'
import Icon1 from '../../images/svg-5.svg'
import Icon2 from '../../images/svg-5.svg'
import Icon3 from '../../images/svg-5.svg'
import { 
    GalleryContainer, 
    GalleryH1, 
    GalleryWrapper, 
    GalleryCard, 
    GalleryIcon, 
    GalleryH2, 
    GalleryP } 
from './GalleryElements'

const Gallery = () => {
    return (
        <GalleryContainer>
            <GalleryH1>SAMPLE TITLE</GalleryH1>
            <GalleryWrapper>
                <GalleryCard>
                    <GalleryIcon src={Icon1} />
                    <GalleryH2>SAMPLE SUBTITLE 1</GalleryH2>
                    <GalleryP>SAMPLE SAMPLE SAMPLE SAMPLE SAMPLE SAMPLE</GalleryP>
                </GalleryCard>
                <GalleryCard>
                    <GalleryIcon src={Icon2} />
                    <GalleryH2>SAMPLE SUBTITLE 2</GalleryH2>
                    <GalleryP>SAMPLE SAMPLE SAMPLE SAMPLE SAMPLE SAMPLE</GalleryP>
                </GalleryCard>
                <GalleryCard>
                    <GalleryIcon src={Icon3} />
                    <GalleryH2>SAMPLE SUBTITLE 3</GalleryH2>
                    <GalleryP>SAMPLE SAMPLE SAMPLE SAMPLE SAMPLE SAMPLE</GalleryP>
                </GalleryCard>
            </GalleryWrapper>
        </GalleryContainer>
    )
}

export default Gallery



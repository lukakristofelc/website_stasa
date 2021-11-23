import React, {useState} from 'react'
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper } from './HeroElements'
import Video from '../../videos/video.mp4'
import { Button } from '../ButtonElement'
const HeroSection = () => {

    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover);
    }

    return (
        <HeroContainer id='home'>
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
            </HeroBg>
            <HeroContent>
                <HeroH1>placeholder_title</HeroH1>
                <HeroP>
                    placeholder_text
                </HeroP>
                <HeroBtnWrapper>
                    <Button to="placeholder" onMouseEnter={onHover} onMouseLeave={onHover}>
                        placeholder_btn
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection

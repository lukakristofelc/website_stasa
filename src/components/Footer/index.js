import React from 'react'
import {FaFacebook, FaLinkedin, FaTwitter} from 'react-icons/fa'
import { 
    FooterContainer, 
    FooterWrap, 
    FooterLinksContainer, 
    FooterLinksWrapper, 
    FooterLinkItems, 
    FooterLinkTitle, 
    FooterLink,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    SocialIcons,
    SocialIconLink} 
from './FooterElements'

const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>FOOT TITLE</FooterLinkTitle>
                            <FooterLink to="/">Link</FooterLink>
                            <FooterLink to="/">Link</FooterLink>
                            <FooterLink to="/">Link</FooterLink>
                            <FooterLink to="/">Link</FooterLink>
                            <FooterLink to="/">Link</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>FOOT TITLE</FooterLinkTitle>
                            <FooterLink to="/">Link</FooterLink>
                            <FooterLink to="/">Link</FooterLink>
                            <FooterLink to="/">Link</FooterLink>
                            <FooterLink to="/">Link</FooterLink>
                            <FooterLink to="/">Link</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>FOOT TITLE</FooterLinkTitle>
                            <FooterLink to="/">Link</FooterLink>
                            <FooterLink to="/">Link</FooterLink>
                            <FooterLink to="/">Link</FooterLink>
                            <FooterLink to="/">Link</FooterLink>
                            <FooterLink to="/">Link</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>FOOT TITLE</FooterLinkTitle>
                            <FooterLink to="/">Link</FooterLink>
                            <FooterLink to="/">Link</FooterLink>
                            <FooterLink to="/">Link</FooterLink>
                            <FooterLink to="/">Link</FooterLink>
                            <FooterLink to="/">Link</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to='/'>
                            logo_placeholder
                        </SocialLogo>
                        <SocialIcons>
                            <SocialIconLink href='/' target='_blank' aaria-label="FaceBook">
                                <FaFacebook />
                            </SocialIconLink>
                            <SocialIconLink href='/' target='_blank' aaria-label="Linkedin">
                                <FaLinkedin />
                            </SocialIconLink>
                            <SocialIconLink href='/' target='_blank' aaria-label="Twitter">
                                <FaTwitter />
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer

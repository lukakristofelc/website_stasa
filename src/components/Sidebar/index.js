import React from 'react'
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink} from './SidebarElements'

function Sidebar({ isOpen, toggle }) {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to='section1' onClick={toggle}>section_1</SidebarLink>
                    <SidebarLink to='section2' onClick={toggle}>section_2</SidebarLink>
                    <SidebarLink to='section3' onClick={toggle}>section_3</SidebarLink>
                    <SidebarLink to='section4' onClick={toggle}>section_4</SidebarLink>
                </SidebarMenu>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar

import React, { ReactElement } from 'react';
import { Toolbar } from '@material-ui/core';
// import MenuIcon from '@material-ui/icons/Menu';

import { PageContainer } from '../../../components';
import { StyledAppBar, StyledLink, StyledNavLink } from './header.styled';
import Logo from '../../../images/WhiteLogo.svg';

export function Header(): ReactElement {
    return (
        <StyledAppBar position="static">
            <PageContainer disableMargin>
                <Toolbar disableGutters>
                    <StyledLink href="https://mapaction.org/">
                        <Logo width="150" height="54" />
                    </StyledLink>
                    <nav>
                        <StyledNavLink to="/">Examples</StyledNavLink>
                    </nav>
                    {/* <IconButton edge="start" color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton> */}
                </Toolbar>
            </PageContainer>
        </StyledAppBar>
    );
}

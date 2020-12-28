import styled from 'styled-components';
import { Link } from 'gatsby';
import { AppBar, Link as MILink } from '@material-ui/core';

export const StyledAppBar = styled(AppBar)`
    padding-top: ${({ theme }) => theme.spacing(2)}px;
    padding-bottom: ${({ theme }) => theme.spacing(2)}px;
`;

export const StyledLink = styled(MILink)`
    flex-grow: 1;
`;

export const StyledNavLink = styled(Link)`
    color: ${({ theme }) => theme.palette.grey['50']};
`;

import styled from 'styled-components';
import { Container } from '@material-ui/core';

import { TStyledPageContainer } from './page-container.types';

export const StyledPageContainer = styled(Container)<TStyledPageContainer>`
    margin: ${({ theme, disableMargin }) =>
            disableMargin ? undefined : theme.spacing(4)}px
        auto;

    @media screen and (min-width: ${({ theme }) =>
            `${theme.breakpoints.values.sm}px`}) {
        padding-right: ${({ theme }) => theme.spacing(3)}px;
        padding-left: ${({ theme }) => theme.spacing(3)}px;
    }

    @media screen and (min-width: ${({ theme }) =>
            `${theme.breakpoints.values.md}px`}) {
        max-width: 1200px;
    }
`;

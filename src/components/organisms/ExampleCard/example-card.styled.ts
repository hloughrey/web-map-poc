import styled from 'styled-components';
import { Card, CardContent } from '@material-ui/core';

export const StyledCard = styled(Card)`
    display: flex;
    margin-bottom: ${({ theme }) => theme.spacing(3)}px;
    padding: ${({ theme }) => theme.spacing(2)}px;
`;

export const StyledCardContent = styled(CardContent)`
    padding: 0;
`;

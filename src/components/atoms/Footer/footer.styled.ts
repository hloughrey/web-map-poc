import styled from 'styled-components';

export const StyledFooter = styled.footer`
    margin-top: ${({ theme }) => theme.spacing(2)};
    padding: ${({ theme }) => theme.spacing(3, 0)};
    background-color: ${({ theme }) => theme.palette.background.default};
    border-top: 1px solid ${({ theme }) => theme.palette.divider};
`;

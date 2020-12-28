import React, { ReactElement, PropsWithChildren } from 'react';

import { TStyledPageContainer } from './page-container.types';
import { StyledPageContainer } from './page-container.styled';

export function PageContainer({
    children,
    className,
    disableMargin = false,
}: PropsWithChildren<TStyledPageContainer>): ReactElement {
    return (
        <StyledPageContainer
            className={className}
            disableMargin={disableMargin}
        >
            {children}
        </StyledPageContainer>
    );
}

import React, { ReactElement } from 'react';
import { Typography } from '@material-ui/core';

import { Layout, Seo, BasicMap } from '../components';
import {
    StyledPageContainer,
    StyledMapContainer,
} from '../pages-lib/basic-map/basic-map.styled';

export default function BasicMapPage(): ReactElement {
    return (
        <Layout>
            <StyledPageContainer>
                <Seo title="Basic Map" />
                <Typography variant="h3" component="h2">
                    Basic map
                </Typography>
                <StyledMapContainer>
                    <BasicMap />
                </StyledMapContainer>
                <Typography variant="body1" gutterBottom>
                    This is just a basic map showing that we can create simple
                    stand alone maps which can highlight the location of a
                    service with some supplimentary data within a popup.
                </Typography>
            </StyledPageContainer>
        </Layout>
    );
}

import React, { ReactElement } from 'react';
import { Typography } from '@material-ui/core';

import { Layout, Seo, Map } from '../components';
import {
    StyledPageContainer,
    StyledMapContainer,
} from '../pages-lib/basic-map/basic-map.styled';

export default function BasicMap(): ReactElement {
    return (
        <Layout>
            <StyledPageContainer>
                <Seo title="Basic Map" />
                <Typography variant="h3" component="h2">
                    Basic map
                </Typography>
                <StyledMapContainer>
                    <Map />
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

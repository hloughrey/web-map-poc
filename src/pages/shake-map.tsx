import React, { ReactElement } from 'react';
import { Typography } from '@material-ui/core';

import { Layout, Seo, ShakeMap } from '../components';
import {
    StyledPageContainer,
    StyledMapContainer,
} from '../pages-lib/shake-map/shake-map.styled';

export default function ShakePage(): ReactElement {
    return (
        <Layout>
            <StyledPageContainer>
                <Seo title="Shake" />
                <Typography variant="h3" component="h2">
                    Shake Map
                </Typography>
                <StyledMapContainer>
                    <ShakeMap />
                </StyledMapContainer>
                <Typography variant="body1" gutterBottom>
                    Shake Map example pulling data from a GeoJson file.
                </Typography>
            </StyledPageContainer>
        </Layout>
    );
}

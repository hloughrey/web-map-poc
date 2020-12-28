import React, { ReactElement } from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import { Typography, Grid } from '@material-ui/core';

import { TExampleCardProperties } from './example-card.types';
import { StyledCard, StyledCardContent } from './example-card.styled';

export function ExampleCard({
    title,
    image,
    description,
}: TExampleCardProperties): ReactElement {
    return (
        <StyledCard>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={3} lg={3}>
                    <Img fixed={image} alt={title} />
                </Grid>
                <Grid item xs={12} sm={7} lg={9}>
                    <StyledCardContent>
                        <Typography component="h5" variant="h5">
                            {title}
                        </Typography>
                        <Typography variant="subtitle1" color="textSecondary">
                            {description}
                        </Typography>
                        <Link to="/basic-map">See more</Link>
                    </StyledCardContent>
                </Grid>
            </Grid>
        </StyledCard>
    );
}

import React from 'react';
import { graphql } from 'gatsby';

import { Typography, Grid } from '@material-ui/core';

import {
    Layout,
    Seo,
    PageContainer,
    ExampleCard,
    TExampleCardProperties,
} from '../components';
import indexPageContent from '../pages-lib/index/index.content.json';

function getImage(images: unknown[], imageName: string): unknown {
    const img = images.find(image => image.node.name === imageName);
    return img.node.childImageSharp.fixed;
}

export default function IndexPage(properties) {
    return (
        <Layout>
            <PageContainer>
                <Seo title="Home" />
                <Grid container spacing={3}>
                    <Grid item xs={12} md={8} lg={9}>
                        <Typography variant="h4" component="h1" gutterBottom>
                            MapAction
                        </Typography>
                        <Typography variant="body1" gutterBottom>
                            Welcome to MapActions new Web Map portal
                        </Typography>
                        <Typography variant="body1" gutterBottom>
                            These are a few examples of maps which we can build.
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={8} lg={9}>
                        {indexPageContent.examples.map(
                            (example: TExampleCardProperties) => (
                                <ExampleCard
                                    key={example.title}
                                    {...example}
                                    image={getImage(
                                        properties.data.allFile.edges,
                                        example.image as string
                                    )}
                                />
                            )
                        )}
                    </Grid>
                    <Grid item xs={12} md={4} lg={3}>
                        <Typography variant="h4" component="h1" gutterBottom>
                            Some content
                        </Typography>
                    </Grid>
                </Grid>
            </PageContainer>
        </Layout>
    );
}

export const query = graphql`
    query imageQuery {
        allFile(filter: { relativeDirectory: { eq: "examples" } }) {
            edges {
                node {
                    id
                    name
                    childImageSharp {
                        fixed(width: 150, height: 150) {
                            ...GatsbyImageSharpFixed
                        }
                    }
                }
            }
        }
    }
`;

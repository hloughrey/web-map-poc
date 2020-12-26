/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React, { PropsWithChildren, ReactElement } from 'react';
import PropTypes from 'prop-types';
// import { useStaticQuery, graphql } from 'gatsby';

import { GlobalStyle } from '../../../styles/global.styles';

import { StyledContainer, StyledMain } from './layout.styled';
import { Header, Footer } from '../..';

export function Layout({
    children,
}: PropsWithChildren<undefined>): ReactElement {
    // const data = useStaticQuery(graphql`
    //     query SiteTitleQuery {
    //         site {
    //             siteMetadata {
    //                 title
    //             }
    //         }
    //     }
    // `);

    return (
        <StyledContainer>
            <GlobalStyle />
            <Header />
            <StyledMain>{children}</StyledMain>
            <Footer />
        </StyledContainer>
    );
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

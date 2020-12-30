import { Typography } from '@material-ui/core';
import React, { ReactElement } from 'react';
import { Marker, Popup, TileLayer } from 'react-leaflet';

import { StyledMapContainer } from './basic-map.styled';

export function BasicMap(): ReactElement {
    if (typeof window !== 'undefined') {
        return (
            <div>
                <StyledMapContainer
                    center={[51.69972661906321, -0.9071014739207922]}
                    zoom={13}
                    scrollWheelZoom={false}
                >
                    <TileLayer
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={[51.69972661906321, -0.9071014739207922]}>
                        <Popup>
                            <Typography
                                variant="h6"
                                component="h1"
                                gutterBottom
                            >
                                MapAction
                            </Typography>
                            <Typography variant="body2">
                                Douglas Court <br />
                                1-2 Seymour Business Park
                                <br />
                                Chinnor <br />
                                Oxfordshire <br />
                                United Kingdom <br />
                                OX39 4HA
                            </Typography>
                        </Popup>
                    </Marker>
                </StyledMapContainer>
            </div>
        );
    }

    return <h1>Loading...</h1>;
}

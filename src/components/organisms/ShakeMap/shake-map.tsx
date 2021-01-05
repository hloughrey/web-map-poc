import { Typography } from '@material-ui/core';
import React, { ReactElement } from 'react';
import {
    Marker,
    Popup,
    TileLayer,
    GeoJSON,
    LayersControl,
} from 'react-leaflet';

import { StyledMapContainer } from './shake-map.styled';

import EarthquakeData from './data.json';

function setStyle(feature) {
    return {
        color: feature.properties.color,
    };
}

export function ShakeMap(): ReactElement {
    if (typeof window !== 'undefined') {
        return (
            <StyledMapContainer
                zoom={7}
                center={[27.6812, 85.3199]}
                scrollWheelZoom={false}
            >
                <LayersControl position="topright">
                    <LayersControl.BaseLayer
                        checked
                        name="Humanitarian OpenStreetMap"
                    >
                        <TileLayer
                            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
                        />
                    </LayersControl.BaseLayer>
                    <LayersControl.BaseLayer name="Mapbox">
                        <TileLayer
                            attribution='Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery &copy; <a href="https://www.mapbox.com/">Mapbox</a>'
                            url="https://api.mapbox.com/styles/v1/hloughrey/ckjj5g7w50b3m19mmey8zojrw/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiaGxvdWdocmV5IiwiYSI6ImNramo1bGIybDJvOTcydnNjd283bWxkYmsifQ.zLyQVYhcHSq0HFAZg5oijQ"
                        />
                    </LayersControl.BaseLayer>
                </LayersControl>

                <Marker position={[27.6812, 85.3199]}>
                    <Popup>
                        <Typography variant="h6" component="h1" gutterBottom>
                            Kathmandu
                        </Typography>
                    </Popup>
                </Marker>
                <GeoJSON
                    key="EarthquakeData"
                    data={EarthquakeData}
                    style={setStyle}
                />
            </StyledMapContainer>
        );
    }

    return <h1>Loading...</h1>;
}

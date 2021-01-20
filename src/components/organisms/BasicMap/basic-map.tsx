import React, { ReactElement, useRef, useEffect } from 'react';

import { initMap } from './basic-map.logic';
import { StyledMapContainer } from './basic-map.styled';

export function BasicMap(): ReactElement {
    const mapReference = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (mapReference.current) {
            initMap();
        }
    }, [mapReference]);

    return <StyledMapContainer id="basic-map" ref={mapReference} />;
}

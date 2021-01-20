import React, { ReactElement, useEffect, useRef } from 'react';

import { StyledMapContainer } from './shake-map.styled';
import { initMap } from './shake-map.logic';

export function ShakeMap(): ReactElement {
    const mapReference = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (mapReference.current) {
            initMap();
        }
    }, [mapReference]);

    return <StyledMapContainer id="shake-map" ref={mapReference} />;
}

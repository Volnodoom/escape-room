import { useEffect, useRef } from 'react';
import {  Map, Icon, Marker, TileLayer } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { MapLocation, PinOnMap, PIN_SVG } from 'src/const';
import * as S from './map-geographical.styled';

function MapGeographical (): JSX.Element {
  const mapRef = useRef<HTMLDivElement | null> (null);
  const {lat, lng, zoom} = MapLocation;

  useEffect(() => {
    if(mapRef.current !== null) {
      const mapInstance = new Map(mapRef.current, {
        center: {lat, lng},
        zoom,
      });

      const layer = new TileLayer(
        'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
        {
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
        },
      );

      mapInstance.addLayer(layer);

      const pinIcon = new Icon({
        iconUrl: PIN_SVG,
        iconSize: [PinOnMap.SizeWidth, PinOnMap.SizeHeight],
        iconAnchor: [PinOnMap.AnchorWidth, PinOnMap.AnchorHeight],
      });

      const pin = new Marker({
        lat,
        lng,
      });

      pin.setIcon(pinIcon).addTo(mapInstance);
    }

  });

  return (
    <S.ContactsMap ref={mapRef} />
  );
}

export default MapGeographical;

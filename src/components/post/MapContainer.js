import { Map, GoogleApiWrapper, Marker } from "google-maps-react";

export function MapContainer(props) {
  const { geolocation } = props;

  const mapStyles = {
    width: "713px",
    height: "240px",    
  };

  const containerStyle = {
    position: 'absolute',
    top: '81px',
    left: '37px',  
    width: "713px",
    height: "240px",
  };

  function displayMarkers() {
    return state.stores.map((store, index) => {
      return (
        <Marker
          key={index}
          id={index}
          position={{
            lat: store.latitude,
            lng: store.longitude,
          }}
        />
      );
    });
  }

  const state = {
    stores: [
      {
        latitude: geolocation.latitude,
        longitude: geolocation.longitude,
        local: "Seu local",
      },
    ],
  };

  return (
    <Map
      google={props.google}
      zoom={8}
      style={mapStyles}
      containerStyle={containerStyle}
      initialCenter={{
        lat: geolocation.latitude,
        lng: geolocation.longitude,
      }}
    >
      {displayMarkers()}
    </Map>
  );
}

export default GoogleApiWrapper((props) => ({
  apiKey: "AIzaSyD-gDQQuhJ_kYbay0RkgU9KuyRLSOjuKUI",
}))(MapContainer);

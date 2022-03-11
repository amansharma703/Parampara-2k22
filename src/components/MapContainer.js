import React from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

const MapContainer = () => {
    return (
        <>
            <Map
                google={this.props.google}
                style={{ width: '50%', height: '50vh' }}
                zoom={10}
                initialCenter={{
                    lat: 26.109449,
                    lng: 83.208618,
                }}
            />
        </>
    );
};

// export default GoogleMap;
export default GoogleApiWrapper({
    apiKey: 'AIzaSyCqSqbusiYBNCRFDEDAMI9VFXQj1fYBzbg',
})(MapContainer);

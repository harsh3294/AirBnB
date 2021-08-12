import ReactMapGL, { Marker, Popup } from "react-map-gl";
import { useState } from "react";
import getCenter from "geolib/es/getCenter";
import Image from "next/image";
function Map({ searchResult }) {
  //transform the search results object into {latitude:52.518272,longitude:13.377722} object

  const coordinates = searchResult.map((result) => ({
    latitude: result.lat,
    longitude: result.long,
  }));
  const center = getCenter(coordinates);
  const [viewport, setViewport] = useState({
    width: "100%",
    height: "100%",
    latitude: center.latitude,
    longitude: center.longitude,
    zoom: 13,
  });

  const [selectedLocation, setSelectedLocation] = useState({});
  console.log(selectedLocation);
  return (
    <ReactMapGL
      mapStyle="mapbox://styles/harshc3294/cks8ukybw7ii318qq8zhecxqt"
      {...viewport}
      mapboxApiAccessToken={process.env.mapbox_key}
      onViewportChange={(viewport) => setViewport(viewport)}
    >
      {searchResult.map((result) => (
        <div key={result.long}>
          <Marker
            longitude={result.long}
            latitude={result.lat}
            offsetLeft={-20}
            offsetRight={-10}
          >
            <p
              role="img"
              className="cursor-pointer text-2xl animate-bounce"
              onClick={() => setSelectedLocation(result)}
              aria-label="push-pin"
            >
              📌
            </p>
          </Marker>
          {selectedLocation.long === result.long ? (
            <Popup
              closeOnClick={true}
              onClose={() => setSelectedLocation({})}
              latitude={result.lat}
              longitude={result.long}
            >
              <div className="relative h-[200px] w-[300px] mb-4 z-index-100 ">
                <Image src={result.img} objectFit="contain" layout="fill" />
              </div>
              <div className="text-center border-t-2">{result.title}</div>
              <p className="max-w-[300px] text-gray-500 mt-2">
                {result.description}
              </p>
              <p className="text-right font-semibold text-lg">{result.price}</p>
            </Popup>
          ) : (
            false
          )}
        </div>
      ))}
    </ReactMapGL>
  );
}

export default Map;

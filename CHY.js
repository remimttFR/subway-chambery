(function() {
  const api = window.SubwayBuilderAPI;
  const BASE = 'https://raw.githubusercontent.com/remimttFR/subway-chambery/refs/heads/main';

  api.registerCity({
    name: 'Chambéry',
    code: 'CHY',
    description: 'Porte de la Savoie',
    population: 210000,
    initialViewState: {
      zoom: 12,
      latitude: 45.566,
      longitude: 5.920,
      bearing: 0
    },
    creator: 'Rémi',
    version: '1.0.0'
  });

  api.cities.setCityDataFiles('CHY', {
    demandData: BASE + '/demand_data.json',
    roads: BASE + '/roads.geojson',
    buildingsIndex: BASE + '/buildings_index.json',
    runwaysTaxiways: BASE + '/runways_taxiways.geojson',
    tilesUrl: BASE + '/chambery.pmtiles',
  });

})();
class City {
    constructor(name = '', coordi = '') {
        this.name = name;
        this.coordi = coordi;
        this.coordiMap = new Map();
    }

    coordiDraw() {
        this.coordiMap.set('Tel Aviv,IL', [32.08, 34.78]);
        this.coordiMap.set('New York,US', [40.73, -73.99]);
        this.coordiMap.set('Paris,FR', [48.86, 2.35]);
        this.coordiMap.set('Barcelona,ES', [41.38, 2.18]);
        this.coordiMap.set('Toronto,CA', [43.65, -79.39]);
        this.coordiMap.set('Los Angeles,US', [34.05, -118.24]);
        this.coordiMap.set('Sydney,AU', [-33.85, 151.22]);
        this.coordiMap.set('Tokyo,JP', [35.68, 139.76]);
        this.coordiMap.set('London,UK', [51.51, -0.13]);
        this.coordiMap.set('Rome,IT', [12.48, 41.89]);

        this.coordiMap.forEach( (coordinates) => {
            const marker = L.marker(coordinates).addTo(mymap);
            this.coordiMap.set(coordinates, marker);
        })
    }

    getCoordiMap() {
        return this.coordiMap;
    }

    setChosenCoordi() {
        switch (this.name) {
            case 'Tel Aviv,IL':
                this.coordi = this.coordiMap.get('Tel Aviv,IL');
                break;
            case 'New York,US':
                this.coordi = this.coordiMap.get('New York,US');
                break;
            case 'Paris,FR':
                this.coordi = this.coordiMap.get('Paris,FR');
                break;
            case 'Barcelona,ES':
                this.coordi = this.coordiMap.get('Barcelona,ES');
                break;
            case 'Toronto,CA':
                this.coordi = this.coordiMap.get('Toronto,CA');
                break;
            case 'Los Angeles,US':
                this.coordi = this.coordiMap.get('Los Angeles,US');
                break;
            case 'Sydney,AU':
                this.coordi = this.coordiMap.get('Sydney,AU');
                break;
            case 'Tokyo,JP':
                this.coordi = this.coordiMap.get('Tokyo,JP');
                break;
            case 'London,UK':
                this.coordi = this.coordiMap.get('London,UK');
                break;
            case 'Rome,IT':
                this.coordi = this.coordiMap.get('Rome,IT');
                break;
        }
        this.setChosen();
    }

    setChosen() {
        const redIcon = L.icon({
            iconUrl: "https://maps.gstatic.com/mapfiles/api-3/images/spotlight-poi2_hdpi.png",
        });
        const blueIcon = L.icon({
            iconUrl: "https://unpkg.com/leaflet@1.3.1/dist/images/marker-icon.png",
        });
        this.coordiMap.forEach((marker, coordinates ) => {
            if(typeof  coordinates === 'object'){
               marker.setIcon(blueIcon);
            }
        })
        const chosenMarker= this.coordiMap.get(this.coordi);
        chosenMarker.setIcon(redIcon);
        mymap.setView(this.coordi, 7);
    }
}
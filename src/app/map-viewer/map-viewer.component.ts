import { Component, OnInit } from '@angular/core';
import Map from 'ol/map'
import Tile from 'ol/layer/tile'
import OSM from 'ol/source/osm'
import SVector from 'ol/source/vector'
import LVector from 'ol/layer/vector'
import View from 'ol/view'
import Circle from 'ol/style/circle'
import proj from 'ol/proj'
import Style from 'ol/style/style'
import Fill from 'ol/style/fill'
import Stroke from 'ol/style/stroke'
import GeoJSON from 'ol/format/geojson'
import control from 'ol/control'
import { DataUpdateService } from '../data-update.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-map-viewer',
  templateUrl: './map-viewer.component.html',
  styleUrls: ['./map-viewer.component.css']
})
export class MapViewerComponent implements OnInit {

  map: Map;

  id: number;

  geoData: any = {
    "type": "FeatureCollection",
    "features": []
  };

  static c = 0;

  subscription: Subscription;

  constructor(private dataUpdateService: DataUpdateService) {
    this.id = ++MapViewerComponent.c;

    this.subscription = dataUpdateService.dataUpdated$.subscribe(
      data => {
        this.geoData = data;

        if (this.map) {
          let layers = this.map.getLayers();
          let l2 = layers.getArray()[1];
          this.map.removeLayer(l2);

          let feats = (new GeoJSON()).readFeatures(this.geoData, { dataProjection: '', featureProjection: 'EPSG:3857' });
          var vectorSource = new SVector({
            features: feats
          });


          let layerName = new LVector({
            source: vectorSource
          });

          this.map.addLayer(layerName);

          let firstPointCoords = this.geoData.features.find(f => f.geometry.type === 'Point').geometry.coordinates;
          var cen = proj.transform(firstPointCoords, 'EPSG:4326', 'EPSG:3857');
          this.map.getView().setCenter(cen);

          this.map.render();
        }

      });
  }

  ngOnInit() {
    this.createMap();
    this.setMapTarget();
  }

  createMap() {

    var image = new Circle({
      radius: 5,
      fill: null,
      stroke: new Stroke({ color: 'red', width: 1 })
    });

    var styles = {
      'Point': new Style({
        image: image
      }),
      'LineString': new Style({
        stroke: new Stroke({
          color: 'green',
          width: 1
        })
      }),
      'MultiLineString': new Style({
        stroke: new Stroke({
          color: 'green',
          width: 1
        })
      }),
      'MultiPoint': new Style({
        image: image
      }),
      'MultiPolygon': new Style({
        stroke: new Stroke({
          color: 'yellow',
          width: 1
        }),
        fill: new Fill({
          color: 'rgba(255, 255, 0, 0.1)'
        })
      }),
      'Polygon': new Style({
        stroke: new Stroke({
          color: 'blue',
          lineDash: [4],
          width: 3
        }),
        fill: new Fill({
          color: 'rgba(0, 0, 255, 0.1)'
        })
      }),
      'GeometryCollection': new Style({
        stroke: new Stroke({
          color: 'magenta',
          width: 2
        }),
        fill: new Fill({
          color: 'magenta'
        }),
        image: new Circle({
          radius: 10,
          fill: null,
          stroke: new Stroke({
            color: 'magenta'
          })
        })
      }),
      'Circle': new Style({
        stroke: new Stroke({
          color: 'red',
          width: 2
        }),
        fill: new Fill({
          color: 'rgba(255,0,0,0.2)'
        })
      })
    };

    var styleFunction = function (feature) {
      return styles[feature.getGeometry().getType()];
    };

    if (this.geoData) {
      let feats = (new GeoJSON()).readFeatures(this.geoData, { dataProjection: '', featureProjection: 'EPSG:3857' });

      var vectorSource = new SVector({
        features: feats
      });

      var vectorLayer = new LVector({
        source: vectorSource,
        style: styleFunction
      });

      let firstPointCoords = [0, 0];
      if (this.geoData.features.length) {
        firstPointCoords = this.geoData.features.find(f => f.geometry.type === 'Point').geometry.coordinates;
      }

      var cen = proj.transform(firstPointCoords, 'EPSG:4326', 'EPSG:3857');

      this.map = new Map({
        layers: [
          new Tile({
            source: new OSM()
          }),
          vectorLayer
        ],
        controls: control.defaults({
          attributionOptions: {
            collapsible: false
          }
        }),
        view: new View({
          center: cen,
          zoom: 18
        })
      });
    }
  }


  setMapTarget() {
    setTimeout(() => {


      let d = this.id.toString();
      let m = document.getElementById(d);


      if (m) {

        /*let p = m.parentNode;
        p.removeChild(m);
        var n = document.createElement("div");
        n.setAttribute('class', 'map');
        n.setAttribute('id', d);
        p.appendChild(n);*/

        if (this.map) {
          this.map.setTarget(d);
        }
      } else {
        this.setMapTarget();
      }
    }, 100);
  }

}

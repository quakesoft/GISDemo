const office = {
    name: '1Spacial Office',
    description: 'Sample Data: 1Spacial office location and building polygon',
    data: {
        "type": "FeatureCollection",
        "features": [
          {
            "type": "Feature",
            "properties": {},
            "geometry": {
              "type": "Point",
              "coordinates": [
                0.15244066715240479,
                52.229381519112636
              ]
            }
          },
          {
            "type": "Feature",
            "properties": {},
            "geometry": {
              "type": "Polygon",
              "coordinates": [
                [
                  [
                    0.15253186225891113,
                    52.22899544585306
                  ],
                  [
                    0.15300124883651733,
                    52.22933387621113
                  ],
                  [
                    0.1521080732345581,
                    52.22976101764043
                  ],
                  [
                    0.15186667442321777,
                    52.229590161561866
                  ],
                  [
                    0.15238165855407715,
                    52.22932730477242
                  ],
                  [
                    0.1521778106689453,
                    52.22915808989081
                  ],
                  [
                    0.15253186225891113,
                    52.22899544585306
                  ]
                ]
              ]
            }
          }
        ]
      },
};

const trainStation = {
    name: 'Train Station',
    description: 'Sample Data: Train station polygon and train location',
    data: {
        "type": "FeatureCollection",
        "features": [
          {
            "type": "Feature",
            "properties": {},
            "geometry": {
              "type": "Point",
              "coordinates": [
                0.15842735767364502,
                52.22449374815095
              ]
            }
          },
          {
            "type": "Feature",
            "properties": {},
            "geometry": {
              "type": "Polygon",
              "coordinates": [
                [
                  [
                    0.1590496301651001,
                    52.226715080848294
                  ],
                  [
                    0.15771925449371338,
                    52.22485521518378
                  ],
                  [
                    0.15906572341918945,
                    52.22449703422814
                  ],
                  [
                    0.16042828559875488,
                    52.22634377113582
                  ],
                  [
                    0.1590496301651001,
                    52.226715080848294
                  ]
                ]
              ]
            }
          }
        ]
      },
};

export { office, trainStation }
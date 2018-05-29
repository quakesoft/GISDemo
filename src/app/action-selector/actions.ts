import rules from '../rule-selector/rules';

export default [
    {
        name: 'Move point inside polygon',
        description: 'Assumes polygon is convex',
        action: (geoData) => {

            let rule = rules.find(r => r.description == 'Point must be inside polygon');

            let data = geoData.data;
            let point = data.features.find(f => f.geometry.type === 'Point');
            let polygon = data.features.find(f => f.geometry.type === 'Polygon');

            let isInside = rule.rule(point, polygon);
            if (isInside) return geoData;

            let x = 0;
            let y = 0;
            let coords = polygon.geometry.coordinates[0];
            for (let c of coords) {
                x += c[0];
                y += c[1];
            }
            x = x / coords.length;
            y = y / coords.length;
            let pc = point.geometry.coordinates;
            pc[0] = x;
            pc[1] = y;

            return geoData;
        }
    }
];
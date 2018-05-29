import Polygon from 'ol/geom/polygon'
import Rule from './rule'

const isPointInsidePolygon: Rule = {
    description: 'Point must be inside polygon',
    rule: (point, polygon) => {
        let pgon = new Polygon(polygon.geometry.coordinates);
        return pgon.intersectsCoordinate(point.geometry.coordinates);
    }
};

const isPointOutsidePolygon: Rule = {
    description: 'Point must be outside polygon',
    rule: (point, polygon) => !isPointInsidePolygon.rule(point, polygon)
};

export default [isPointInsidePolygon, isPointOutsidePolygon];
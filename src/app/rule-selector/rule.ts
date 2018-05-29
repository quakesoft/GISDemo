export default interface Rule {
    description: string;
    rule(point, polygon): boolean;
}
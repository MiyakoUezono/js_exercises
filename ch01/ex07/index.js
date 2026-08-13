export class Point {
    constructor(x,y) {
        this.x = x;
        this.y = y;
    }

    add(x,y) {
        return (
            this.x + x,
            this.y + y
        );
    }
}
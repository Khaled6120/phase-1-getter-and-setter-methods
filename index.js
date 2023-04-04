// Add your Circle class here

class Circle {
    constructor(radius) {
        this.radius = radius
        this.PI = Math.PI
    }

    get diameter() {
        return this.radius * 2
    }
    get circumference() {
        return this.radius * 2 * this.PI
    }
    get area() {
        return this.PI * this.radius ** 2
    }

    set diameter(diameter) {
        this.radius = diameter / 2;
    }

    set circumference(circumference) {
        this.radius = circumference / (2 * Math.PI);
    }

    set area(area) {
        this.radius = Math.sqrt(area / Math.PI);
    }
}
/*
    Class --> Object

    Instance Properties: what they have
        - name
        - age
        - height

    Instance Methods: what they do
        - talk
        - run
        - jump
*/

class Rectangle {
    // Setup
    constructor(width, heigth, color) {
        console.log('The Rectangle is being created!!!');

        this.width = width;
        this.heigth = heigth;
        this.color = color;
    }

    getArea() {
        return this.width * this.heigth;
    }

    printDescription() {
        console.log('I am a rectangle of ' + this.width + ' x ' + this.heigth + ' and I am ' + this.color);
    }
}

let myRectangle1 = new Rectangle(7, 5, 'red');
let myRectangle2 = new Rectangle(10, 10, 'blue');

myRectangle2.printDescription();
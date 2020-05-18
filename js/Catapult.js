// Creating a function catapult
function Catapult(x,y) {

    // Declaring the options
    var op  = {
        isStatic: true
    }

    //  Creating a body 
    this.body = Bodies.rectangle(op);
    this.x = x;
    this.y = y;

    // Loading the image
    this.image = loadImage("Catapult.png");

    // Adding the body to the world
    World.add(world,this.body);

    // Creating a display function
    this.display = function() {
        // Displaying the image
        image(this.image,this.x,this.y);
    }
}
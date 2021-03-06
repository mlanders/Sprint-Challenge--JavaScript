// 1. Copy and paste your prototype in here and refactor into class syntax.
// Added '2' onto CuboidMaker and cuboid as they were already being declared int he prototypes.js file. This cleared the console errors.
class CuboidMaker2{
    constructor (attributes){
        this.length = attributes.length;
        this.width = attributes.width;
        this.height = attributes.height;
    }
    volume(){
        return this.length * this.width * this.height
    }
    surfaceArea(){
        return 2* ((this.length * this.width) + (this.length * this.height) + (this.width * this.height))
    }
    }


const cuboid2 = new CuboidMaker2({
    length: 4,
    width: 5,
    height: 5,
  })  
  

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid2.volume()); // 100
console.log(cuboid2.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker. Test your work by logging out your volume and surface area.
console.log('===== Stretch: Classes =====')
class CubeMaker extends CuboidMaker2{
    constructor (attributes){
    super(attributes);
        
    }
}

const cuboidChild = new CubeMaker({
    length: 8,
    width: 3,
    height: 7,
  })  

console.log(cuboidChild.volume());
console.log(cuboidChild.surfaceArea());
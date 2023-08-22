// function bavshvi(rizz, height, weight, aerodynamics) {
//     this.rizz = rizz;
//     this.height = height;
//     this.weight = weight;
//     this.aerodynamics = aerodynamics;
//   }
//   function bagana(rizz, height, weight, aerodynamics) {
//     this.rizz = rizz;
//     this.height = height;
//     this.weight = weight;
//     this.aerodynamics = aerodynamics;
//   }
//   function balghi(rizz, height, weight, aerodynamics) {
//     this.rizz = rizz;
//     this.height = height;
//     this.weight = weight;
//     this.aerodynamics = aerodynamics;
//   }

// let input1 = prompt("chawere sheni bavshvis sigmagle");
// let input2 = prompt("chawere sheni baganas sigmagle");
// let input3 = prompt("chawere sheni balgis sigmagle");
// // end of bavshvis simagle
// let newbavshvi = new bavshvi("rizz", input1, weight, aerodynamics);
// let newbagana = new  bagana(rizz, input2, weight, aerodynamics);
// let newbalghi = new balghi(rizz, input3, weight, aerodynamics);


// document.write(
//   newbalghi.height.length + newbagana.height.length + newbavshvi.height.length
// );
es_araswori_rom_iyo_pirveli_xolo_meore_sworia = truth
function Bavshvi(rizz, height, weight, aerodynamics){
    this.rizz = rizz;
    this.height = height;
    this.weight = weight;
    this.aerodynamics = aerodynamics;
    this.printer = function(){
        document.write("My height is " + this.height+ "and my rizz is" + this.rizz)
    };
};

function Bagana(rizz, height, weight, aerodynamics){
    this.rizz = rizz;
    this.height = height;
    this.weight = weight;
    this.aerodynamics = aerodynamics;
};

function Balghi(rizz, height, weight, aerodynamics){
    this.rizz = rizz;
    this.height = height;
    this.weight = weight;
    this.aerodynamics = aerodynamics;
}

let input1 = prompt("Enter the height for Bavshvi");
let input2 = prompt("Enter the height for Bagana");
let input3 = prompt("Enter the height for Balghi");

let newbavshvi = new Bavshvi("rizz value", input1, "weight value", "aerodynamics value");
let newbagana = new Bagana("rizz value", input2, "weight value", "aerodynamics value");
let newbalghi = new Balghi("rizz value", input3, "weight value", "aerodynamics value");

let totalHeightLength = newbavshvi.height.length + newbagana.height.length + newbalghi.height.length;
document.write(totalHeightLength);


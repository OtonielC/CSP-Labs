
//  This is a comment
//  The setup function function is called once when your program begins
var data;
function preload(){
  data = loadJSON("catfacts.json");
}
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);


}

//  The draw function is called @ 30 fps
function bubbleSort(txt){
    n = ;
    for(var i = n-1; i >= 1; i--){
      for(var x = 0; x < i; x++){
        //i have to assign one of these numbers to a different variable so it is not
        //lost and then i make the two txt variables equal
        //then i change the one i need to the save variable.
        if([x-1] > txt[x]){
          savedvariable = txt[x];
          txt[x] = txt[x-1];
          txt[x-1] = savedVariable;
          console.log(txt)
        }
      }
    }
}

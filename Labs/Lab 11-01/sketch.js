
//  This is a comment
//  The setup function function is called once when your program begins
var data;
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);
  loadJSON("population.json", popdata);

}

//  The draw function is called @ 30 fps
function draw(){
  if(data){

  }
}
function bubbleSort(txt){
  n = data.length;
  for(var i = n-1; i >= 1; i--){
    for(var j = 0; j < i; j++){
      //i have to assign one of these numbers to a different variable so it is not
      //lost and then i make the two txt variables equal
      //then i change the one i need to the save variable.
      if([j] > txt[j+1]){
        savedvariable = txt[j];
        txt[j] = txt[j-1];
        txt[j-1] = savedVariable;
        console.log(txt)
      }
    }
  }
}
function popdata(jdata){
  data = jdata
}

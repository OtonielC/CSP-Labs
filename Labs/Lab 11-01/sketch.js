
//  This is a comment
//  The setup function function is called once when your program begins
var data;
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);
  loadJSON("population.json", popdata);
  bubbleSort(data)
}

//  The draw function is called @ 30 fps
function draw(){
  if(data){

  }
}
function bubbleSort(data){
  for(var i = data.length-1; i >= 1; i--){
    for(var j = 0; j < i; j++){
      //i have to assign one of these numbers to a different variable so it is not
      //lost and then i make the two data variables equal
      //then i change the one i need to the save variable.
      if(data.countrydata[j].females > data.countrydata[j+1].females){
        savedvariable = data.countrydata[j].females;
        data.countrydata[j].females = data.countrydata[j+1].females;
        data.countrydata[j+1].females = savedVariable;
      }
    }
  }
  console.log(data)
}

function popdata(jdata){
  data = jdata
}

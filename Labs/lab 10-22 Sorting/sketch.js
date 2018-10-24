
//Otoniel Carreon
//APCS
//10/23

var savedVariable;
var txt;
function preload(){
  txt = loadStrings("words.txt");
}
//  The setup function function is called once when your program begins
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);
  bubbleSort(txt);

}

//  The draw function is called @ 30 fps
function bubbleSort(list) {
    n = list.length;
    for(var i = n-1; i >= 1; i--){
      for(var x = 0; x <= i - 1; x++){
        //i have to assign one of these numbers to a different variable so it is not
        //lost and then i make the two list variables equal
        //then i change the one i need to the save variable.
        if(list[x-1] > list[x]){
          savedvariable = list[x];
          list[x] = list[x-1];
          list[x-1] = savedVariable;
          console.log(list)
        }
      }
    }
return list;
}

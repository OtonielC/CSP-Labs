
//Otoniel Carreon
//APCS
//10/23

//this is the array filled with strings that is not in order.
var list = ['banana','apple','carrot','orange']
var savedVariable;
//  The setup function function is called once when your program begins
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);


}

//  The draw function is called @ 30 fps
function bubbleSort(list) {
    n = list.length;
    swapped = false;
    for(var i = n-1; i >= 1; i--){
      for(var x = 0; x < n; i++){
        //i have to assign one of these numbers to a different variable so it is not
        //lost and then i make the two list variables equal
        //then i change the one i need to the save variable.
        if(list[x-1].length > list[x].length){
          savedvariable = list[x].length;
          list[x] = list[-1];
          list[x-1] = savedVariable;
          console.log(list)
          swapped = true;
          return list;
        }
      }
    }

}

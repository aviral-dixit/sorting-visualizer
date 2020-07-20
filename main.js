// Select canvas and set its width and height
var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var c = canvas.getContext("2d");

// Function to define and draw each element of array
function value(x,y,height){
  this.x = x;
  this.y = y;
  this.height = height;

  this.draw = function(){
    c.beginPath();
    c.rect(this.x,this.y,width,this.height);
    //c.stroke();
    c.fillStyle = 'white';
    c.fill();
  }
  this.update = function(){
    this.draw();
  }
}

// Function to initialize and draw array
var valueArray=[];
var width= 1;
function init(){
  for(var i=0;i<470;i++){
    valueArray.push(new value(width*i+3*i,100,Math.random()*500));
  }
  for(var i=0;i<valueArray.length;i++){
   valueArray[i].draw();
 }
}

// BUBBLE SORT
function Bubble()
 {
  var i=0;
  setInterval(function(){
    if(i>=valueArray.length-1)
   {
     clearInterval();}
   else
   {

      for(var j=0;j<valueArray.length-i-1;j++)
     {
          if(valueArray[j].height>valueArray[j+1].height)
       {
         var temp=valueArray[j].height;
         valueArray[j].height=valueArray[j+1].height;
         valueArray[j+1].height= temp;

        }
        c.clearRect(0,0,innerWidth,innerHeight);
        for(var t=0;t<valueArray.length-1;t++)
        {
          valueArray[t].update();

        }
    }
    i++;
  }
},0.00001
)}

function quik(){
  var low=0;
  var high=valueArray.length-1;

  quicksort(low,high);
  async function quicksort( low , high){
    if(low<high){
      var pivot = await partition(low, high);
      await quicksort(low , pivot-1);
      await quicksort(pivot+1,high);
    }
  }
  async function partition(low, high){
    var pivotindex = low;
    var pivotvalue = valueArray[high].height;
    for( i = low ; i < high ; i++ ){
      if(valueArray[i].height < pivotvalue ){
        await swap(i,pivotindex);
        pivotindex++;
      }
    }
    await swap(pivotindex,high)
    return pivotindex;
  }
  async function swap( a, b){
    await sleep(10);
    var temp = valueArray[a].height;
    valueArray[a].height = valueArray[b].height;
    valueArray[b].height = temp;

    c.clearRect(0,0,innerWidth,innerHeight);
    for(var t=0;t<valueArray.length ; t++)
    {
      valueArray[t].update();
    }
  }
  function sleep(ms){
    return new Promise(resolve => setTimeout(resolve,ms));
  }
  async function demo(){
    console.log('break');
    await sleep(200);
    console.log('2 sec later');
  }
  demo();
}
function mer()
{
  var start = 0;
  var end = valueArray.length;
  merge_sort(start, end);
  function merge_sort (start , end )
  {
    if( start < end ) {
      var mid = Math.floor((start + end ) / 2) ;
      merge_sort ( start , mid ) ;
      merge_sort ( mid+1 , end ) ;
      merge( start , mid , end );
    }
    else{
      return ;
    }
  }
  function merge(  start, mid, end) {
    var p = start ,q = mid+1;

    var arr =[] ;
    var k=0;

    for(var i = start ;i <= end ;i++) {
      if(p > mid)
      arr[ k++ ] = valueArray[ q++].height ;

      else if ( q > end)
      arr[ k++ ] = valueArray[ p++ ].height;

      else if( valueArray[ p ].height < valueArray[ q ].height)
      arr[ k++ ] = valueArray[ p++ ].height;

      else
      arr[ k++ ] = valueArray[ q++].height;
    }
    for (var p=0 ; p< k ;p ++) {
      valueArray[ start++ ].height = arr[ p ] ;
    }
    c.clearRect(0,0,innerWidth,innerHeight);
    for(var t=0;t<valueArray.length;t++){
      console.log(valueArray[t]);

      //valueArray[t].update();
    }
  }
  //function sleep(ms){
    //return new Promise(resolve => setTimeout(resolve,ms));
  //}
  //async function demo(){
    //console.log('break');
    //await sleep(200);
    //console.log('2 sec later');
  //}
//  demo();
}








// To clear the screen
function deleteCanvasItems(){
  valueArray = [];
  c.clearRect(0,0,innerWidth,innerHeight);
 }

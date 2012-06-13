$(function(){
    Crafty.init();
  
    Crafty.e("2D","DOM","Color","Collision","WiredHitBox","Fourway").attr({
        x:10,
        y:0,
        w:100,
        h:100,
        hitBoxColor:"grey"
    }).color("blue").collision([0,0],[100,0],[100,100]).fourway(5);
    
 
      Crafty.e("2D","DOM","Color","Collision","SolidHitBox").attr({
        x:110,
        y:0,
        w:100,
        h:100,
        hitBoxColor:"yellow"
    }).color("red").collision([0,0],[50,0],[50,50],[0,50]);
})
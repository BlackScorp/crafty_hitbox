Crafty.extend({
    hitBox:{
        _wired:{},
        _solid:{},
        create:function(obj){
            this._wired[obj[0]] = {}
         
             
        },
        set:function(id,points,color){
            
        },
        remove:function(id){
            
        },
        draw:function(ctx){
            console.log(this._wired);
        }
    }
});
Crafty.c("HitBox",{
    _wiredBoxes:{},
    _solidBoxes:{},
    _ctx:null,
    _canvas:null,
    init:function(){
        if (!Crafty.support.canvas) return;
        var c = document.getElementById('HitBox');
        if(!c){
            c = document.createElement("canvas");
            c.id = 'HitBox';
            c.width = Crafty.viewport.width;
            c.height = Crafty.viewport.height;
            c.style.position = 'absolute';
            c.style.left = "0px";
            c.style.top = "0px";
            c.style.zIndex = Crafty.stage.elem.style.zIndex+1;
           
            Crafty.stage.elem.appendChild(c); 
        } 
        this._canvas = c;
        this._ctx = c.getContext('2d');
        this.bind("Change",function(){
            //this._canvas.width =  this._canvas.width ;
         
            this.drawBoxes();
        }).bind("EnterFrame",function(){
            if(!this._changed) return;
            this.drawBoxes();
        })
    },
    drawBoxes:function(){
       
        for(var b in this._wiredBoxes){
       
            var box = this._wiredBoxes[b];
            
            this._ctx.strokeStyle = box.color;
        
            this._ctx.beginPath();
      
            for(var p = 0,pl = box.points.length;p<pl;p++){
              
                var point = box.points[p];
             
         
                if(p > 0){
                    console.log("LineTo:"+point[0]+"/"+point[1]);
                    this._ctx.lineTo(point[0],point[1]); 
                }else{
                    console.log("MoveTo:"+point[0]+"/"+point[1]);
                    this._ctx.moveTo(point[0],point[1]);
                }
            }
            this._ctx.closePath();
            this._ctx.stroke();  
        }
  
    }
});


/**@
* #Collision
* @category Collision
* Components to display Crafty.polygon Array for debugging collision detection
* * @example
* ~~~
* Crafty.e("2D,DOM,Player,Collision,WiredHitBox").collision(new Crafty.polygon([0,0],[0,300],[300,300],[300,0])) 
* ~~~
* this will display a wired square over your original Canvas screen 
*/
Crafty.c("WiredHitBox", {
    init:function(){
   
     
        this.requires("Collision,HitBox")
       
        .bind("RemoveComponent",function(id){
            delete(this._wiredBoxes[id]);
        }).bind("EnterFrame",function(){
            if(!this._changed) return;
            if(!this.map) this.collision();
            this._wiredBoxes[this[0]] = {
                color:this.hitBoxColor || 'black',
                points: this.map.points 
            }
            console.log(this.map);
            
        })
    
        
        return this;
    }
  

});
/*
 * @example
* ~~~
* Crafty.e("2D,DOM,Player,Collision,SolidHitBox").collision(new Crafty.polygon([0,0],[0,300],[300,300])) 
* ~~~
* this will display a solid triangle over your original Canvas screen 
 */
Crafty.c("SolidHitBox", {
    init:function(){
        if (!Crafty.support.canvas) return;
        this.addC
        
        return this;
    }
});

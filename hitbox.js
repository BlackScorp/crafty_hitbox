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
        this.drawBoxes().bind("Change",function(){
            this._canvas.width =  this._canvas.width ;
         
            this.drawBoxes();
            
        })
         
    },
    drawBoxes:function(){
        var b,p,pl,box;
   
        this._ctx.beginPath();
        for( b in this._wiredBoxes){
       
            box = this._wiredBoxes[b];
            
          //  this._ctx.strokeStyle = box.color;
        
          
      
            for(var p = 0,pl = box.points.length;p<pl;p++){   
                var point = box.points[p];
                if(p > 0){
                   
                    this._ctx.lineTo(point[0],point[1]); 
                }else{
                  
                    this._ctx.moveTo(point[0],point[1]);
                }
            }
            
        }
        this._ctx.closePath();
        this._ctx.stroke();  
            
        this._ctx.beginPath();
        for( b in this._solidBoxes){
            box = this._solidBoxes[b];
            //this._ctx.fillStyle = box.color;
         
            for( p = 0,pl = box.points.length;p<pl;p++){
                point = box.points[p];
                if(p > 0){
                   
                    this._ctx.lineTo(point[0],point[1]); 
                }else{
                  
                    this._ctx.moveTo(point[0],point[1]);
                }
            }
          
        }
        this._ctx.closePath();
        this._ctx.fill(); 
  
        return this;
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

            this._wiredBoxes[this[0]] = {
                color:this.hitBoxColor || 'black',
                points: this.map.points 
            }
            
            
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
           
        this.requires("Collision,HitBox")
       
        .bind("RemoveComponent",function(id){
            delete(this._solidBoxes[id]);
        }).bind("EnterFrame",function(){
            if(!this._changed) return;
          
            this._solidBoxes[this[0]] = {
                color:this.hitBoxColor || 'black',
                points: this.map.points 
            }
            
            
        })
    
        
        return this;
    }
});

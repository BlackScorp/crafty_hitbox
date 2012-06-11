Crafty.c("HitBox",{
    _wiredBoxes:{},
    _solidBoxes:{},
    _ctx:null,
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
        this._ctx = c.getContext('2d');
      
        this.requires("Collision").bind("NewComponent",function(param){
            console.log(this.map);
            console.log(this.has('WiredHitBox'));
            console.log(this[0]);
        });
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
    _points:{},
    _ctx: null,
    init:function(){
        this.addComponent("HitBox");
        
       
        return this;
    },
    drawBox:function(){
        this._ctx.width = this._ctx.width;
        this._ctx.beginPath(); 
        for(var c in this._points){
            var points = this._points[c];
            for(var p in points){
                var point = points[p];
                if(p == 0){
                    this._ctx.moveTo(Crafty.viewport.x+point[0],Crafty.viewport.y+point[1]);   
                }else{
                    this._ctx.lineTo(Crafty.viewport.x+point[0],Crafty.viewport.y+point[1]);  
                }
                
            }
                     
        }
        this._ctx.closePath(); 
        this._ctx.stroke(); 
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

!function(a,i,s,o){a.vector=function(t,i){var n=Object.create(a.vector.prototype);return n._init(t,i),n},a.vector.prototype={_init:function(t,i){this._x=t||0,this._y=i||0},add:function(t,i){this._x+=(t.x||0)*(i||1),this._y+=(t.y||0)*(i||1)},clamp:function(t,i,n,e){this._clamp=!0,this._xMin=t!==o?t:-s,this._yMin=i!==o?i:-s,this._xMax=n!==o?n:s,this._yMax=e!==o?e:s},get x(){return this._x},get y(){return this._y},set x(t){this._x=this._clamp?i.min(i.max(this._xMin,t),this._xMax):t},set y(t){this._y=this._clamp?i.min(i.max(this._yMin,t),this._yMax):t}},a.sprite=function(t){var i=Object.create(a.sprite.prototype);return i.init(t),i},a.sprite.prototype={init:function(t){var i,n,e,s=this;for(var o in t=t||{},s.position=s.position||a.vector(),s.velocity=s.velocity||a.vector(),s.acceleration=s.acceleration||a.vector(),s.position._init(t.x,t.y),s.velocity._init(t.dx,t.dy),s.acceleration._init(t.ddx,t.ddy),s.width=s.height=0,t)s[o]=t[o];if(s.ttl=t.ttl||0,s.context=t.context||a.context,s.advance=s._advance,s.draw=s._draw,a._isImage(i=t.image))s.image=i,s.width=i.width,s.height=i.height,s.draw=s._drawImg;else if(i=t.animations){for(var h in s.animations={},i)n=i[h],s.animations[h]=n.clone?n.clone():n,e||(e=s.animations[h]);s.currentAnimation=e,s.width=e.width,s.height=e.height,s.advance=s._advanceAnim,s.draw=s._drawAnim}},get x(){return this.position.x},get y(){return this.position.y},get dx(){return this.velocity.x},get dy(){return this.velocity.y},get ddx(){return this.acceleration.x},get ddy(){return this.acceleration.y},set x(t){this.position.x=t},set y(t){this.position.y=t},set dx(t){this.velocity.x=t},set dy(t){this.velocity.y=t},set ddx(t){this.acceleration.x=t},set ddy(t){this.acceleration.y=t},isAlive:function(){return 0<this.ttl},collidesWith:function(t){return this.x<t.x+t.width&&this.x+this.width>t.x&&this.y<t.y+t.height&&this.y+this.height>t.y},update:function(t){this.advance(t)},render:function(){this.draw()},playAnimation:function(t,i){i=i==o||i,this.currentAnimation=this.animations[t],(this.currentAnimation.loop=i)||(this.currentAnimation._frame=0)},_advance:function(t){this.velocity.add(this.acceleration,t),this.position.add(this.velocity,t),this.ttl--},_advanceAnim:function(t){this._advance(t),this.currentAnimation.update(t)},_draw:function(){this.context.fillStyle=this.color,this.context.fillRect(this.x,this.y,this.width,this.height)},_drawImg:function(){this.context.drawImage(this.image,this.x,this.y)},_drawAnim:function(){this.currentAnimation.render({context:this.context,x:this.x,y:this.y})}}}(kontra,Math,1/0);
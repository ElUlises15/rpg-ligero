export const rooms=[{name:'El umbral',x:0,y:0},{name:'Pastizal hundido',x:1,y:0},{name:'La tapera',x:2,y:0},{name:'Paso del viento',x:3,y:0},{name:'El aljibe',x:3,y:1},{name:'Raíces viejas',x:2,y:1},{name:'Último fogón',x:1,y:1},{name:'El Guardián del Ombú',x:0,y:1}];
export const links=i=>rooms.map((r,j)=>({j,dx:r.x-rooms[i].x,dy:r.y-rooms[i].y})).filter(r=>Math.abs(r.dx)+Math.abs(r.dy)===1);
export function doors(i){return links(i).map(l=>({...l,x:l.dx===1?900:l.dx===-1?60:480,y:l.dy===1?480:l.dy===-1?60:270}))}
export const obstacles=[{x:240,y:180,r:24},{x:720,y:180,r:24},{x:240,y:365,r:24},{x:720,y:365,r:24}];

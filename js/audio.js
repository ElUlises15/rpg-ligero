export class AudioEngine{
 constructor(){this.muted=false;this.step=0;this.ctx=null;this.timer=null}
 unlock(){if(!this.ctx){this.ctx=new (window.AudioContext||window.webkitAudioContext)();this.timer=setInterval(()=>this.music(),190)}this.ctx.resume()}
 tone(freq,duration=.1,type='square',volume=.035,slide=0){if(!this.ctx||this.muted)return;const t=this.ctx.currentTime,o=this.ctx.createOscillator(),g=this.ctx.createGain();o.type=type;o.frequency.setValueAtTime(freq,t);if(slide)o.frequency.exponentialRampToValueAtTime(Math.max(30,freq+slide),t+duration);g.gain.setValueAtTime(volume,t);g.gain.exponentialRampToValueAtTime(.0001,t+duration);o.connect(g);g.connect(this.ctx.destination);o.start(t);o.stop(t+duration)}
 play(name){const s={shoot:[700,.07,'square',.022,-400],slash:[230,.15,'sawtooth',.035,-170],dash:[460,.12,'triangle',.06,400],hit:[120,.16,'sawtooth',.05,-80],death:[200,.18,'square',.03,-150],pickup:[850,.15,'sine',.06,500],door:[300,.25,'triangle',.05,300],telegraph:[160,.4,'sawtooth',.03,200],victory:[660,.7,'triangle',.08,660],defeat:[240,1,'sawtooth',.05,-190]};this.tone(...(s[name]||s.hit))}
 music(){const notes=[130.81,0,196,261.63,155.56,0,196,233.08,174.61,0,261.63,349.23,155.56,196,233.08,196];let n=notes[this.step++%notes.length];if(n)this.tone(n,.23,'triangle',.018);if(this.step%4===0)this.tone(65.4,.13,'square',.012)}
}

let galleryTimeline= document.querySelector('.gallery-timeline')
let gallery = document.querySelector('.gallery')

gallery.animate([
  {opacity:0,offset:0},
  {opacity:1,offset:0.04},
  {transform:'translateX(0)', offset:0.1},
  {transform:'translateX(calc(-100% + 100vw))' ,offset:0.9},
  {opacity:1,offset:0.9},
  {opacity:0,transform:'translateX(calc(-100% + 100vw))',offset:1},

],{
  fill: 'both',
  timeline: new ScrollTimeline({
      scrollOffsets: [
         {target:galleryTimeline, edge:'start',threshold:1},
         {target:galleryTimeline, edge:'end',threshold:1},
      ]
  })
});

//구역은 cssunit 긴영역 target
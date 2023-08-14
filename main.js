document.body.animate([
  {backgroundColor:'midnightblue'},
  {backgroundColor:'#7eb0d7'},
  {backgroundColor:'rgb(239, 239, 50)'},
],{
  fill: 'both',
  timeline: new ScrollTimeline({
      scrollOffsets: [
         {target:document.body,edge:"start",threshold:1},
         {target:document.body,edge:"end",threshold:1}
      ]
  })
})
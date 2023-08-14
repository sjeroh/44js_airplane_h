let textBlock=document.querySelectorAll('.text-block');
let pageContent=document.querySelectorAll('.page-content')


textBlock.forEach((item)=>{
  let textTop = item.offsetTop; //img의 상단 스크롤값
  let textHeight = item.offsetHeight; //img의 높이값
  // console.log(imageTop)

  let offset1=textTop + textHeight - window.innerHeight;
  let offset2=textTop; 
  item.animate([
    {opacity:0, transform:'scale(.5)',offset:0},
    {opacity:0, transform:'scale(.5)',offset:0.17},
    {opacity:1, transform:'scale(1.2)',offset:0.2},
    {opacity:1, transform:'scale(1)',offset:.3},
  ],{
    timeline: new ScrollTimeline({
      scrollOffsets: [
          new CSSUnitValue(offset1, 'px'),
          new CSSUnitValue(offset2, 'px')
      ]
  })
  })
})


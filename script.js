// var st=0;
// var dest=1500;
// var scrol=setInterval(function(){
//     if(st>=dest)
//     {
//         clearInterval(scrol);
//         return;
//     }
//     st+=50;
//     window.scrollBy(0,50);
// },50
// )
var navmenuanchortags=document.querySelectorAll('#navbar a');
var interval;
for(var i=0;i<navmenuanchortags.length;i++)
{
   navmenuanchortags[i].addEventListener('click',function(event)
   {
       event.preventDefault();
       var target_section_id=this.textContent.trim().toLowerCase();
       var target_section=document.getElementById(target_section_id);
      // interval=setInterval(scrollvertical,50,target_section);
      interval=setInterval(function(){
          scrollvertical(target_section);
      },50)
   });
}
function scrollvertical(target_section)
       {
           var targetcoordinates=target_section.getBoundingClientRect();
           if(targetcoordinates.top<=0)
           {
               clearInterval(interval);
               return;
           }
           window.scrollBy(0,50);

       }
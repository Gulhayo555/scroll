const div =document.querySelector('.div'),
img =document.querySelectorAll('.img')

div.addEventListener('mousemove', (e) => {
    for (let i = 0; i < img.length; i++) {
        const images = img[i];
       let speed = images.getAttribute('data-speed')
       let x =(window.innerWidth - e.pageX * speed) / 10
       let y = (window.innerHeight - e.pageY * speed) / 10
       images.style.transform=`translate(${x}px,${y}px)` 
    }
})

window.addEventListener('scroll',()=> {
    let content = document.querySelector('.row');
    let contentPosition =content.getBoundingClientRect().top;
    let screenPosition = window.innerHeight;
  if(contentPosition < screenPosition){
     content.classList.add('active');
  }else{
      content.classList.remove('active');
  }   
})

// const box =document.querySelectorAll('.box');
// const scrollAnmation = () => {
//     let windowCenter = (window.innerHeight/4) +  window.scrollY;
//     box.forEach(el =>  {
//         let scrollOfffset = el.offsetTop + el.offsetHeight;
//         if(windowCenter >= scrollOfffset){
//             el.classList.add('animation-class');
//         }
//         else{
//             el.classList.remove('animation-class')
//         }
//     })
// }
// window.addEventListener('scroll',()=> {
//     let content = document.querySelector('.box');
//     let contentPosition =content.getBoundingClientRect().top;
//     let screenPosition = window.innerHeight;
//   if(contentPosition < screenPosition){
//      content.classList.add('active');
//   }else{
//       content.classList.remove('active');
//   }   
// })
// const cards = document.querySelectorAll(".box")


// cards.forEach(card => {
//     card.addEventListener("mousemove", rotate)
//     card.addEventListener('mouseout', remove)

// })
// function rotate(e) {
//     let halfHeight = this.clientHeight / 2
//     let x = e.offsetX - halfHeight
//     let y = e.offsetY - halfHeight
//     this.innerHTML = `${x}X ${y}Y`
//     this.style.transform = `rotateY(${(e.offsetX - halfHeight) / 2}deg)
//      rotateX(${-(e.offsetY - halfHeight) / 2}deg)`
   

// }
// function remove() {
//     this.style.transform = `rotate(0)`
// }
window.addEventListener('scroll', reveal);
function reveal() {
    let reveals =document.querySelectorAll('reveal');
for (let i = 0; i < reveals.length; i++) {
   let windowheight = windowinnerHeight;
   let revealTop = reveals [i].getBoundingClientRect().top;
 
   if(revealTop < windowheight ){
    reveals[i].classList.add('active');
   }
   else{
    reveals[i].classList.remove('active');
   }
    
}
}
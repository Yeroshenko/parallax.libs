document.addEventListener("DOMContentLoaded", () => {

  let parallaxContainer = document.querySelector('#parallax'),
      layers = parallaxContainer.children;

  function moveLayers (e) {
    let initialX = (window.innerWidth / 2) - e.pageX,
        initialY = (window.innerHeight / 2) - e.pageY;

      // [].slice.call() => node list to array
    [].slice.call(layers).forEach((layer, i) => { 
      
      let divider = i / 100,
          positionX = initialX * divider,
          positionY = initialY * divider,
          bottomPosition = (window.innerHeight / 2) * divider;

      layer.style.transform = `translate(${positionX}px, ${positionY}px)`;  
      layer.style.bottom = ` -${bottomPosition}px`; 
    });
    
  } 

  parallaxContainer.addEventListener('mousemove', moveLayers);

});
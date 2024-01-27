import { useEffect, useRef } from "react"


function App() {
  const Kass=useRef();
 
    
    useEffect(() => {
      Kass.current.classList.add('my-swiper');
      const swiperContainer = Kass.current;
      const params = {
        navigation: true,
        pagination: {clickable: true},
        autoplay:true,
        between:true,
        loop:true,
      
        injectStyles: [
          `
            .swiper-button-next,
            .swiper-button-prev {
              background-color: white;
              border-radius: 100%;
              height:15px;
              
              
              padding: 10px 0px;
              color: red;
              opacity: 1;
              box-shadow: 0px 0px 1px black;
            }
            .swiper-pagination-bullet{
              width: 10px;
              height: 10px;
              background-color: #d61111;
            }
        `,
        ],
      };
  
      Object.assign(swiperContainer, params);
      swiperContainer.initialize();
    }, []);




 
  return (
    <div>
        <div>
        <swiper-container  ref={Kass} init='false'>
      <swiper-slide><img  width='1106px' height='382px' src="https://olcha.uz/image/original/sliders/ru/IIaKyWM5cK6qt7ncVEhw00Aa48wXHebi4USuJ1M5hB7BxNxeUSWxzceNFZqy.png" alt="Datum"/></swiper-slide>
        <swiper-slide><img width='1106px' height='382px' src="https://olcha.uz/image/original/sliders/ru/SItyAYnDK7Lf0tlhQhIYBxuEqHSYbia6oVocOAqdRa98ucDibE2oV0WJvyjs.jpg" alt="Mechta"/></swiper-slide>
        <swiper-slide><img width='1106px' height='382px' src="https://olcha.uz/image/original/sliders/ru/gAE8FE4Ev0aqgB8KiLGYebqsSbi63aqDCV1BeRxUBi63xHfgfK95ThYhFBvE.jpg" alt="Samsung Galaxy S24 Ultra"/></swiper-slide>

        <swiper-slide><img width='1106px' height='382px' src="https://olcha.uz/image/original/sliders/ru/etALz7NufgJ8sFKv7ZZgJJPIbCk3ka6pnDQt5brev1etacWH3Vvfl6Xuxa8Q.png" alt="Armada"/></swiper-slide>
      </swiper-container>
        </div>
        
    </div>
  )
}

export default App
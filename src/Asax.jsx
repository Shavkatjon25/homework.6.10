import { useEffect, useRef } from "react"


function Asax() {
  const Kass=useRef();
 
    
    useEffect(() => {
      Kass.current.classList.add('asax');
      const swiperContainer = Kass.current;
      const params = {
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
              background-color: #007aff;
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
      <swiper-slide><img class="big-ad-photo swiper-lazy swiper-lazy-loaded" src="https://assets.asaxiy.uz/uploads/banner/desktop/65a25a1a47217.jpg.webp"/></swiper-slide>
        <swiper-slide><img class="big-ad-photo swiper-lazy swiper-lazy-loaded" src="https://assets.asaxiy.uz/uploads/banner/desktop/6543816c3296a.jpg.webp"/></swiper-slide>
        <swiper-slide><img class="big-ad-photo swiper-lazy swiper-lazy-loaded" src="https://assets.asaxiy.uz/uploads/banner/desktop/6569b37943029.jpg.webp"/></swiper-slide>
        <swiper-slide><img class="big-ad-photo swiper-lazy swiper-lazy-loaded" src="https://assets.asaxiy.uz/uploads/banner/desktop/659d2b48deb64.jpg.webp"/></swiper-slide>
      </swiper-container>
      
        </div>
        
    </div>
  )
}

export default Asax
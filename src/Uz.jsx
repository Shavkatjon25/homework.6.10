import { useEffect, useRef } from "react"


function Uz() {
  const Kass=useRef();
 const vaqt = useRef();
    
    useEffect(() => {
      Kass.current.classList.add('asx');
      const swiperContainer = Kass.current;
      const params = {
        cssMode:true,
        slidesPerView:3,
        centeredSlides:true,
    
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
        <div className="vaq">
            <h2>Hafta chegirmalari</h2>
        </div>
        <div>
        <swiper-container  ref={Kass} init='false'>
      <swiper-slide><img width='180px' height='130px' src="https://assets.asaxiy.uz/product/main_image/desktop//64ccab7316b29.jpg.webp" alt="Jmary FM-19RS halqasimon yoritgichi"/>
      <h2>Jmary FM-19RS halqasimon yoritgichi</h2>
      <span>2 199 000 cum</span>
      <h3>1 839 600 cum </h3>
      <p> 31.01.2024</p>
      </swiper-slide>
        <swiper-slide><img width='180px' height='130px'  src="https://assets.asaxiy.uz/product/main_image/desktop//6440e9659a5e6.png.webp" alt="Samsung Galaxy A54 8/256GB Qora Smartfoni"/>
        <h2>Samsung Galaxy A54 8/256GB Qora Smartfoni</h2>
        <span>199 000 cum</span>
      <h3>99 900 cum </h3>
      <p> 31.01.2024</p>
        </swiper-slide>
        <swiper-slide><img width='180px' height='130px'  src="https://assets.asaxiy.uz/product/main_image/desktop//6486d1d7bca49.jpg.webp" alt="Uolter Ayzekson: Kod Buzar. Jennifer Daudna, gen tahrirlash va insoniyat kelajagi"/>
        <h2>Uolter Ayzekson: Kod Buzar. Jennifer Daudna, gen tahrirlash va insoniyat kelajagi</h2>
        <span>199 000 cum</span>
      <h3>99 900 cum </h3>
      <p> 31.01.2024</p>
        </swiper-slide>
        <swiper-slide><img width='180px' height='130px'  src="https://assets.asaxiy.uz/product/main_image/desktop//649aa4484983f.png.webp" alt="Borofone BW04 oq simsiz quloqchini"/>
        <h2>Borofone BW04 oq simsiz quloqchini</h2>
        <span>199 000 cum</span>
      <h3>99 900 cum </h3>
      <p> 31.01.2024</p>
        </swiper-slide>
        <swiper-slide><img width='180px' height='130px'  src="https://assets.asaxiy.uz/product/main_image/desktop//6501359c67211.jpg.webp" alt="IMMER IW80-14586BX (8 Kg) kir yuvish mashinasi"/>
        <h2>IMMER IW80-14586BX (8 Kg) kir yuvish mashinasi</h2>
        <span>199 000 cum</span>
      <h3>99 900 cum </h3>
      <p> 31.01.2024</p>
        </swiper-slide>
      </swiper-container>
        </div>
        
    </div>
  )
}

export default Uz
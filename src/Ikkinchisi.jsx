import { useEffect, useRef } from "react"


function Ikkinchisi() {
  const Kass=useRef();
 const vaqt = useRef();
    
    useEffect(() => {
        setInterval(()=>{
            if (vaqt.current.textContent==0) {
                vaqt.current.textContent=59
            }
            vaqt.current.textContent=+vaqt.current.textContent-1;
        }, 1000)
      Kass.current.classList.add('swiper');
      const swiperContainer = Kass.current;
      const params = {
        pagination: {clickable: true},
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
        <div className="vaq">
            <h2>Kun maxsulooti</h2>
            <div>
                <button>08</button>
                <b>:</b>
                <button>00</button>
                <b>:</b>
                <button ref={vaqt}>59</button>
            </div>
        </div>
        <div>
        <swiper-container  ref={Kass} init='false'>
      <swiper-slide><img data-v-1652a094="" src="https://olcha.uz/image/220x220/products/supplier/stores/1/2023-12-23/q83Edxivqrbv6HH5uUbfy0enCdrwsgu4PCaqWOBSQZQfvZyVo9xw0zcecZE8.jpg" width="220" height="220" alt="Honor X6a Black 4/128 GB" title="Honor X6a Black 4/128 GB"/>
      <h2>Honor X6a Black 4/128GB</h2>
      <h3>1 839 600 cum <span>2 199 000 cum</span></h3>
      <p> 238 000 cum x 12 mec</p>
      </swiper-slide>
        <swiper-slide><img data-v-1652a094="" src="https://cdn.olcha.uz/image/220x220/products//rpc/terrapro/2024-01-26/qynIPQXQ4ThnLmyqGCJae45hMP8lfekqq9SU0ZcdKE7P39hVxWn62AcKSEaPXJnm.jpg" width="220" height="220" alt="Женское боди SS24WES-21114" title="Женское боди SS24WES-21114"/>
        <h2>Ayollar kiyimi</h2>
      <h3>99 900 cum <span>199 000 cum</span></h3>
      <p> 19 900 cum x 12 mec</p>
        </swiper-slide>
      </swiper-container>
        </div>
        
    </div>
  )
}

export default Ikkinchisi
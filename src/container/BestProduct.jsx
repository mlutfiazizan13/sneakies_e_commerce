import React, { useEffect } from "react"
import Glide from "@glidejs/glide"
import "@glidejs/glide/dist/css/glide.core.min.css"
import { NumericFormat } from "react-number-format";
import ProductCard from "../components/ProductCard";
// import "@glidejs/glide/dist/css/glide.theme.min.css";

const sliderConfiguration= {
    perView: 5,
    startAt: 0,
    type: "carousel",
    // autoplay: 3000,
    // rewind: true,
  };

  

const BestProduct = () => {

    


    useEffect(() => {
        const slider = new Glide('.glide', sliderConfiguration);
        window.addEventListener('load', (event) => {
            slider.mount()
        });
        
    }, [])

    const listProduct = [
        {
            id: 1,
            img: "https://www.newbalance.co.id/media/catalog/product/cache/c1feb3550df60acd013ba17bf29e4991/0/1/01-NEW-BALANCE-FFSSBNEW0-NEWBB550HA1D-White.jpg",
            title:'New Balance 550 Men Sneakers - White/Black',
            price: 2099000,
            rating: 400,
            sold: 250,
        },
        {
            id: 2,
            img: "https://www.newbalance.co.id/media/catalog/product/cache/144a401d4eb9f312744987a3cea154c3/0/1/01-NEW-BALANCE-FFSSBNEW0-NEWBB550PB1-White.jpg",
            title:"New Balance 550 Men's Sneakers - White",
            price: 500000,
            rating: 200,
            sold: 250,
        },
        {
            id: 3,
            img: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/disuwww5uxkqulu2aivh/air-max-plus-iii-shoes-Qw64gh.png",
            title:'Nike Air Max Plus III',
            price: 2989000,
            rating: 200,
            sold: 250,
        },
        {
            id: 4,
            img: "https://www.adidas.co.id/media/catalog/product/cache/3bec5fdb79d91223b1a151be2b21ce8d/i/d/id4793_2_footwear_photography_side_lateral_view_grey.jpg",
            title:'Campus Supreme Atmos Shoes',
            price: 2200000,
            rating: 200,
            sold: 250,
        },
        {
            id: 5,
            img: "https://www.adidas.co.id/media/catalog/product/cache/3bec5fdb79d91223b1a151be2b21ce8d/f/x/fx5500_2_footwear_photography_side20lateral20view_grey.jpg",
            title:'Stan Smith Shoes',
            price: 1700000,
            rating: 200,
            sold: 250,
        },

    ].map( ({id,img, title, price, rating, sold}) => {
        return <li className="glide__slide slider"><ProductCard key={`glide_${id}`} id={id} img={img} title={title} price={price} rating={rating} sold={sold}/> </li>
    });

    

    return ( 
        <>
        {" "}
        <div className='glide w-full relative'>
            <div className='glide__track' data-glide-el='track'>
                <ul className='glide__slides'>
                    {listProduct}
                </ul>
            </div>
            <div className='glide__arrows' data-glide-el='controls'>
                <button className='glide__arrow absolute -left-4 top-1/2 inline-flex h-8 w-8 items-center text-white justify-center rounded-full bg-[#B0A11A] hover:bg-[#B0A11A] focus:outline-none focus:ring-2 focus:ring-white sm:h-10 sm:w-10' data-glide-dir='<'><i className="fas fa-chevron-left"></i></button>
                <button className='glide__arrow absolute -right-4 top-1/2 inline-flex h-8 w-8 items-center text-white justify-center rounded-full bg-[#B0A11A] hover:bg-[#B0A11A] focus:outline-none focus:ring-2 focus:ring-white sm:h-10 sm:w-10' data-glide-dir='>'><i className="fas fa-chevron-right"></i></button>
            </div>
      </div>
      </>
     );
}
 
export default BestProduct;
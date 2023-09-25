import { Fragment } from "react";
import ProductCard from "../components/ProductCard";

const ProductContainer = () => {

    const data = [
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
        return <ProductCard key={id} id={id} img={img} title={title} price={price} rating={rating} sold={sold}/>
    });

    return ( 
        <Fragment>
            <div id="content-container">
                {/* <p className='text-4xl font-bold text-[#3789E5] text-center py-20' data-aos="fade-up" data-aos-duration="3000">Content</p> */}
                <div className="flex items-end uppercase mb-10">
                    <p className='text-2xl text-[#B0A11A] font-medium'>Latest Products</p>
                    {/* <div className="border-l border-black"></div> */}
                    <p className='text-base ml-3 font-medium'>View More</p>
                </div>

                <div className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5  gap-5'>
                {/* <div className=''> */}
                    {data}
                </div>
            </div>
        </Fragment>
    );
}
 
export default ProductContainer;
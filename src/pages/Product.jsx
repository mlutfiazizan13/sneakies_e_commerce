import { Component } from "react";
import FilterAccordion from "../components/FilterAccordion";
import ProductContainer from "../container/ProductContainer";


class Product extends Component {
    state = {  } 
    render() { 
        return ( 
            <div className="mx-20 my-10"> 
                <nav className="flex justify-between uppercase text-sm mb-3" aria-label="Breadcrumb">
                    <ol className="inline-flex items-center mb-3 sm:mb-0">
                        <li>
                        Home
                        </li>
                        <span className="mx-2 text-gray-400">/</span>
                        <li aria-current="page">
                            Product
                        </li>
                    </ol>
                </nav>
    
                <div className="flex gap-5">
                    <div className="hidden lg:block">
                        <p className="uppercase font-medium">Filter</p>
                        <div className="w-52">
                            <FilterAccordion/>
                        </div>
                    </div>
                    <div className="">
                        {/* <Outlet/> */}
                        <ProductContainer/>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default Product;

// const Product = () => {
    
// }
 
// export default Product;
import { Fragment } from "react";
import { NumericFormat } from 'react-number-format';

const ProductCard = (props) => {
    return ( 
        <Fragment>
                <div id={props.id} className="max-w-sm bg-white hover:border-2 hover:border-[#B0A11A]">
                    <a href="/" className="">
                        {/* <img className="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" /> */}
                        <img src={props.img} className="w-full" alt="" />

                            {/* <div className="h-52 w-full rounded-t-md bg-green-700"></div> */}
                    </a>
                    <div className="px-2 py-4 ">
                        <a href="/">
                            <h5 className="text-ellipsis overflow-hidden mb-2 text-base text-gray-900 ">{props.title}</h5>
                        </a>
                        {/* <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p> */}
                        <p className="font-medium text-lg"> <NumericFormat value={props.price} displayType={'text'} thousandSeparator="." decimalSeparator="," prefix={'Rp'} /></p>
                
                    </div>
                </div>
        </Fragment>
     );
}
 
export default ProductCard;
// import React from 'react';
const sizes = [{size: "US 7"},{size: "US 7.5"},{size: "US 8"},{size: "US 8.5"},{size: "UK 39"},{size: "UK 40"},{size: "UK 41"}];
const types = [{type: "Lifestyle"}, {type: "Sports"}, {type: "Basketball"}];

const Checkbox = (props) => {
    return ( 
        <>
        <div class="flex items-center mb-4">
            <input id={props.data} type="checkbox" value="" class="w-4 h-4 text-[#B0A11A] border-gray-300"></input>
            <label for={props.data} class="ml-2 font-medium text-gray-900 dark:text-gray-300">{props.data}</label>
        </div>
        </>
     );
}

const FilterAccordion = () => {
    return ( 
        <div id="accordion-flush">
            <h2 id="accordion-flush-heading-1">
                <button type="button" class="flex items-center justify-between w-full py-5 font-medium text-left text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400">
                <span className="text-sm">Size</span>
                {/* <i class="fas fa-plus"></i> */}
                    <i class="fas fa-minus"></i>
                </button>
            </h2>
            <div id="accordion-flush-body-1" class="block" aria-labelledby="accordion-flush-heading-1">
                <div class="py-5 text-xs border-b border-gray-200 dark:border-gray-700">
                    {sizes.map(({size}) => {
                        return <Checkbox data={size}></Checkbox>
                    } )}
                </div>
            </div>

            <h2 id="accordion-flush-heading-1">
                <button type="button" class="flex items-center justify-between w-full py-5 font-medium text-left text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400">
                <span className="text-sm">Type</span>
                {/* <i class="fas fa-plus"></i> */}
                    <i class="fas fa-minus"></i>
                </button>
            </h2>
            <div id="accordion-flush-body-1" class="block" aria-labelledby="accordion-flush-heading-1">
                <div class="py-5 text-xs border-b border-gray-200 dark:border-gray-700">
                {types.map(({type}) => {
                        return <Checkbox data={type}></Checkbox>
                    } )}
                </div>
            </div>
            <h2 id="accordion-flush-heading-1">
                <button type="button" class="flex items-center justify-between w-full py-5 font-medium text-left text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400">
                <span className="text-sm">Category</span>
                {/* <i class="fas fa-plus"></i> */}
                    <i class="fas fa-minus"></i>
                </button>
            </h2>
            <div id="accordion-flush-body-1" class="block" aria-labelledby="accordion-flush-heading-1">
                <div class="py-5 text-xs border-b border-gray-200 dark:border-gray-700">
                    <div class="flex items-center mb-4 w-full">
                        <input id="category-men" type="checkbox" value="" class="w-4 h-4 text-[#B0A11A] border-gray-300"></input>
                        <label for="category-men" class="ml-2 font-medium text-gray-900 dark:text-gray-300">Men</label>
                    </div>
                    <div class="flex items-center mb-4">
                        <input id="category-kids" type="checkbox" value="" class="w-4 h-4 text-[#B0A11A] border-gray-300"></input>
                        <label for="category-kids" class="ml-2 font-medium text-gray-900 dark:text-gray-300">Kids</label>
                    </div>
                    <div class="flex items-center mb-4">
                        <input id="category-woman" type="checkbox" value="" class="w-4 h-4 text-[#B0A11A] border-gray-300"></input>
                        <label for="category-woman" class="ml-2 font-medium text-gray-900 dark:text-gray-300">Women</label>
                    </div>
                </div>
            </div>
            
        </div>

    );
}
 
export default FilterAccordion;
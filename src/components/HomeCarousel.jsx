import { Carousel } from "flowbite-react";
import { CustomFlowbiteTheme } from "flowbite-react";

const customCarousel: CustomFlowbiteTheme = {
  "root": {
    "base": "relative h-full w-full",
    "leftControl": "absolute top-0 left-0 flex h-full items-center justify-center px-4 focus:outline-none",
    "rightControl": "absolute top-0 right-0 flex h-full items-center justify-center px-4 focus:outline-none"
  },
  "indicators": {
    "active": {
      "off": "bg-white/50 hover:bg-white dark:bg-gray-800/50 dark:hover:bg-gray-800",
      "on": "bg-white dark:bg-gray-800"
    },
    "base": "h-2 w-2 rounded-full",
    "wrapper": "absolute bottom-5 right-2 flex -translate-x-1/2 space-x-1"
  },
  "item": {
    "base": "absolute top-1/2 left-1/2 block w-full -translate-x-1/2 -translate-y-1/2",
    "wrapper": "w-full flex-shrink-0 transform cursor-grab snap-center"
  },
  "control": {
    "base": "inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/30 group-hover:bg-white/50 group-focus:outline-none group-focus:ring-4 group-focus:ring-white dark:bg-gray-800/30 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70 sm:h-10 sm:w-10",
    "icon": "h-5 w-5 text-white dark:text-gray-800 sm:h-6 sm:w-6"
  },
  "scrollContainer": {
    "base": "flex h-full snap-mandatory overflow-y-hidden overflow-x-scroll scroll-smooth rounded-lg",
    "snap": "snap-x"
  }
};


const HomeCarousel = () => {
    return ( 
        <Carousel theme={customCarousel}>
            <img
                alt="..."
                src="https://www.sweelee.co.id/cdn/shop/files/SLID_Fender_Player_Player_Plus_New_Finishes_Non-Full-Width-Slideshow_Desktop_1110X333_1x_2220x666_2x_1_2200x660_crop_top.jpg?v=1692585525"
            />
            <img
                alt="..."
                src="https://www.newbalance.co.id/media/weltpixel/owlcarouselslider/images/r/u/run_better_run_faster.jpg"
            />
            <img
                alt="..."
                src="https://www.newbalance.co.id/media/weltpixel/owlcarouselslider/images/s/e/secondary_banner_copy_3__4.jpg"
            />
            <img
                alt="..."
                src="https://www.newbalance.co.id/media/weltpixel/owlcarouselslider/images/s/e/secondary_banner_copy_4__2.jpg"
            />
            <img
                alt="..."
                src="https://www.sweelee.co.id/cdn/shop/files/SL_Surabaya_MONO_Power_Supply_Non-Full-Width_Slideshow_Desktop_1110X333_1x_2220x666_2x_2c91e30e-69ca-44d0-99a7-ce1db0c222aa_2200x660_crop_top.jpg?v=1690797084"
            />
        </Carousel>
     );
}
 
export default HomeCarousel;
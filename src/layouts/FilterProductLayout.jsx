import { Accordion } from "flowbite-react";
import { CustomFlowbiteTheme } from "flowbite-react";
import { Outlet } from "react-router-dom";

const customAccordion: CustomFlowbiteTheme = {
    "root": {
      "base": "divide-gray-200 border-gray-200 dark:divide-gray-700 dark:border-gray-700",
      "flush": {
        "off": "",
        "on": "border-b"
      }
    },
    "content": {
      "base": "py-5 px-5 dark:bg-gray-900"
    },
    "title": {
      "arrow": {
        "base": "h-6 w-6 shrink-0",
        "open": {
          "off": "",
          "on": "rotate-180"
        }
      },
      "base": "flex w-full items-center justify-between py-5 px-5 text-left font-medium text-gray-500 dark:text-gray-400",
      "flush": {
        "off": "",
        "on": "bg-black dark:bg-transparent"
      },
      "heading": "",
      "open": {
        "off": "",
        "on": "text-gray-900 bg-gray-100 dark:bg-gray-800 dark:text-white"
      }
    }
  };

const FilterProductLayout = () => {
    return ( 
        <>
        <div className="mx-20 my-10"> 
            <nav class="flex justify-between uppercase text-sm mb-3" aria-label="Breadcrumb">
                <ol class="inline-flex items-center mb-3 sm:mb-0">
                    <li>
                    Home
                    </li>
                    <span class="mx-2 text-gray-400">/</span>
                    <li aria-current="page">
                        Product
                    </li>
                </ol>
            </nav>

            <div className="flex justify-normal">
                <div className="flex-1">
                    
                    <Accordion theme={{ theme: customAccordion }} collapseAll>
                        <Accordion.Panel>
                            <Accordion.Title>
                            What is Flowbite?
                            </Accordion.Title>
                            <Accordion.Content>
                            <p className="mb-2 text-gray-500 dark:text-gray-400">
                                <p>
                                Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons,
                                dropdowns, modals, navbars, and more.
                                </p>
                            </p>
                            <p className="text-gray-500 dark:text-gray-400">
                                <p>
                                Check out this guide to learn how to 
                                </p>
                                <a
                                className="text-cyan-600 hover:underline dark:text-cyan-500"
                                href="https://flowbite.com/docs/getting-started/introduction/"
                                >
                                <p>
                                    get started
                                </p>
                                </a>
                                <p>
                                and start developing websites even faster with components on top of Tailwind CSS.
                                </p>
                            </p>
                            </Accordion.Content>
                        </Accordion.Panel>
                        <Accordion.Panel>
                            <Accordion.Title>
                            Is there a Figma file available?
                            </Accordion.Title>
                            <Accordion.Content>
                            <p className="mb-2 text-gray-500 dark:text-gray-400">
                                <p>
                                Flowbite is first conceptualized and designed using the Figma software so everything you see in the library
                                has a design equivalent in our Figma file.
                                </p>
                            </p>
                            <p className="text-gray-500 dark:text-gray-400">
                                <p>
                                Check out the
                                </p>
                                <a
                                className="text-cyan-600 hover:underline dark:text-cyan-500"
                                href="https://flowbite.com/figma/"
                                >
                                <p>
                                    Figma design system
                                </p>
                                </a>
                                <p>
                                based on the utility classes from Tailwind CSS and components from Flowbite.
                                </p>
                            </p>
                            </Accordion.Content>
                        </Accordion.Panel>
                        <Accordion.Panel>
                            <Accordion.Title>
                            What are the differences between Flowbite and Tailwind UI?
                            </Accordion.Title>
                            <Accordion.Content>
                            <p className="mb-2 text-gray-500 dark:text-gray-400">
                                <p>
                                The main difference is that the core components from Flowbite are open source under the MIT license, whereas
                                Tailwind UI is a paid product. Another difference is that Flowbite relies on smaller and standalone
                                components, whereas Tailwind UI offers sections of pages.
                                </p>
                            </p>
                            <p className="mb-2 text-gray-500 dark:text-gray-400">
                                <p>
                                However, we actually recommend using both Flowbite, Flowbite Pro, and even Tailwind UI as there is no
                                technical reason stopping you from using the best of two worlds.
                                </p>
                            </p>
                            <p className="mb-2 text-gray-500 dark:text-gray-400">
                                Learn more about these technologies:
                            </p>
                            <ul className="list-disc pl-5 text-gray-500 dark:text-gray-400">
                                <li>
                                <a
                                    className="text-cyan-600 hover:underline dark:text-cyan-500"
                                    href="https://flowbite.com/pro/"
                                >
                                    <p>
                                    Flowbite Pro
                                    </p>
                                </a>
                                </li>
                                <li>
                                <a
                                    className="text-cyan-600 hover:underline dark:text-cyan-500"
                                    href="https://tailwindui.com/"
                                    rel="nofollow"
                                >
                                    <p>
                                    Tailwind UI
                                    </p>
                                </a>
                                </li>
                            </ul>
                            </Accordion.Content>
                        </Accordion.Panel>
                    </Accordion>

                </div>
                <div className="flex-grow">
                    <Outlet/>
                </div>
            </div>
        </div>
        </>
     );
}
 
export default FilterProductLayout;
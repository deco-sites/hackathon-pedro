import Modals from "$store/islands/HeaderModals.tsx";
import type { Image } from "deco-sites/std/components/types.ts";
import type { EditableProps as SearchbarProps } from "$store/components/search/Searchbar.tsx";
import type { LoaderReturnType } from "$live/types.ts";
import type { Product, Suggestion } from "deco-sites/std/commerce/types.ts";
import type { ClientConfigVTEX } from "deco-sites/std/functions/vtexConfig.ts";

import Alert from "./Alert.tsx";
import Navbar from "./Navbar.tsx";
import { headerHeight } from "./constants.ts";

export interface NavItem {
  label: string;
  href: string;
  children?: Array<{
    label: string;
    href: string;
    children?: Array<{
      label: string;
      href: string;
    }>;
  }>;
  image?: {
    src?: Image;
    alt?: string;
  };
}

export interface Props {
  alerts: string[];
  /** @title Search Bar */
  searchbar?: SearchbarProps;
  /**
   * @title Navigation items
   * @description Navigation items used both on mobile and desktop menus
   */
  navItems?: NavItem[];

  /**
   * @title Product suggestions
   * @description Product suggestions displayed on search
   */
  products?: LoaderReturnType<Product[] | null>;

  /**
   * @title Enable Top Search terms
   */
  suggestions?: LoaderReturnType<Suggestion | null>;

  /**
   * @description vtex config used for search autocompletion;
   */
  configVTEX?: LoaderReturnType<ClientConfigVTEX>;
}

function Header(
  {
    alerts,
    searchbar: _searchbar,
    products,
    navItems = [],
    suggestions,
    configVTEX,
  }: Props,
) {
  const searchbar = { ..._searchbar, products, suggestions, configVTEX };
  return (
    <header className="fixed top-0 z-50 bg-white w-full p-4">
      {/** Mobile */}
      <div class="flex items-center justify-between flex-wrap w-full">
        <div className="">
          <a href="/">
            <img
              src="https://newparquedpedro.vtexassets.com/assets/vtex/assets-builder/newparquedpedro.theme/2.2.4/logo-parque-d-pedro___92604ee61fe0f9d5068bc4676049f006.svg"
              alt="Logo"
            />
          </a>
        </div>
        <Navbar items={navItems} searchbar={searchbar} />
      </div>
      <div className="flex flex-row bg-gray-200 w-full rounded-lg mt-4">
        <div className="py-3 px-4 w-[114px] bg-gray-200 rounded-lg">
          <p className="font-medium text-sm">Produtos</p>
        </div>
        <div className="flex relative w-full rounded-lg">
          <input
            className="flex flex-row bg-gray-100 w-full h-full pl-4 text-sm outline-none placeholder:font-bold placeholder:text-gray-700 placeholder:text-sm"
            placeholder="Pesquise um produto"
          />
          <button className="bg-transparent border-none m-0 p-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6 absolute right-2 top-1/4"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </button>
        </div>
      </div>

      <Modals
        menu={{ items: navItems }}
        searchbar={searchbar}
      />
    </header>
  );
}

export default Header;

import HeaderButton from "$store/islands/HeaderButton.tsx";
import type { Props as SearchbarProps } from "$store/components/search/Searchbar.tsx";
// import Icon from "$store/components/ui/Icon.tsx";
// import Button from "$store/components/ui/Button.tsx";

import type { INavItem } from "./NavItem.tsx";
// import NavItem from "./NavItem.tsx";
// import { navbarHeight } from "./constants.ts";
// import HeaderSearchMenu from "$store/islands/HeaderSearchMenu.tsx";

function Navbar({ items, searchbar }: {
  items: INavItem[];
  searchbar: SearchbarProps;
}) {
  const userIcon =
    "data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='18.969' height='21.03'%3E%3Cg data-name='Grupo 7' fill='none' stroke='%237f7f7f' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.939' transform='translate(-188.419 -65.849)'%3E%3Cpath data-name='Caminho 20' d='M189.388 85.909a8.519 8.519 0 0117.031 0'/%3E%3Cellipse data-name='Elipse 5' cx='3.725' cy='3.612' rx='3.725' ry='3.612' transform='translate(194.178 66.818)'/%3E%3C/g%3E%3C/svg%3E";
  return (
    <>
      {/** Mobile Version */}
      <nav className="flex gap-4">
        <button id="chat">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="21"
            viewBox="0 0 21 21"
            class="codeby-aliansce-sonae-0-x-chatBot codeby-aliansce-sonae-0-x-chatBot--header"
          >
            <g
              id="chatbot"
              transform="translate(-151.773 -65.864)"
              class="codeby-aliansce-sonae-0-x-customIconItem codeby-aliansce-sonae-0-x-customIconItem--header"
            >
              <path
                id="Caminho_19"
                data-name="Caminho 19"
                d="M169.7,66.818H154.848a2.121,2.121,0,0,0-2.121,2.121V79.546a2.121,2.121,0,0,0,2.121,2.121h12.727l4.242,4.242V68.939A2.121,2.121,0,0,0,169.7,66.818Z"
                fill="none"
                stroke="#7f7f7f"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.909"
              >
              </path>
              <g
                id="chatBotInner"
                data-name="chatBotInner"
                class="codeby-aliansce-sonae-0-x-chatBotInner codeby-aliansce-sonae-0-x-chatBotInner--header"
              >
                <circle
                  id="Elipse_2"
                  data-name="Elipse 2"
                  cx="1.193"
                  cy="1.193"
                  r="1.193"
                  transform="translate(156.307 72.784)"
                  fill="currentColor"
                >
                </circle>
                <circle
                  id="Elipse_3"
                  data-name="Elipse 3"
                  cx="1.193"
                  cy="1.193"
                  r="1.193"
                  transform="translate(161.08 72.784)"
                  fill="currentColor"
                >
                </circle>
                <circle
                  id="Elipse_4"
                  data-name="Elipse 4"
                  cx="1.193"
                  cy="1.193"
                  r="1.193"
                  transform="translate(165.852 72.784)"
                  fill="currentColor"
                >
                </circle>
              </g>
            </g>
          </svg>
        </button>
        <button id="user">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
            />
          </svg>
        </button>
        <button id="cart" className="relative">
          <span className="absolute px-[2px] py-[1px] rounded-full top-0 right-0 bg-[#153359] text-[8px] text-white">
            20
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
            />
          </svg>
        </button>
        <HeaderButton variant="menu" />
      </nav>
    </>
  );

  // return (
  //   <>
  //     {/* Mobile Version */}
  //     <div
  //       class={`md:hidden flex flex-row justify-between items-center h-[${navbarHeight}] border-b-1 border-default w-full px-2 gap-2`}
  //     >
  //       <HeaderButton variant="menu" />

  //       <a
  //         href="/"
  //         class={`flex-grow inline-flex items-center min-h-[${navbarHeight}]`}
  //         aria-label="Store logo"
  //       >
  //         <Icon id="Logo" width={126} height={16} />
  //       </a>

  //       <div class="flex gap-1">
  //         <HeaderButton variant="search" />
  //         <HeaderButton variant="cart" />
  //       </div>
  //     </div>

  //     {/* Desktop Version */}
  //     <div class="hidden md:flex flex-row justify-between items-center border-b-1 border-default w-full pl-2 pr-3">
  //       <div class="flex-none w-44">
  //         <a href="/" aria-label="Store logo" class="block px-4 py-3 w-[160px]">
  //           <Icon id="Logo" width={126} height={16} />
  //         </a>
  //       </div>
  //       <div class="flex-auto flex justify-center">
  //         {items.map((item) => <NavItem item={item} />)}
  //       </div>
  //       <div class="flex-none w-44 flex items-center justify-end gap-2">
  //         <HeaderButton variant="search" />
  //         <HeaderSearchMenu searchbar={searchbar} />
  //         <Button
  //           as="a"
  //           variant="icon"
  //           href="/login"
  //           aria-label="Log in"
  //         >
  //           <Icon id="User" width={20} height={20} strokeWidth={0.4} />
  //         </Button>
  //         <HeaderButton variant="cart" />
  //       </div>
  //     </div>
  //   </>
  // );
}

export default Navbar;

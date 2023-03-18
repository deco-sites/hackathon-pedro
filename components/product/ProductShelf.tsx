import ProductCard from "$store/components/product/ProductCard.tsx";
import Container from "$store/components/ui/Container.tsx";
import Text from "$store/components/ui/Text.tsx";
import Slider from "$store/components/ui/Slider.tsx";
import SliderControllerJS from "$store/islands/SliderJS.tsx";
import Button from "$store/components/ui/Button.tsx";
import Icon from "$store/components/ui/Icon.tsx";
import { useId } from "preact/hooks";
import type { LoaderReturnType } from "$live/types.ts";
import type { Product } from "deco-sites/std/commerce/types.ts";

export interface Props {
  title: string;
  products: LoaderReturnType<Product[] | null>;
  itemsPerPage?: number;
  seeAll?: boolean;
}

function ProductShelf({
  title,
  products,
  seeAll = false,
}: Props) {
  const id = useId();

  if (!products || products.length === 0) {
    return <div />;
  }

  return (
    <section class="w-full px-4">
      <h2 class="text-default font-bold uppercase text-base m-0 py-4">
        {title}
      </h2>
      <Container
        id={id}
        class="grid grid-cols-[48px_1fr_48px] grid-rows-[48px_1fr_48px_1fr]"
      >
        <Slider
          class="gap-3 col-span-full row-start-1 row-end-5 pb-4"
          snap="snap-center sm:snap-start block sm:first:ml-0 last:mr-6 sm:last:mr-0"
        >
          {products?.map((product) => (
            <div class="min-w-[230px] max-w-[230px]">
              <ProductCard product={product} />
            </div>
          ))}
        </Slider>

        <>
          <div class="hidden relative sm:block z-10 col-start-1 row-start-3">
            <div class="absolute right-1/2 bg-interactive-inverse rounded-full border-default border">
              <Button
                variant="icon"
                data-slide="prev"
                aria-label="Previous item"
              >
                <Icon size={20} id="ChevronLeft" strokeWidth={3} />
              </Button>
            </div>
          </div>
          <div class="hidden relative sm:block z-10 col-start-3 row-start-3">
            <div class="absolute left-1/2 bg-interactive-inverse rounded-full border-default border">
              <Button variant="icon" data-slide="next" aria-label="Next item">
                <Icon size={20} id="ChevronRight" strokeWidth={3} />
              </Button>
            </div>
          </div>
        </>

        <SliderControllerJS rootId={id} />
      </Container>

      {seeAll && (
        <div class="flex w-full">
          <a href="/" class="flex items-center justify-center ml-auto gap-1">
            <span class="flex items-center justify-center gap-1 text-base text-default flex-nowrap ">
              Ver todos
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-4 h-4"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </a>
        </div>
      )}
    </section>
  );
}

export default ProductShelf;

import ProductShelf from "$store/components/product/ProductShelf.tsx";
import type { LoaderReturnType } from "$live/types.ts";
import type { Product } from "deco-sites/std/commerce/types.ts";

export interface Props {
  title: string;
  products: LoaderReturnType<Product[] | null>;
  itemsPerPage?: number;
}

export default function BestOfWeek(
  { title, products, itemsPerPage = 5 }: Props,
) {
  return (
    <section class="flex flex-col w-full bg-[#0F1E1E] px-4 pt-4">
      <div class="flex flex-col pt-6 pb-8">
        <h2 class="text-white font-bold uppercase text-base m-0 p-0">
          {title}
        </h2>
        <p class="flex text-white capitalize text-sm m-0 p-0 mt-6">
          No Shopping Online Com Preços Incríveis em Até 10x Sem Juros. Compre
          online e receba em casa!
        </p>
      </div>

      <a
        href="#"
        class="flex py-4 px-12 bg-white text-default text-sm font-bold w-full max-w-[240px] rounded"
      >
        Veja outros produtos
      </a>

      {/* Vitrine */}
      <div class="w-full mt-4 pb-10">
        <ProductShelf
          title={""}
          products={products}
          itemsPerPage={itemsPerPage}
        />
      </div>
    </section>
  );
}

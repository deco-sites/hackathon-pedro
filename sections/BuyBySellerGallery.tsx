import ProductGallery from "$store/components/product/ProductGallery.tsx";
import type { LoaderReturnType } from "$live/types.ts";
import type { ProductListingPage } from "deco-sites/std/commerce/types.ts";

export interface Props {
  title?: string;
  page: LoaderReturnType<ProductListingPage | null>;
}

export default function BuyBySellerGallery({ title, page }: Props) {
  return (
    <section class="w-full px-4">
      {title && (
        <h2 class="text-default font-bold uppercase text-base m-0 py-4">
          {title}
        </h2>
      )}

      <ProductGallery page={page} />
    </section>
  );
}

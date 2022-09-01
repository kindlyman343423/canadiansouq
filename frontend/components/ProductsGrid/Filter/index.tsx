import { IProduct } from "../../../types";
import ByBrand from "./ByBrand";

type Props = {
  brands: string[];
  setProducts: (list: IProduct[]) => void;
  prods: IProduct[];
  filter: string[];
};

const Filter = ({ brands, setProducts, prods, filter }: Props) => {
  return (
    <div className="bg-fff rounded-md mb-4 p-4 relative before:absolute before:border-b-fff before:border-solid before:border-transparent before:border-8 before:top-0 before:right-2 before:translate-y-[-100%] animate-slideDownIn origin-top-right">
      <h3 className="text-center font-bold mb-2">Filter</h3>
      <ByBrand
        brands={brands}
        setProducts={setProducts}
        prods={prods}
        filter={filter}
      />
    </div>
  );
};

export default Filter;

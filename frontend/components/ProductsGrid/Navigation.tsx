import { Dispatch, SetStateAction, useState } from "react";
import { IProduct } from "../../types";
import Button from "../Button";
import { Arrow, Grid, List, Filter } from "../icons";
import FilterOptions from "./Filter/"

type Props = {
  router: any;
  grid: boolean;
  setGrid: Dispatch<SetStateAction<boolean>>;
  brands: string[];
  setProducts: (list: IProduct[]) => void;
  prods: IProduct[];
};

const Navigation = ({ router, grid, setGrid, brands, setProducts, prods }: Props) => {
  const [openFilter, setOpenFilter] = useState(true);
  const [filter] = useState([...brands]);

  return (
    <>
      <div className="flex py-4 items-center justify-between">
        <Button
          pad="0"
          icon
          text={<Arrow className="w-full h-full rotate-90 min-w-max" />}
          onClick={() => router.back()}
        />

        <h1 className="font-bold text-xl">{router.query.cat}</h1>

        <div className="flex items-center gap-2">
          <Button
            pad="0"
            icon
            text={grid ? <Grid /> : <List />}
            onClick={() => setGrid((current: boolean) => !current)}
          />
          <Button text={<Filter active={openFilter} />} pad="0" icon onClick={() => setOpenFilter(current => !current)} />
        </div>
      </div>

      {openFilter && <FilterOptions brands={brands} setProducts={setProducts} prods={prods} filter={filter} />}
    </>
  );
};

export default Navigation;

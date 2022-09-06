import Button from "../Button";
import { Bookmark, Cart } from "../icons";

const Buttons = () => {
  return (
    <div className="flex items-center gap-2">
      <Button
        size="sm"
        color="transparent"
        icon={<Bookmark clr="stroke-white" />}
      />
      <Button color="transparent" className="relative p-1" icon={<Cart />}>
        <span className="absolute top-[-4px] right-[-4px] font-bold bg-success rounded-full px-[.25rem] text-xs">
          3
        </span>
      </Button>
    </div>
  );
};

export default Buttons;

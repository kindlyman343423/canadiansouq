interface Props {
  text: string;
  onChange: (text: string) => void;
  filter: string[];
}

const CheckBox = ({ text, onChange, filter }: Props) => (
  <div className="my-1">
    <input
      className="peer"
      hidden
      type="checkbox"
      id={text}
      onChange={() => onChange(text)}
      checked={filter.includes(text)}
    />
    <label
      htmlFor={text}
      className="relative cursor-pointer pl-9 before:absolute before:left-0 before:top-1/2 before:w-4 before:h-4 before:bg-white before:border-black before:border before:border-solid before:rounded-sm before:translate-y-[-50%] before:translate-x-1/2 peer-checked:before:bg-black peer-checked:before:content-['\2713'] before:text-white before:flex before:items-center before:justify-center"
    >
      {text.replace("_", " ")}
    </label>
  </div>
);

export default CheckBox;

import clsx from "clsx";

interface ClassItemProps {
  title: string;
  selected: boolean;
  onClick: () => void;
}
export function ClassItemComponent({
  title,
  selected,
  onClick,
}: ClassItemProps) {
  return (
    <button
      onClick={onClick}
      className={clsx(
        selected && "bg-neutral-200",
        "py-3 border-b-[.5px] border-b-neutral-200 hover:bg-neutral-200 pl-10"
      )}
    >
      {title}
    </button>
  );
}

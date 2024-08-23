import clsx from "clsx";
import { NavLink } from "react-router-dom";

interface ClassItemProps {
  title: string;
  course: string;
  link: string;
  selected: boolean;
}
export function ClassItemComponent({
  title,
  course,
  link,
  selected,
}: ClassItemProps) {
  return (
    <NavLink
      to={"/player"}
      state={{ courseId: course, video: link }}
      className={clsx(
        selected && "bg-neutral-200",
        "py-3 border-b-[.5px] border-b-neutral-200 hover:bg-neutral-200 pl-10"
      )}
    >
      {title}
    </NavLink>
  );
}

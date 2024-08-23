import { Button } from "@/components/ui/button";
import { NavLink, useLocation } from "react-router-dom";

export default function CourseInfoPage() {
  const location = useLocation();
  const { course, title, desc, thumb } = location.state || {};

  console.log({ course, title, desc, thumb });

  return (
    <main className="p-10 flex flex-col-reverse md:flex-row items-center md:items-start gap-40">
      <div className="flex flex-col gap-3 mt-10">
        <h2 className="text-5xl font-medium text-neutral-900">{title}</h2>
        <p className="text-base w-full text-neutral-700 font-light mb-10 pr-10">
          {desc}
        </p>

        <NavLink to={"/player"} state={{ courseId: course }}>
          <Button className="w-full md:w-56 min-w-32 uppercase py-7 mb-10">
            Iniciar curso
          </Button>
        </NavLink>

        <div className="flex flex-row items-start justify-start">
          <div className="flex flex-col gap-4">
            <span className="text-lg font-medium text-neutral-950">
              Módulos
            </span>
            <span className="text-sm font-medium text-neutral-800">
              01 - Introdução
            </span>
            <span className="text-sm font-medium text-neutral-800">
              02 - Desenvolvimento
            </span>
            <span className="text-sm font-medium text-neutral-800">
              04 - Conclusão
            </span>
          </div>

          <div className="flex flex-col gap-4 ml-20">
            <span className="text-lg font-medium text-neutral-950">Aulas</span>
            <span className="text-sm font-medium text-neutral-800">
              40 aulas
            </span>
          </div>
        </div>
      </div>
      <img src={thumb} alt="" className="h-[80%] rounded-md" />
    </main>
  );
}

import { FC } from "react";
import { Project } from "../home";
interface Props {
  project: Project;
  active: boolean;
}
export const ProjectCard: FC<Props> = ({ project, active }) => {
  return (
    <>
      <div
        className={
          `flex flex-col justify-center items-center text-center p-4 overflow-hidden min-h-[50vh] bg-no-repeat bg-cover bg-center ` +
          (active ? "overshadow before:bg-indigo-500" : "")
        }
        style={{ backgroundImage: `url(${project.image})` }}
      >
        {active && (
          <>
            <h2 className="text-white font-bold text-xl lg:text-5xl">
              {project.title}
            </h2>
            <p className="text-white text-lg">{project.description}</p>
            <span className="text-white text-lg font-bold ">
              {project.date}
            </span>
          </>
        )}
      </div>
      <br />
      <br />
    </>
  );
};

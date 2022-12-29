import { FC } from "react";
import { Experience } from "../../graphql/generated/graphql";
interface Props {
  experience: Experience;
  active: boolean;
}
export const ProjectCard: FC<Props> = ({ experience, active }) => {
  return (
    <>
      <div
        className={
          `flex flex-col justify-center items-center text-center p-4 overflow-hidden min-h-[50vh] bg-no-repeat bg-cover bg-center ` +
          (active ? "overshadow before:bg-indigo-500" : "")
        }
        style={{ backgroundImage: `url(${experience.image.url})` }}
      >
        {active && (
          <>
            <h4>{experience.business}</h4>
            <h2 className="text-white font-bold text-xl lg:text-5xl">
              {experience.title}
            </h2>
            <p className="text-white text-lg">{experience.description}</p>
            <span className="text-white text-lg font-bold ">
              {experience.date}
            </span>
          </>
        )}
      </div>
      <br />
      <br />
    </>
  );
};

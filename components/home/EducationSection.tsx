import { TimeLine, Title } from "../common";
import { TimeItem } from "../common/TimeItem";
import { SectionLayout } from "../Layouts";

export interface Education {
  id: number;
  title: string;
  description: string;
  school: string;
  date: string;
}

export const educations: Education[] = [
  {
    id: 1,
    title: "Ingeniero en seguridad de trabajo",
    description:
      "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    school: "Universidad de Antioquia",
    date: "2019 - 2021",
  },
  {
    id: 2,
    title: "Normas ISO 9001:2015",
    description:
      "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    school: "Universidad de de arequipa",
    date: "2019 - 2021",
  },
  {
    id: 3,
    title: "Normas ISO 14001:2015",
    description:
      "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    school: "Universidad de de arequipa",
    date: "2019 - 2021",
  },
];

export const EducationSection = () => {
  return (
    <SectionLayout className="p-6">
      <div className="max-w-4xl mx-auto ">
        <Title
          subtitle="Más sobre "
          firstWord="Mi"
          title="formación académica"
          isDark
        />
        <br />
        <br />
        <div className="flex flex-col items-center justify-center">
          <TimeLine>
            {educations.map((education, idx) => (
              <TimeItem key={education.id} {...education} idx={idx} />
            ))}
          </TimeLine>
        </div>
      </div>
    </SectionLayout>
  );
};

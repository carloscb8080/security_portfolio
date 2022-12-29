import { FC } from "react";
import { Education } from "../../graphql";
import { TimeLine, Title } from "../common";
import { TimeItem } from "../common/TimeItem";
import { SectionLayout } from "../Layouts";

interface Props {
  educations: Education[];
}
export const EducationSection: FC<Props> = ({ educations }) => {
  return (
    <SectionLayout className="p-6 bg-gray-200" id="education-section">
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
            {educations.map(
              ({ id, title, description, institution, date }, idx) => (
                <TimeItem
                  key={id}
                  idx={idx}
                  title={title}
                  description={description as string}
                  date={date as string}
                  school={institution}
                />
              )
            )}
          </TimeLine>
        </div>
      </div>
    </SectionLayout>
  );
};

import { GetServerSideProps, NextPage } from "next";
import {
  AboutSection,
  ContactSection,
  EducationSection,
  HeroSection,
  ProjectSection,
  ServiceSection,
} from "../components/home";
import { RootLayout } from "../components/Layouts";
import {
  Author,
  Carousel,
  Education,
  Experience,
  GetHomeDataDocument,
  Service,
} from "../graphql";
import { client } from "../utils";

interface Props {
  author: Author;
  carousels: Carousel[];
  services: Service[];
  experiences: Experience[];
  educations: Education[];
}

const Home: NextPage<Props> = ({
  author,
  carousels,
  services,
  experiences,
  educations,
}) => {
  return (
    <RootLayout author={author}>
      <main>
        <HeroSection carousels={carousels} />
        <AboutSection />
        <ServiceSection services={services} />
        <ProjectSection experiences={experiences} />
        <EducationSection educations={educations} />
        <ContactSection />
      </main>
    </RootLayout>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async (context) => {
  try {
    const { data } = await client.query({
      query: GetHomeDataDocument,
    });

    const { authors, carousels, services, experiences, educations } = data;
    const author = authors[0];

    if (!author) throw new Error("Author not found");

    return {
      props: {
        author,
        carousels,
        services,
        experiences,
        educations,
      },
    };
  } catch (error: any) {
    return { props: { error: error.message } };
  }
};

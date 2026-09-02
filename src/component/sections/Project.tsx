import { Info } from "../cards/Info";
import { Container } from "../shared/Container";
import { Paragraph } from "../shared/Paragraph";
import { Title } from "../shared/Title";

export const Project = () => {
  return (
    <section id="projects">
      <Title>Project</Title>
      {/* project 1 */}
      <Container className="flex flex-col md:flex-row gap-10 lg:gap-12 items-center mb-40">
        <div className="w-full md:w-5/12 lg:w-1/2 ">
          <div className="w-full h-80 sm:h-96 relative">
            <img
              src="/src/assets/image_project_1.png"
              alt="JomStudy project"
              className="w-full h-full object-cover rounded-3xl shadow-lg relative z-10"
            />
          </div>
        </div>
        <div className="w-full md:w-7/12 lg:w-1/2 flex flex-col gap-y-3.5">
          <Title>Project 1: JomStudy</Title>
          <Paragraph>
            JomStudy is a full-stack learning platform built with React,
            Laravel, Inertia.js, and Docker. It includes frontend and backend
            features, application data management, user interactions, and
            containerized deployment.
          </Paragraph>
          <div>
            <Info title="Mission" description="Something generic ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <circle cx="12" cy="12" r="9" />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 12h18M12 3a15.3 15.3 0 0 1 0 18M12 3a15.3 15.3 0 0 0 0 18"
                />
              </svg>
            </Info>
          </div>
        </div>
      </Container>
      {/* project 2 */}
      <Container className="flex flex-col md:flex-row-reverse gap-10 lg:gap-12 items-center">
        <div className="w-full md:w-5/12 lg:w-1/2 ">
          <div className="w-full h-80 sm:h-96 relative">
            <img
              src="/src/assets/image_project_1.png"
              alt="JomStudy project"
              className="w-full h-full object-cover rounded-3xl shadow-lg relative z-10"
            />
          </div>
        </div>
        <div className="w-full md:w-7/12 lg:w-1/2 flex flex-col gap-y-3.5">
          <Title>Project 1: JomStudy</Title>
          <Paragraph>
            JomStudy is a full-stack learning platform built with React,
            Laravel, Inertia.js, and Docker. It includes frontend and backend
            features, application data management, user interactions, and
            containerized deployment.
          </Paragraph>
          <div>
            <Info title="Mission" description="Something generic ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <circle cx="12" cy="12" r="9" />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 12h18M12 3a15.3 15.3 0 0 1 0 18M12 3a15.3 15.3 0 0 0 0 18"
                />
              </svg>
            </Info>
          </div>
        </div>
      </Container>
    </section>
  );
};

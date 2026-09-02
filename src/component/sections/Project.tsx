import { Info } from "../cards/Info";
import projectImage from "../../assets/image_project_1.png";
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
              src={projectImage}
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
          <div className="grid sm:grid-cols-2 gap-4">
            <a
              href="https://jomstudy.me"
              target="_blank"
              rel="noreferrer"
              aria-label="Visit the JomStudy website"
            >
              <Info title="Live Website" description="jomstudy.me">
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
            </a>
            <a
              href="https://github.com/kairui1012/FYP"
              target="_blank"
              rel="noreferrer"
              aria-label="View the JomStudy GitHub repository"
            >
              <Info
                title="GitHub Repository"
                description="github.com/kairui1012/FYP"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3.28-.36 6.72-1.61 6.72-7A5.4 5.4 0 0 0 19.22 3.77 5.07 5.07 0 0 0 19.09.24S17.91-.14 15 1.74a13.4 13.4 0 0 0-7 0C5.09-.14 3.91.24 3.91.24a5.07 5.07 0 0 0-.13 3.53A5.4 5.4 0 0 0 2.28 7.5c0 5.38 3.44 6.63 6.72 7A4.8 4.8 0 0 0 8 18v4m-4-3c-3 .9-3-1.5-4-2"
                  />
                </svg>
              </Info>
            </a>
          </div>
        </div>
      </Container>
      {/* project 2 */}
      <Container className="flex flex-col md:flex-row-reverse gap-10 lg:gap-12 items-center">
        <div className="w-full md:w-5/12 lg:w-1/2 ">
          <div className="w-full h-80 sm:h-96 relative">
            <img
              src={projectImage}
              alt="Mental Health Assistence project"
              className="w-full h-full object-cover rounded-3xl shadow-lg relative z-10"
            />
          </div>
        </div>
        <div className="w-full md:w-7/12 lg:w-1/2 flex flex-col gap-y-3.5">
          <Title>Project 2: Mental Health Assistence</Title>
          <Paragraph>
            Mental Health Assistence is a responsive web application built with
            Vue 3 and Element Plus. It retrieves backend data through RESTful
            APIs, transforms that data into clear and accessible
            visualizations, and presents the results through reusable interface
            components so users can understand and interact with mental
            health-related information more easily.
          </Paragraph>
          <div className="grid sm:grid-cols-2 gap-4">
            <a
              href="https://mental-health-assistence.vercel.app/"
              target="_blank"
              rel="noreferrer"
              aria-label="Visit the Mental Health Assistence website"
            >
              <Info
                title="Live Website"
                description="mental-health-assistence.vercel.app"
              >
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
            </a>
            <a
              href="https://github.com/kairui1012/mental-health-assistence"
              target="_blank"
              rel="noreferrer"
              aria-label="View the Mental Health Assistence GitHub repository"
            >
              <Info
                title="GitHub Repository"
                description="github.com/kairui1012/mental-health-assistence"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3.28-.36 6.72-1.61 6.72-7A5.4 5.4 0 0 0 19.22 3.77 5.07 5.07 0 0 0 19.09.24S17.91-.14 15 1.74a13.4 13.4 0 0 0-7 0C5.09-.14 3.91.24 3.91.24a5.07 5.07 0 0 0-.13 3.53A5.4 5.4 0 0 0 2.28 7.5c0 5.38 3.44 6.63 6.72 7A4.8 4.8 0 0 0 8 18v4m-4-3c-3 .9-3-1.5-4-2"
                  />
                </svg>
              </Info>
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
};

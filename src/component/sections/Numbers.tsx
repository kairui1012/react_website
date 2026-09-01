import { Container } from "../shared/Container";

export const Numbers = () => {
  return (
    <section className="relative mt-12 md:mt-16">
      <Container className="flex justify-center align-center">
        <div className="mx-auto lg:mx-0 p-5 sm:p-6 sm:py-8 max-w-5xl rounded-3xl bg-box-bg border-transparent border-box-border shadow-lg shadow-box-shadow md:divide-x divide-box-border grid grid-cols-2 md:grid-cols-4">
          <div className="text-center px-5">
            <h2 className="font-semibold text-xl sm:text-2xl md:text-4xl text-heading-1">Software Developer</h2>
            <p className="mt-2 text-heading-3">Building practical and reliable software</p>
          </div>
          <div className="text-center px-5">
            <h2 className="font-semibold text-xl sm:text-2xl md:text-4xl text-heading-1">Full-Stack Mindset</h2>
            <p className="mt-2 text-heading-3">Working across interfaces, servers, and databases</p>
          </div>
          <div className="text-center px-5">
            <h2 className="font-semibold text-xl sm:text-2xl md:text-4xl text-heading-1">Continuous Learner</h2>
            <p className="mt-2 text-heading-3">Improving through exploration and hands-on projects</p>
          </div>
          <div className="text-center px-5">
            <h2 className="font-semibold text-xl sm:text-2xl md:text-4xl text-heading-1">Problem Solver</h2>
            <p className="mt-2 text-heading-3">Turning complex challenges into clear solutions</p>
          </div>
        </div>
      </Container>
    </section>
  );
};

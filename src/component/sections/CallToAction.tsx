import { BtnLink } from "../shared/BtnLink";
import { Container } from "../shared/Container";
import { Paragraph } from "../shared/Paragraph";

export const CTA = () => {
  return (
    <section className="pb-20 relative">
      <Container className="relative rounded-2xl overflow-hidden">
        <div className="relative z-10 mx-auto text-center max-w-xl md:max-w-2 py-8 md:py-10 px-6 md:px-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-heading-1 ">
            Explore My <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-600 to-violet-600">GitHub Projects</span>
          </h1>
        </div>
        <Paragraph className="pt-10">
          Take a closer look at my projects, source code, and ongoing
          development work on GitHub.
        </Paragraph>
        <div className="mx-auto max-w-md sm:max-w-xl pt-10 dark:text-white">
          <BtnLink
            href="https://github.com/kairui1012"
            text="View My GitHub"
          />
        </div>
      </Container>
    </section>
  );
};

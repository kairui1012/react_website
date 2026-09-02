import { BtnLink } from "../shared/BtnLink";
import { Container } from "../shared/Container";
import { Paragraph } from "../shared/Paragraph";

export const CTA = () => {
  return (
    <section id="cta" className="pb-20 relative">
      <Container className="relative rounded-3xl overflow-hidden border border-box-border bg-box-bg shadow-lg shadow-box-shadow px-6 py-12 md:px-10 md:py-16 text-center">
        <div className="relative z-10 mx-auto max-w-3xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-heading-1 ">
            Explore My <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-600 to-violet-600">GitHub Projects</span>
          </h1>
        </div>
        <Paragraph className="mt-6 max-w-2xl mx-auto text-center">
          Take a closer look at my projects, source code, and ongoing
          development work on GitHub.
        </Paragraph>
        <div className="mt-8 flex justify-center">
          <BtnLink
            href="https://github.com/kairui1012"
            text="View My GitHub"
          />
        </div>
      </Container>
    </section>
  );
};

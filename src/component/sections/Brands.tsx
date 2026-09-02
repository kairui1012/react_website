import { Container } from "../shared/Container";
import { Title } from "../shared/Title";

const logos = [
  "docker",
  "github",
  "laravel",
  "nextjs",
  "react",
  "typescript",
  "vue",
  "tailwindcss",
  "java",
  "mysql",
  "sqlite",
  "bootstrap",
];

const logoFiles = import.meta.glob<string>("../../assets/logos/*.svg", {
  eager: true,
  query: "?url",
  import: "default",
});

export const Brands = () => {
  return (
    <section>
      <Container className="space-y-8">
        <div className="text-center max-w-3xl mx-auto">
          <Title>Technical Skills</Title>
        </div>
        <div className="flex justify-center flex-wrap gap-4 ">
          {logos.map((logo, key) => (
            <div
              key={key}
              className="p-4 sm:p-5 rounded-xl bg-body  border-box-border group "
            >
              <img
                src={logoFiles[`../../assets/logos/${logo}.svg`]}
                width="200"
                height="120"
                alt={logo}
                className={`h-7 sm:h-10 w-auto ease-linear duration-300 grayscale group-hover:grayscale-0! group-hover:scale-105 ${
                  logo === "github" || logo === "nextjs"
                    ? "invert-0 dark:invert"
                    : ""
                }`}
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

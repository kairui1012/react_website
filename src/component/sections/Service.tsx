import { service } from "../../utils/service";
import { Container } from "../shared/Container";
import { Paragraph } from "../shared/Paragraph";
import { Title } from "../shared/Title";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
}

const ServiceCard = ({ title, description, icon }: ServiceCardProps) => {
  return (
    <article className="rounded-xl bg-box-bg p-5 shadow-lg shadow-box-shadow">
      <div
        className="text-primary [&_svg]:h-7 [&_svg]:w-7"
        dangerouslySetInnerHTML={{ __html: icon }}
      />
      <h3 className="mt-4 text-xl font-semibold text-heading-1">{title}</h3>
      <Paragraph className="mt-2">{description}</Paragraph>
    </article>
  );
};

export const Service = () => {
  return (
    <section id="services">
      <Container className="space-y-10 md:space-y-12">
        <div className="mx-auto max-w-3xl space-y-4 text-center">
          <Title>Testing</Title>
          <Paragraph>jfejhiehgiehghevgiehijvvhdhvg</Paragraph>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {service.map((item) => (
            <ServiceCard
              key={item.title}
              title={item.title}
              description={item.description}
              icon={item.icon}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

import { service } from "../../utils/service-data";
import { Container } from "../shared/Container";
import { Paragraph } from "../shared/Paragraph";
import { Title } from "../shared/Title";
import { Service as ServiceCard } from "../cards/Service";

export const Service = () => {
  return (
    <section id="services">
      <Container className="space-y-10 md:space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <Title>Services I Provide</Title>
          <Paragraph>
            Building practical, reliable, and scalable solutions for modern web
            applications.
          </Paragraph>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 ">
          {service.map((service, key) => (
            <ServiceCard
              key={key}
              title={service.title}
              description={service.description}
              icon={service.icon}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

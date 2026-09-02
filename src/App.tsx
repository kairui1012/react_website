import { Layout } from "./component/Layout";
import { Brands } from "./component/sections/Brands";
import { CTA } from "./component/sections/CallToAction";
import { Hero } from "./component/sections/Hero";
import { Project } from "./component/sections/Project";
import { Service } from "./component/sections/Service";

function App() {
  return (
    <Layout title="Software Engineering Portfolio">
      <Hero />
      <Brands />
      <Service />
      <Project />
      <CTA />
    </Layout>
  )
}

export default App

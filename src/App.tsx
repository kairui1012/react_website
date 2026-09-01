import { Layout } from "./component/Layout";
import { Brands } from "./component/sections/Brands";
import { Hero } from "./component/sections/Hero";
import { Service } from "./component/sections/Service";

function App() {
  return (
    <Layout title="Personal Portfolio">
      <Hero />
      <Brands />
      <Service />
    </Layout>
  )
}

export default App

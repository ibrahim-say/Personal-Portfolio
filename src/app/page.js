import Sidebar from "./components/sidebar";
import Content from "./components/content";
import AccordionC from "./components/accordion";

export default function Home() {
  return (
    <div className="row m-0 p-sm p-md  p-xl">
      <Sidebar />
      <AccordionC />
      <Content />
    </div>
  );
}

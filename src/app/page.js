import Sidebar from "./components/sidebar/Sidebar";
import Content from "./components/content/Content";
import AccordionForSidebar from "./components/sidebar/AccordionForSidebar";

export default function Home() {
  return (
    <div className="row m-0 p-sm p-md  p-xl">
      <Sidebar />
      <AccordionForSidebar />
      <Content />
    </div>
  );
}

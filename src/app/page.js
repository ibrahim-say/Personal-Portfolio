
import Sidebar from "./components/sidebar";
import Content from "./components/content";
import {useSelector,useDispatch} from "react-redux"
import { changeWindow } from "@/lib/featuers/modalSlice";
import AccordionC from "./components/accordion";


export default function Home() {
  // let dispatch=useDispatch()
  // let screenWidth=useSelector((state)=>state.windowWidth.width)
  // function handleResize() {
   

  //  dispatch(changeWindow({w:window.innerWidth}))
  // }
  
  
  // if (typeof window !== 'undefined') {
  //   window.addEventListener("resize", handleResize);

  // }
  return (
    <div className="row m-0 p-sm p-md  p-xl">
     <Sidebar /> 
      <AccordionC/>
     
    <Content />
    </div>
  );
}
     
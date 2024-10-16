import Image from "next/image";
import BootScreen from "@/screens/BootScreen";
import { Landing } from "@/components/Landing/Landing";
import CustomCursor from "@/components/CustomCursor/CustomCursor";

import "./globals.css"
export default function Home() {
  return (
    <>
      {/* <CustomCursor/> */}
      <BootScreen/>
      <div>
      <Landing/>
      </div>
    </>
  );
}

import Image from "next/image";
import BootScreen from "@/screens/BootScreen";
import {Landing} from "../screens/LandingScreen"
export default function Home() {
  return (
    <>
      <BootScreen/>
      <div>
        <Landing/>
      </div>
    </>
  );
}

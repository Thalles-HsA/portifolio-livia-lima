import Navbar from "@/components/Navbar";
import Biografia from "./Biografia";
import Contato from "./Contato";
import DeOndeVim from "./DeOndeVim";
import Home from "./Home";
import OQuePossoFazer from "./OquePossofazer";
import ProjetosDeDestque from "./ProjetosDeDestaque";

export default function Page() {
  return (
    <>
      <Navbar />
      <Home/>
      <Biografia />
      <DeOndeVim />
      <OQuePossoFazer />
      <ProjetosDeDestque />
      <Contato />
    </>
  )
}

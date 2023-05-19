import Navbar from "@/components/Navbar";
import Biografia from "./_Biografia";
import Contato from "./_Contato";
import DeOndeVim from "./_DeOndeVim";
import Home from "./_Home";
import OQuePossoFazer from "./_OquePossofazer";
import ProjetosDeDestque from "./_ProjetosDeDestaque";

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

import NavbarProjetos from '@/components/NavbarProjetos'
import ParqueBondinho from './_ParqueBondinho'
import { Metadata } from 'next';
export const metadata: Metadata = {
  viewport: {
    width: '1200',
  },
};

export default function ProjetoParqueBondinho() {
  return (
    <>
      <NavbarProjetos />
      <ParqueBondinho />
    </>

  )
}

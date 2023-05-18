import NavbarProjetos from '@/components/NavbarProjetos'
import D1000 from './D1000'
import { Metadata } from 'next';

export const metadata: Metadata = {
  viewport: {
    width: '1200',
  },
};


export default function ProjetoD1000() {
  return (
    <>
      <NavbarProjetos />
      <D1000 />
    </>

  )
}

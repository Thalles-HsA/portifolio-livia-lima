import NavbarProjetos from '@/components/NavbarProjetos'
import ClubMed from './_ClubMed'
import { Metadata } from 'next';
 
export const metadata: Metadata = {
  viewport: {
    width: '1200',
  },
};

export default function ProjetoClubMed() {
  return (
    <>
      <NavbarProjetos />
      <ClubMed />
    </>
  )
}

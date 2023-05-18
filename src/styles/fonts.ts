import localFont from 'next/font/local';

const hagridRegular = localFont({
  src: '../../public/fonts/hagrid/Hagrid-Regular-trial.ttf'
});

const hagridRegular2 = localFont({
  src: '../../public/fonts/hagrid/hagrid-regular.ttf'
});

const hagridExtrabold = localFont({
  src: '../../public/fonts/hagrid/Hagrid-Text-Extrabold-trial.ttf'
});

const bodyFontFit = localFont({
  src: '../../public/fonts/body-font-family/Body-Grotesque-Fit-Bold-trial.ttf'
});

export { hagridRegular, hagridExtrabold, bodyFontFit, hagridRegular2 };
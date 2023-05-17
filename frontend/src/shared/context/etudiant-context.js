import { createContext } from 'react';

export const EtudiantContext = createContext({
  noDa : null,
  profil : null,
  set : () => {},
  scratch : () => {}
});

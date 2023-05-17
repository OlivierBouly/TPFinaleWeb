import { createContext } from 'react';

export const EtudiantContext = createContext({
  noDa : null,
  profil : null,
  login : () => {},
  logout : () => {}
});

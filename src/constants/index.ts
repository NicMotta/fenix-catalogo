export const MENU_ITEMS = [
  { id: 'all', name: 'Todos' },
  { id: 'resina', name: 'Resinas' },
  { id: 'glitters', name: 'Glitters' },
  { id: 'pigmentos', name: 'Pigmentos' },
  { id: 'tintas', name: 'Tintas' },
  { id: 'moldes', name: 'Moldes' },
  { id: 'herramientas', name: 'Herramientas' },
  { id: 'insumos', name: 'Insumos' },
]

export const NAMES = {
  ['all']: 'Todos',
  ['glitters']: 'Glitters',
  ['pigmentos']: 'Pigmentos',
  ['resina']: 'Resinas',
  ['tintas']: 'Tintas',
  ['moldes']: 'Moldes',
  ['herramientas']: 'Herramientas',
  ['insumos']: 'Insumos',
}

export const URL_LIST = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSlJiaq1ReMBHjTG9JLa-ZFVRPtnhO0TwnNTrmcarCe3UflvziTF1rxgBHgqt-24VQ18Uy0j08eN3O1/pub?gid=1643828990&single=true&output=tsv'

export const URL_WORKSHOP = "https://docs.google.com/spreadsheets/d/e/2PACX-1vSlJiaq1ReMBHjTG9JLa-ZFVRPtnhO0TwnNTrmcarCe3UflvziTF1rxgBHgqt-24VQ18Uy0j08eN3O1/pub?gid=1888657510&single=true&output=tsv"

export const PASSWORDS = {
  lapiceras: 'LAPICERAS2024',
  resinaInicial: 'TALLERINICIAL',
}

export const REDIRECTIONS = {
  home: "/",
  workshops: '/talleres',
  lapiceras: '/talleres/lapiceras',
  lapicerasLogin: '/talleres/login-lapiceras',
  resinaInicial: '/talleres/resina-inicial',
  resinaInicialLogin: '/talleres/login-inicial',
}

export const URL_PDF = {
  lapiceras: 'https://drive.google.com/file/d/1OVdFfkNvXvOpSSa6wmNhhU_Grfqe7e9G/preview',
  resinaicial: 'https://drive.google.com/file/d/1iC6ISG_8OnEKXTSDW45yhoDIp0Djchai/preview',
}
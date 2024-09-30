import { atom } from 'nanostores'

type Filter = 'all' | 'resina-epoxica' | 'resina-acrilica' | 'herramientas' | 'pigmentos' | 'tintas' | 'moldes' | 'insumos' | 'glitters'

export const $filter = atom<Filter>('all')
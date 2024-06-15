import { atom } from 'nanostores'

type Filter = 'all' | 'resina' | 'herramientas' | 'pigmentos' | 'tintas' | 'moldes' | 'insumos' | 'glitters'

export const $filter = atom<Filter>('all')
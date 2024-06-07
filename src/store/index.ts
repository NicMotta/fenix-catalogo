import { atom } from 'nanostores'

type Filter = 'all' | 'resina' | 'tools' | 'pigmentos' | 'tintas' | 'moldes' | 'insumos'

export const $filter = atom<Filter>('all')
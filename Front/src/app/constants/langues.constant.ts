import { DirectionEnum } from '../models/enums/direction.enum';
import { Langue } from '../models/common/langue';

export const EnLangue: Langue = {
    id: 'en',
    name: 'English',
    title: 'ENGLISH',
    direction: DirectionEnum.Left,
    flag: 'assets/images/icons/gb.svg',
    description: ''
};
export const FrLangue: Langue = {
    id: 'fr',
    name: 'Français',
    title: 'FRENCH',
    direction: DirectionEnum.Left,
    flag: 'assets/images/icons/fr.svg',
    description: ''
};

export const Langues: Langue[] = [
    EnLangue,
    FrLangue
];

export const DefaultLang: Langue = EnLangue;

import { DirectionEnum } from '../enums/direction.enum';

export class Langue {
    id: string;
    name: string;
    title: string;
    direction: DirectionEnum;
    flag: string;
    description: string;

    constructor() {
        this.id = 'en';
        this.name = 'English';
        this.title = 'ENGLISH';
        this.direction = DirectionEnum.Left;
        this.flag = '';
        this.description = '';
      }
}

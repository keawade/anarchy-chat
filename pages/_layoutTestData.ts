import { IMessage } from '../interfaces/IMessage';
import { subSeconds } from 'date-fns';

export const layoutTestData: IMessage[] = [
  {
    userId: 'sir-types-a-lot',
    timestamp: subSeconds(new Date(), 5),
    content:
      'this is going to be a long message. it is my hope that by the end of this message we shall see if the word wrapping works correctly. is this long enough? yes i think so.',
  },
  {
    userId: 'obi1',
    timestamp: subSeconds(new Date(), 4),
    content: 'Hello there!',
  },
  {
    userId: 'grievous-misteaks',
    timestamp: subSeconds(new Date(), 3),
    content: 'General Kenobi!',
  },
  {
    userId: 'grievous-misteaks',
    timestamp: subSeconds(new Date(), 2),
    content: 'You are a bold one.',
  },
];

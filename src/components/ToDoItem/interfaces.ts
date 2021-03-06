import { Item } from '../../interfaces';

export interface ToDoItemProps {
  item: Item;
}

export interface TextHolderProps {
  item: Item;
}

export interface CheckProps {
  onSelect: () => void;
}

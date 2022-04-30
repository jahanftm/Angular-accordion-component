export interface ListModel {
  title: string;
  children: ListItem[];
}

export interface ListItem {
  imageId: string;
  name: string;
  score: number;
}

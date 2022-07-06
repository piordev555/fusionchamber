export interface SectionHeaderProps {
  isBigTitle?: boolean;
  title: string;
  description?: string;
}

export interface SpecialWordsMap {
  [key: string]: { link: string };
}

export interface TitleProps {
  isBigTitle?: boolean;
}

export interface BootStep {
  text: string;
  delay: number;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  icon: 'cpu' | 'hard-drive' | 'book-open' | 'terminal';
  tags?: string[];
  link?: string;
  colSpan?: 1 | 2;
  rowSpan?: 1 | 2;
  bgGradient?: boolean;
}
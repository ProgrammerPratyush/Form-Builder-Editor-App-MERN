export type QuestionType = 'text' | 'grid' | 'checkbox';

export interface Question {
  id: string;
  type: QuestionType;
  title: string;
  required: boolean;
  options?: string[];
  rows?: string[];
  columns?: string[];
}

export interface FormState {
  title: string;
  description: string;
  questions: Question[];
  activeTab: 'questions' | 'responses' | 'settings';
}
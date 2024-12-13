import * as React from "react";
import { Question, QuestionType } from "../types";
import { TextQuestion } from "../QuestionTypes/TextQuestion";
import { GridQuestion } from "../QuestionTypes/GridQuestion";
import { CheckboxQuestion } from "../QuestionTypes/CheckboxQuestion";

interface QuestionsPageProps {
  title: string;
  description: string;
  questions: Question[];
  onUpdateTitle: (title: string) => void;
  onUpdateDescription: (description: string) => void;
  onUpdateQuestion: (questionId: string, question: Question) => void;
}

export function QuestionsPage({
  title,
  description,
  questions,
  onUpdateTitle,
  onUpdateDescription,
  onUpdateQuestion,
}: QuestionsPageProps) {
  const renderQuestion = (question: Question) => {
    switch (question.type) {
      case 'text':
        return <TextQuestion question={question} onUpdate={(q) => onUpdateQuestion(question.id, q)} />;
      case 'grid':
        return <GridQuestion question={question} onUpdate={(q) => onUpdateQuestion(question.id, q)} />;
      case 'checkbox':
        return <CheckboxQuestion question={question} onUpdate={(q) => onUpdateQuestion(question.id, q)} />;
    }
  };

  return (
    <scrollView className="flex-grow">
      <stackLayout className="p-4">
        <stackLayout className="bg-white rounded-lg p-4 mb-4 shadow-sm">
          <textField
            text={title}
            className="text-2xl font-bold"
            onTextChange={(args) => onUpdateTitle(args.object.text)}
          />
          <textField
            text={description}
            className="text-gray-600"
            onTextChange={(args) => onUpdateDescription(args.object.text)}
          />
        </stackLayout>

        {questions.map(question => (
          <stackLayout key={question.id} className="bg-white rounded-lg mb-4 shadow-sm">
            {renderQuestion(question)}
          </stackLayout>
        ))}
      </stackLayout>
    </scrollView>
  );
}
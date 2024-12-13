import * as React from "react";
import { Question } from "../types";

interface CheckboxQuestionProps {
  question: Question;
  onUpdate: (updatedQuestion: Question) => void;
}

export function CheckboxQuestion({ question, onUpdate }: CheckboxQuestionProps) {
  const addOption = () => {
    const options = [...(question.options || []), `Option ${(question.options?.length || 0) + 1}`];
    onUpdate({ ...question, options });
  };

  return (
    <stackLayout className="p-4">
      <textField
        text={question.title}
        hint="Question title"
        className="text-lg mb-2"
        onTextChange={(args) => {
          onUpdate({
            ...question,
            title: args.object.text
          });
        }}
      />
      
      <stackLayout className="mb-4">
        {question.options?.map((option, index) => (
          <gridLayout rows="auto" columns="auto, *" className="mb-2">
            <checkbox col="0" className="mr-2" />
            <textField
              col="1"
              text={option}
              className="border-b border-gray-300"
              onTextChange={(args) => {
                const newOptions = [...(question.options || [])];
                newOptions[index] = args.object.text;
                onUpdate({ ...question, options: newOptions });
              }}
            />
          </gridLayout>
        ))}
      </stackLayout>

      <button className="text-purple-600" onTap={addOption}>+ Add Option</button>
    </stackLayout>
  );
}
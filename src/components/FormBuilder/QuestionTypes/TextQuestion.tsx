import * as React from "react";
import { Question } from "../types";

interface TextQuestionProps {
  question: Question;
  onUpdate: (updatedQuestion: Question) => void;
}

export function TextQuestion({ question, onUpdate }: TextQuestionProps) {
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
      <textField
        hint="Type your answer"
        className="text-gray-500 border-b border-gray-300 p-2"
        editable={false}
      />
      <switch
        checked={question.required}
        className="mt-2"
        onCheckedChange={(args) => {
          onUpdate({
            ...question,
            required: args.object.checked
          });
        }}
      />
      <label className="text-sm text-gray-600">Required</label>
    </stackLayout>
  );
}
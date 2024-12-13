import * as React from "react";
import { Question } from "../types";

interface GridQuestionProps {
  question: Question;
  onUpdate: (updatedQuestion: Question) => void;
}

export function GridQuestion({ question, onUpdate }: GridQuestionProps) {
  const addRow = () => {
    const rows = [...(question.rows || []), `Row ${(question.rows?.length || 0) + 1}`];
    onUpdate({ ...question, rows });
  };

  const addColumn = () => {
    const columns = [...(question.columns || []), `Column ${(question.columns?.length || 0) + 1}`];
    onUpdate({ ...question, columns });
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
      
      <scrollView orientation="horizontal" className="mb-4">
        <gridLayout rows="auto" columns={question.columns?.map(() => "auto").join(", ")}>
          {question.columns?.map((col, colIndex) => (
            <textField
              col={colIndex}
              text={col}
              className="p-2 border-b border-gray-300"
              onTextChange={(args) => {
                const newColumns = [...(question.columns || [])];
                newColumns[colIndex] = args.object.text;
                onUpdate({ ...question, columns: newColumns });
              }}
            />
          ))}
        </gridLayout>
      </scrollView>

      <button className="text-purple-600" onTap={addColumn}>+ Add Column</button>
      <button className="text-purple-600 mt-2" onTap={addRow}>+ Add Row</button>
    </stackLayout>
  );
}
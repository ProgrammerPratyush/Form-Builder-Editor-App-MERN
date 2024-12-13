import * as React from "react";
import { QuestionType } from "./types";

interface BottomToolbarProps {
  onAddQuestion: (type: QuestionType) => void;
}

export function BottomToolbar({ onAddQuestion }: BottomToolbarProps) {
  return (
    <gridLayout rows="auto" columns="*,*,*,*,*" className="p-4 bg-white border-t border-gray-200">
      <stackLayout col="0" className="text-center" onTap={() => onAddQuestion('text')}>
        <label className="text-2xl text-purple-600">+</label>
        <label className="text-xs text-gray-600">Add</label>
      </stackLayout>
      <stackLayout col="1" className="text-center" onTap={() => onAddQuestion('text')}>
        <label className="text-2xl text-purple-600">Aa</label>
        <label className="text-xs text-gray-600">Text</label>
      </stackLayout>
      <stackLayout col="2" className="text-center" onTap={() => onAddQuestion('grid')}>
        <label className="text-2xl text-purple-600">□</label>
        <label className="text-xs text-gray-600">Grid</label>
      </stackLayout>
      <stackLayout col="3" className="text-center" onTap={() => onAddQuestion('checkbox')}>
        <label className="text-2xl text-purple-600">☐</label>
        <label className="text-xs text-gray-600">Check</label>
      </stackLayout>
      <stackLayout col="4" className="text-center">
        <label className="text-2xl text-purple-600">—</label>
        <label className="text-xs text-gray-600">Line</label>
      </stackLayout>
    </gridLayout>
  );
}
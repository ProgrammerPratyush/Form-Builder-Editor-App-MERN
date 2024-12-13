import * as React from "react";
import { Dialogs } from "@nativescript/core";
import { Question, QuestionType, FormState } from "./types";
import { QuestionsPage } from "./pages/QuestionsPage";
import { ResponsesPage } from "./pages/ResponsesPage";
import { SettingsPage } from "./pages/SettingsPage";
import { BottomToolbar } from "./BottomToolbar";

export function FormEditor() {
  const [formState, setFormState] = React.useState<FormState>({
    title: "Customer Satisfaction Survey",
    description: "No Description",
    questions: [],
    activeTab: 'questions'
  });

  const addQuestion = (type: QuestionType) => {
    const newQuestion: Question = {
      id: Date.now().toString(),
      type,
      title: "",
      required: false,
      options: type === 'checkbox' ? ["Option 1"] : undefined,
      rows: type === 'grid' ? ["Row 1"] : undefined,
      columns: type === 'grid' ? ["Column 1"] : undefined
    };

    setFormState(prev => ({
      ...prev,
      questions: [...prev.questions, newQuestion]
    }));
  };

  const handleSend = async () => {
    const result = await Dialogs.confirm({
      title: "Send Form",
      message: "Are you ready to send this form?",
      okButtonText: "Yes",
      cancelButtonText: "No"
    });

    if (result) {
      // Generate a unique form URL
      const formUrl = `https://example.com/forms/${Date.now()}`;
      await Dialogs.alert({
        title: "Form Ready",
        message: `Your form is ready to share!\n\nURL: ${formUrl}`,
        okButtonText: "Copy URL"
      });
    }
  };

  const renderContent = () => {
    switch (formState.activeTab) {
      case 'questions':
        return (
          <QuestionsPage
            title={formState.title}
            description={formState.description}
            questions={formState.questions}
            onUpdateTitle={(title) => setFormState(prev => ({ ...prev, title }))}
            onUpdateDescription={(description) => setFormState(prev => ({ ...prev, description }))}
            onUpdateQuestion={(questionId, updatedQuestion) => {
              setFormState(prev => ({
                ...prev,
                questions: prev.questions.map(q => q.id === questionId ? updatedQuestion : q)
              }));
            }}
          />
        );
      case 'responses':
        return <ResponsesPage />;
      case 'settings':
        return <SettingsPage />;
    }
  };

  return (
    <stackLayout className="bg-white h-full">
      {/* Header */}
      <gridLayout rows="auto" columns="auto, *, auto" className="p-4 border-b border-gray-200">
        <button col="0" className="text-purple-600 text-lg" onTap={() => Dialogs.confirm("Exit form editor?")}>
          ✕
        </button>
        <stackLayout col="1" className="text-center">
          <button className="mx-2" onTap={() => console.log('Theme clicked')}>Theme</button>
          <button className="mx-2" onTap={() => console.log('Preview clicked')}>Preview</button>
        </stackLayout>
        <button col="2" className="bg-purple-600 text-white px-4 py-2 rounded-lg" onTap={handleSend}>
          Send
        </button>
      </gridLayout>

      {/* Tabs */}
      <gridLayout rows="auto" columns="*, *, *" className="border-b border-gray-200">
        {['questions', 'responses', 'settings'].map((tab, index) => (
          <label
            col={index}
            className={`p-4 text-center ${formState.activeTab === tab ? 'text-purple-600 border-b-2 border-purple-600' : 'text-gray-600'}`}
            text={tab.charAt(0).toUpperCase() + tab.slice(1)}
            onTap={() => setFormState(prev => ({ ...prev, activeTab: tab as 'questions' | 'responses' | 'settings' }))}
          />
        ))}
      </gridLayout>

      {/* Content */}
      {renderContent()}

      {/* Bottom Toolbar */}
      {formState.activeTab === 'questions' && (
        <BottomToolbar onAddQuestion={addQuestion} />
      )}
    </stackLayout>
  );
}
import * as React from "react";

export function SettingsPage() {
  return (
    <scrollView className="flex-grow">
      <stackLayout className="p-4">
        <label className="text-xl font-bold mb-4">Form Settings</label>
        
        <stackLayout className="bg-white rounded-lg p-4 mb-4 shadow-sm">
          <label className="font-bold mb-2">Form Visibility</label>
          <switch className="mb-4" checked={true} />
          <label className="text-gray-600">Allow public responses</label>
        </stackLayout>

        <stackLayout className="bg-white rounded-lg p-4 mb-4 shadow-sm">
          <label className="font-bold mb-2">Response Settings</label>
          <switch className="mb-4" checked={true} />
          <label className="text-gray-600">Collect email addresses</label>
        </stackLayout>

        <stackLayout className="bg-white rounded-lg p-4 mb-4 shadow-sm">
          <label className="font-bold mb-2">Form Controls</label>
          <button className="text-red-600 mt-2">Delete Form</button>
        </stackLayout>
      </stackLayout>
    </scrollView>
  );
}
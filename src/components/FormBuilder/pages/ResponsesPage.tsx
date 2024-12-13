import * as React from "react";

export function ResponsesPage() {
  return (
    <scrollView className="flex-grow">
      <stackLayout className="p-4">
        <label className="text-xl font-bold mb-4">Form Responses</label>
        <label className="text-gray-600">No responses yet</label>
        
        <button className="bg-purple-600 text-white p-4 rounded-lg mt-4">
          Export Responses to CSV
        </button>
      </stackLayout>
    </scrollView>
  );
}
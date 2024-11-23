import React from 'react';

export function EnrollmentForm() {
  return (
    <div className="w-full max-w-3xl mx-auto bg-neutral-900/50 p-6 rounded-lg backdrop-blur-sm border border-neutral-800">
      <iframe
        src="https://forms.gle/twT1a7fSuiKj9A4Y8"
        className="w-full min-h-[600px] border-0"
        title="Enrollment Form"
      />
    </div>
  );
}
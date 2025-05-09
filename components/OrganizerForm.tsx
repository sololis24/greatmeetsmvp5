'use client';

import React from 'react';

type OrganizerFormProps = {
  title: string;
  setTitle: (val: string) => void;
  organizerFirstName: string;
  setOrganizerFirstName: (val: string) => void;
  organizerLastName: string;
  setOrganizerLastName: (val: string) => void;
  organizerEmail: string;
  setOrganizerEmail: (val: string) => void;
  organizerErrors: Record<string, string>;
};

export default function OrganizerForm({
  title,
  setTitle,
  organizerFirstName,
  setOrganizerFirstName,
  organizerLastName,
  setOrganizerLastName,
  organizerEmail,
  setOrganizerEmail,
  organizerErrors,
}: OrganizerFormProps) {
  const capitalizeWords = (str: string) =>
    str.replace(/\b\w/g, (char) => char.toUpperCase());

  return (
    <div className="space-y-6 text-base"> {/* Set base text size */}
      <h1
        className="text-5xl lg:text-6xl font-extrabold mb-10 text-transparent bg-clip-text tracking-wide leading-tight hover:text-teal-500 transition-all duration-300 ease-in-out text-center"
        style={{
          background: 'linear-gradient(45deg, #34d399, #4f46e5, #6366f1)',
          backgroundClip: 'text',
          WebkitBackgroundClip: 'text',
          animation: 'gradientMotion 3s ease-in-out infinite',
        }}
      >
        Create your GreatMeet
      </h1>

      <style jsx>{`
        @keyframes gradientMotion {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
      `}</style>

      <input
        type="text"
        placeholder="Your Great Meet Name"
        className={`w-full p-4 border border-transparent border-b border-gray-300 rounded-lg bg-gray-50 text-base transition-all duration-300 focus:border-b-4 focus:border-teal-500 ${title ? 'not-italic' : 'italic'}`}
        value={title}
        onChange={(e) => setTitle(capitalizeWords(e.target.value))}
      />

      <div className="flex flex-col md:flex-row gap-4">
        <input
          type="text"
          placeholder="First Name"
          className={`w-full p-4 border border-transparent border-b border-gray-300 rounded-lg bg-gray-50 text-base transition-all duration-300 focus:border-b-4 focus:border-teal-500 ${organizerFirstName ? 'not-italic' : 'italic'}`}
          value={organizerFirstName}
          onChange={(e) => setOrganizerFirstName(capitalizeWords(e.target.value))}
        />
        <input
          type="text"
          placeholder="Last Name"
          className={`w-full p-4 border border-transparent border-b border-gray-300 rounded-lg bg-gray-50 text-base transition-all duration-300 focus:border-b-4 focus:border-teal-500 ${organizerLastName ? 'not-italic' : 'italic'}`}
          value={organizerLastName}
          onChange={(e) => setOrganizerLastName(capitalizeWords(e.target.value))}
        />
      </div>

      <input
        type="email"
        placeholder="Your Email"
        className={`w-full p-4 border border-transparent border-b border-gray-300 rounded-lg bg-gray-50 text-base transition-all duration-300 focus:border-b-4 focus:border-teal-500 ${organizerEmail ? 'not-italic' : 'italic'}`}
        value={organizerEmail}
        onChange={(e) => setOrganizerEmail(e.target.value)}
      />
    </div>
  );
}

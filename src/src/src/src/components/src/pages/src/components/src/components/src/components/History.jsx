import React from 'react';

function History() {
  const recentPrompts = [
    'Cyberpunk cityscape at night',
    'Ancient temple in the jungle',
    'Futuristic robot in Tokyo',
  ];

  return (
    <div className="glass p-4 rounded-lg mb-6">
      <h3 className="text-xl font-semibold mb-2 text-purple-300">Recent Prompts</h3>
      <ul className="list-disc list-inside text-white">
        {recentPrompts.map((prompt, index) => (
          <li key={index}>{prompt}</li>
        ))}
      </ul>
    </div>
  );
}

export default History;

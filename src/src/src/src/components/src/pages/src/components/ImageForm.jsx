import React, { useState } from 'react';

function ImageForm() {
  const [prompt, setPrompt] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Generating image for:', prompt);
    // Future: Connect to AI API here
  };

  return (
    <form onSubmit={handleSubmit} className="glass p-4 rounded-lg mb-6">
      <input
        type="text"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Enter your image prompt..."
        className="w-full p-2 rounded bg-black bg-opacity-40 text-white placeholder-purple-300"
      />
      <button
        type="submit"
        className="mt-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded text-white"
      >
        Generate
      </button>
    </form>
  );
}

export default ImageForm;

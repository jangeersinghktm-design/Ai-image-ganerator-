import React from 'react';

function ImagePreview() {
  const imageUrl = 'https://via.placeholder.com/512x512.png?text=Generated+Image';

  return (
    <div className="glass p-4 rounded-lg mb-6 text-center">
      <h3 className="text-xl font-semibold mb-2 text-purple-300">Preview</h3>
      <img src={imageUrl} alt="Generated" className="mx-auto rounded shadow-lg" />
      <a
        href={imageUrl}
        download="ai-image.png"
        className="mt-4 inline-block px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded text-white"
      >
        Download
      </a>
    </div>
  );
}

export default ImagePreview;

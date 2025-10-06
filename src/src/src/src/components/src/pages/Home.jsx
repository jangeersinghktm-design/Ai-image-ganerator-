import React from 'react';
import ImageForm from '../components/ImageForm';
import ImagePreview from '../components/ImagePreview';
import History from '../components/History';

function Home() {
  return (
    <div className="p-4 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold mb-4 text-purple-300">Generate HD AI Images</h2>
      <ImageForm />
      <ImagePreview />
      <History />
    </div>
  );
}

export default Home;

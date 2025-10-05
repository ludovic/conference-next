import React, { useState } from 'react';
import axios from 'axios';
import * as Label from '@radix-ui/react-label';
import * as Separator from '@radix-ui/react-separator';

const SubmitTalk = () => {
  const [title, setTitle] = useState('');
  const [speaker, setSpeaker] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/talks', { title, speaker, description });
      alert('Talk submitted successfully!');
      setTitle('');
      setSpeaker('');
      setDescription('');
    } catch (error) {
      console.error('Error submitting talk:', error);
      alert('Failed to submit talk.');
    }
  };

  return (
    <div className="min-h-screen bg-[#0d1117]">
      <div className="max-w-4xl mx-auto px-8 py-20">
        <div className="mb-16 px-4">
          <h1 className="text-5xl font-bold text-[#c9d1d9] mb-6">Submit a Talk</h1>
          <p className="text-lg text-[#8b949e] leading-relaxed">
            Share your knowledge and expertise with our community.
          </p>
        </div>

        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-10 mx-4">
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="space-y-3">
              <Label.Root htmlFor="title" className="block text-sm font-medium text-[#c9d1d9]">
                Talk Title
              </Label.Root>
              <input
                type="text"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full px-5 py-4 bg-[#0d1117] border border-[#30363d] rounded-md text-[#c9d1d9] placeholder-[#8b949e] focus:outline-none focus:border-[#58a6ff] focus:ring-2 focus:ring-[#58a6ff] transition-all"
                placeholder="Enter an engaging title for your talk"
                required
              />
            </div>

            <Separator.Root className="bg-[#30363d] h-px" />

            <div className="space-y-3">
              <Label.Root htmlFor="speaker" className="block text-sm font-medium text-[#c9d1d9]">
                Speaker Name
              </Label.Root>
              <input
                type="text"
                id="speaker"
                value={speaker}
                onChange={(e) => setSpeaker(e.target.value)}
                className="w-full px-5 py-4 bg-[#0d1117] border border-[#30363d] rounded-md text-[#c9d1d9] placeholder-[#8b949e] focus:outline-none focus:border-[#58a6ff] focus:ring-2 focus:ring-[#58a6ff] transition-all"
                placeholder="Your name"
                required
              />
            </div>

            <Separator.Root className="bg-[#30363d] h-px" />

            <div className="space-y-3">
              <Label.Root htmlFor="description" className="block text-sm font-medium text-[#c9d1d9]">
                Description
              </Label.Root>
              <textarea
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                rows="8"
                className="w-full px-5 py-4 bg-[#0d1117] border border-[#30363d] rounded-md text-[#c9d1d9] placeholder-[#8b949e] focus:outline-none focus:border-[#58a6ff] focus:ring-2 focus:ring-[#58a6ff] transition-all resize-none"
                placeholder="Describe what your talk will cover and what attendees will learn"
                required
              ></textarea>
            </div>

            <Separator.Root className="bg-[#30363d] h-px" />

            <div className="flex items-center justify-between pt-6">
              <p className="text-sm text-[#8b949e] max-w-xs">
                All submissions will be reviewed by our team.
              </p>
              <button 
                type="submit" 
                className="px-8 py-4 bg-[#58a6ff] text-[#0d1117] font-semibold rounded-md hover:bg-[#79c0ff] focus:outline-none focus:ring-2 focus:ring-[#58a6ff] focus:ring-offset-2 focus:ring-offset-[#161b22] transition-all transform hover:scale-105"
              >
                Submit Talk
              </button>
            </div>
          </form>
        </div>

        {/* Info Section */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
          <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-8 hover:border-[#30363d] transition-all">
            <h3 className="text-lg font-semibold text-[#c9d1d9] mb-3">Clear & Concise</h3>
            <p className="text-sm text-[#8b949e] leading-relaxed">
              Make sure your title clearly conveys what your talk is about.
            </p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-8 hover:border-[#30363d] transition-all">
            <h3 className="text-lg font-semibold text-[#c9d1d9] mb-3">Engaging Content</h3>
            <p className="text-sm text-[#8b949e] leading-relaxed">
              Focus on practical takeaways and real-world applications.
            </p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-8 hover:border-[#30363d] transition-all">
            <h3 className="text-lg font-semibold text-[#c9d1d9] mb-3">Unique Perspective</h3>
            <p className="text-sm text-[#8b949e] leading-relaxed">
              Share your unique insights and experiences with the community.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubmitTalk;

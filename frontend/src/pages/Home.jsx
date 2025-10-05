import React from 'react';
import * as Separator from '@radix-ui/react-separator';

const Home = () => {
  return (
    <div className="min-h-screen bg-[#0d1117]">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-8 py-24">
        <div className="text-center space-y-8 py-12">
          <h1 className="text-6xl font-bold text-[#c9d1d9] tracking-tight px-4">
            Conference Next investigates the future of technology.
          </h1>
          <p className="text-xl text-[#8b949e] max-w-3xl mx-auto leading-relaxed px-4">
            We are a community of innovators and thought leaders, exploring things beyond the adjacent possible. 
            We share knowledge and technologies that will change our field.
          </p>
        </div>

        <Separator.Root className="bg-[#30363d] h-px my-16" />

        {/* Featured Section */}
        <div className="mt-20 px-4">
          <h2 className="text-3xl font-bold text-[#c9d1d9] mb-12">Featured Talks</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Example Card */}
            <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-8 hover:border-[#58a6ff] transition-all cursor-pointer group">
              <div className="mb-6">
                <span className="inline-block px-4 py-2 text-xs font-medium text-[#58a6ff] bg-[#388bfd1a] rounded-full border border-[#58a6ff40]">
                  FEATURED
                </span>
              </div>
              <h3 className="text-xl font-semibold text-[#c9d1d9] mb-4 group-hover:text-[#58a6ff] transition-colors">
                The Future of Development
              </h3>
              <p className="text-[#8b949e] text-sm leading-relaxed">
                Exploring new paradigms in software development and how AI is reshaping our approach to building applications.
              </p>
            </div>

            <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-8 hover:border-[#58a6ff] transition-all cursor-pointer group">
              <div className="mb-6">
                <span className="inline-block px-4 py-2 text-xs font-medium text-[#7ee787] bg-[#26a64126] rounded-full border border-[#7ee78740]">
                  UPCOMING
                </span>
              </div>
              <h3 className="text-xl font-semibold text-[#c9d1d9] mb-4 group-hover:text-[#58a6ff] transition-colors">
                Modern Web Architecture
              </h3>
              <p className="text-[#8b949e] text-sm leading-relaxed">
                Deep dive into building scalable, performant web applications using cutting-edge technologies and best practices.
              </p>
            </div>

            <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-8 hover:border-[#58a6ff] transition-all cursor-pointer group">
              <div className="mb-6">
                <span className="inline-block px-4 py-2 text-xs font-medium text-[#d2a8ff] bg-[#8957e526] rounded-full border border-[#d2a8ff40]">
                  RESEARCH
                </span>
              </div>
              <h3 className="text-xl font-semibold text-[#c9d1d9] mb-4 group-hover:text-[#58a6ff] transition-colors">
                AI & Machine Learning
              </h3>
              <p className="text-[#8b949e] text-sm leading-relaxed">
                Understanding the impact of AI on modern development workflows and exploring practical applications.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-32 text-center px-4">
          <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-16 max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-[#c9d1d9] mb-6">
              Share Your Knowledge
            </h2>
            <p className="text-[#8b949e] text-lg mb-10 leading-relaxed">
              We welcome speakers from all backgrounds to share their insights and experiences with our community.
            </p>
            <a 
              href="/submit" 
              className="inline-block px-8 py-4 bg-[#58a6ff] text-[#0d1117] font-semibold rounded-md hover:bg-[#79c0ff] transition-colors"
            >
              Submit Your Talk
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

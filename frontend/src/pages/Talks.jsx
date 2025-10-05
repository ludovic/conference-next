import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Talks = () => {
  const [talks, setTalks] = useState([]);

  useEffect(() => {
    const fetchTalks = async () => {
      try {
        const response = await axios.get('/api/talks');
        setTalks(response.data);
      } catch (error) {
        console.error('Error fetching talks:', error);
      }
    };
    fetchTalks();
  }, []);

  const statusBadges = {
    active: { text: 'ACTIVE', color: 'text-[#58a6ff] bg-[#388bfd1a] border-[#58a6ff40]' },
    upcoming: { text: 'UPCOMING', color: 'text-[#7ee787] bg-[#26a64126] border-[#7ee78740]' },
    completed: { text: 'COMPLETED', color: 'text-[#8b949e] bg-[#6e768166] border-[#8b949e40]' },
  };

  const getRandomStatus = () => {
    const statuses = ['active', 'upcoming', 'completed'];
    return statuses[Math.floor(Math.random() * statuses.length)];
  };

  return (
    <div className="min-h-screen bg-[#0d1117]">
      <div className="max-w-7xl mx-auto px-8 py-20">
        <div className="mb-16 px-4">
          <h1 className="text-5xl font-bold text-[#c9d1d9] mb-6">Talks</h1>
          <p className="text-lg text-[#8b949e]">
            Explore our collection of submitted talks from experts in the field.
          </p>
        </div>

        {/* Filter Section */}
        <div className="mb-12 flex items-center space-x-4 px-4">
          <h3 className="text-sm font-semibold text-[#8b949e] uppercase tracking-wider">
            All Submissions
          </h3>
          <div className="h-px flex-1 bg-[#30363d]"></div>
        </div>

        {/* Talks Grid */}
        {talks.length === 0 ? (
          <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-16 text-center mx-4">
            <p className="text-[#8b949e] text-lg">
              No talks have been submitted yet. Be the first to share your knowledge!
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
            {talks.map((talk) => {
              const status = getRandomStatus();
              const badge = statusBadges[status];
              
              return (
                <div 
                  key={talk.id} 
                  className="bg-[#161b22] border border-[#30363d] rounded-lg p-8 hover:border-[#58a6ff] transition-all cursor-pointer group"
                >
                  <div className="mb-6">
                    <span className={`inline-block px-4 py-2 text-xs font-medium rounded-full border ${badge.color}`}>
                      {badge.text}
                    </span>
                  </div>
                  
                  <h2 className="text-xl font-semibold text-[#c9d1d9] mb-3 group-hover:text-[#58a6ff] transition-colors">
                    {talk.title}
                  </h2>
                  
                  <p className="text-sm font-medium text-[#8b949e] mb-4">
                    by {talk.speaker}
                  </p>
                  
                  <p className="text-[#8b949e] text-sm leading-relaxed line-clamp-3">
                    {talk.description}
                  </p>

                  <div className="mt-6 pt-6 border-t border-[#30363d]">
                    <button className="text-sm text-[#58a6ff] hover:text-[#79c0ff] font-medium transition-colors">
                      Learn more →
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Stats Section */}
        {talks.length > 0 && (
          <div className="mt-20 bg-[#161b22] border border-[#30363d] rounded-lg p-12 mx-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
              <div className="py-4">
                <div className="text-4xl font-bold text-[#58a6ff] mb-3">{talks.length}</div>
                <div className="text-sm text-[#8b949e]">Total Submissions</div>
              </div>
              <div className="py-4">
                <div className="text-4xl font-bold text-[#7ee787] mb-3">
                  {new Set(talks.map(t => t.speaker)).size}
                </div>
                <div className="text-sm text-[#8b949e]">Unique Speakers</div>
              </div>
              <div className="py-4">
                <div className="text-4xl font-bold text-[#d2a8ff] mb-3">
                  {Math.ceil(talks.length / 2)}
                </div>
                <div className="text-sm text-[#8b949e]">Upcoming Sessions</div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Talks;

import React, { useState } from 'react';

const Hero = () => {
  const [activeOption, setActiveOption] = useState('anyone'); // Default visible text

  return (
    <div className="h-screen bg-black text-white flex flex-col items-center justify-center overflow-hidden animate-fadeIn_long max-w-3xl">
      <div>
        {/* Options */}
        <ul className="options flex space-x-6 mb-2">
          <li
            className={`option anyone ${activeOption === 'anyone' ? 'is--active' : ''}`}
            onClick={() => setActiveOption('anyone')}
          >
            For Anyone
          </li>
          <li
            className={`option recruiter ${activeOption === 'recruiter' ? 'is--active' : ''}`}
            onClick={() => setActiveOption('recruiter')}
          >
            Recruiters
          </li>
          <li
            className={`option manager ${activeOption === 'manager' ? 'is--active' : ''}`}
            onClick={() => setActiveOption('manager')}
          >
            Managers
          </li>
          <li
            className={`option developer ${activeOption === 'developer' ? 'is--active' : ''}`}
            onClick={() => setActiveOption('developer')}
          >
            Developers
          </li>
        </ul>
        <div className="texts">
          <h1 className={`text anyone ${activeOption === 'anyone' ? 'is--visible' : ''}`}>
            I’m a software engineer who’s passionate about solving problems and building thoughtful, reliable solutions.
          </h1>
          <h1 className={`text recruiter ${activeOption === 'recruiter' ? 'is--visible' : ''}`}>
            I’m a detail-oriented engineer driven to deliver polished results and thrive on learning new technologies.
          </h1>
          <h1 className={`text manager ${activeOption === 'manager' ? 'is--visible' : ''}`}>
          I’m committed to excellence and collaboration, delivering reliable, high-quality software through precise solutions.
          </h1>
          <h1 className={`text developer ${activeOption === 'developer' ? 'is--visible' : ''}`}>
          I’m a curious developer who values collaboration, sharing knowledge, clean code and crafting intuitive, effective tools.
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Hero;

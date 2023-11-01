import React from "react";

const Hero = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-4xl font-extrabold tracking-tight lg:text-7xl text-center">
        Summarize Articles with <br className="max-md:hidden" />
        <span className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-transparent">
          OpenAI GPT-4
        </span>
      </h1>
      <h2 className="mt-5 text-lg text-gray-300 lg:text-xl text-center max-w-2xl">
        Enhance your reading experience with Summize, a powerful open-source
        article summarizer. It transforms lengthy articles into concise,
        easy-to-understand summaries for your convenience.
      </h2>
    </div>
  );
};

export default Hero;

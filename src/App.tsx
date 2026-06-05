import { useState, useEffect } from 'react';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Footer from './components/Footer';
import ThemeToggle from './components/ThemeToggle';

function App() {
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem('theme');
    return saved ? saved === 'dark' : true;
  });

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  return (
    <div className="min-h-screen bg-[--color-bg] text-[--color-primary] transition-colors duration-300">
      <div className="mx-auto flex min-h-screen w-full max-w-5xl flex-col px-6 py-7 sm:px-10">
        <header className="flex justify-end">
          <ThemeToggle isDark={isDark} toggle={() => setIsDark(!isDark)} />
        </header>

        <main className="grid flex-1 gap-12 py-14 sm:grid-cols-[220px_1fr] sm:items-start md:grid-cols-[260px_1fr] md:py-24">
          <Hero />
          <div className="max-w-2xl">
            <h1 className="text-4xl font-semibold text-[--color-accent] sm:text-5xl">
              Hi, I'm Gabe
            </h1>
            <div className="mt-8 space-y-5 text-base leading-8 text-[--color-secondary]">
              <p>
                I'm a software engineer at Expedia, working on observability and internal infrastructure systems. I graduated from the University of Michigan in 2023 and am looking for software engineering roles in NYC or remote.
              </p>
              <p>
                Outside work, I spend a lot of time building personal projects, exploring new technologies, and shipping apps to the App Store.
              </p>
            </div>
            <Projects />
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
}

export default App;

import Image from 'next/image';

export default function Home() {
  const profile = {
    name: "Mehtab Ali",
    title: "Software Quality Assurance Engineer",
    tagline: "Bridging the gap between manual precision & automated software testing.",
    photo: "/mehtab-photo.jpg",
    email: "engineer.mehtabali81@gmail.com",
    github: "https://github.com/MehtabAli-81",
    linkedin: "https://www.linkedin.com/in/mehtab-ali-68a82628b"
  };

  const skills = [
    { name: 'QA Manual Testing', category: 'Testing' },
    { name: 'Selenium WebDriver', category: 'Automation' },
    { name: 'Cross-Browser Testing', category: 'Execution' },
    { name: 'Java', category: 'Language' },
    { name: 'SQL', category: 'Database' },
    { name: 'CI/CD Pipelines', category: 'DevOps' },
    { name: 'Git & GitHub', category: 'Version Control' },
    { name: 'Agile & Jira', category: 'Methodology' },
  ];

  const artifacts = [
    {
      title: 'Test Case Documentation',
      description: 'Structured manual test cases covering functional, boundary, UI/UX, and edge case scenarios.',
      icon: '📋'
    },
    {
      title: 'Bug Reports & Logging',
      description: 'Detailed defect reports including reproduction steps, severity, logs, and screenshots.',
      icon: '🐞'
    },
    {
      title: 'Requirements Traceability (RTM)',
      description: 'Mapping software requirements directly to test cases to guarantee full test coverage.',
      icon: '🔗'
    },
    {
      title: 'Execution & Automation Reports',
      description: 'Automated test suite execution summaries and pass/fail reports generated via test frameworks.',
      icon: '📊'
    }
  ];

  const projects = [
    {
      title: 'E-Commerce Manual Testing',
      badge: 'Manual QA',
      description: 'Comprehensive end-to-end manual testing project covering requirements review, test case design, execution, and defect reporting for e-commerce platforms.',
      tech: ['Test Cases', 'Bug Reporting', 'Regression', 'FRS Analysis'],
      link: 'https://github.com/MehtabAli-81/Ecommerce-Manual-Testing-Project'
    },
    {
      title: 'Selenium Test Automation Suite',
      badge: 'Automation',
      description: 'Transitioned manual testing flows to automated scripts using Java and Selenium WebDriver for user authentication and UI interactions.',
      tech: ['Java', 'Selenium WebDriver', 'JUnit/TestNG', 'Git'],
      link: 'https://github.com/MehtabAli-81/Selenium-Login-Test-Automation-Manual-to-Automation-'
    },
    {
      title: 'Selenium Cross-Browser Testing',
      badge: 'Compatibility',
      description: 'Automated test suite executing cross-browser compatibility checks across multiple web browsers to ensure consistent UI performance.',
      tech: ['Selenium', 'Java', 'Chrome/Firefox/Edge', 'Parallel Execution'],
      link: 'https://github.com/MehtabAli-81/selenium-cross-browser-testing'
    }
  ];

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 relative overflow-hidden font-sans selection:bg-emerald-500 selection:text-slate-950">
      
      {/* Background Subtle Gradient Glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 py-16 space-y-20 relative z-10">

        {/* Hero Section */}
        <section className="flex flex-col md:flex-row items-center gap-10 md:gap-14 pt-8">
          
          {/* Avatar with Glow Ring */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-500" />
            <div className="relative w-44 h-44 md:w-56 md:h-56 rounded-full overflow-hidden border-2 border-slate-800 bg-slate-900">
              <Image 
                src={profile.photo} 
                alt={profile.name} 
                fill
                className="object-cover group-hover:scale-105 transition duration-500"
                priority 
              />
            </div>
          </div>

          {/* Bio Details */}
          <div className="space-y-5 text-center md:text-left flex-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Open to SQA Opportunities
            </div>

            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white">
              Hi, I&apos;m <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">{profile.name}</span>
            </h1>

            <p className="text-lg text-slate-300 font-medium">
              {profile.title}
            </p>

            <p className="text-slate-400 max-w-xl text-sm leading-relaxed">
              {profile.tagline}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3 pt-2 justify-center md:justify-start">
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold text-sm transition-all shadow-lg shadow-emerald-500/20 hover:scale-[1.02]"
              >
                GitHub Profile
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-200 font-medium text-sm transition-all hover:border-slate-700 hover:scale-[1.02]"
              >
                LinkedIn
              </a>
              <a
                href="/resume.pdf"
                download
                className="px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-emerald-500/30 text-emerald-400 font-medium text-sm transition-all hover:border-emerald-500 hover:scale-[1.02]"
              >
                📄 Download CV
              </a>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="space-y-6">
          <div className="border-b border-slate-800/80 pb-4">
            <h2 className="text-2xl font-bold text-white tracking-tight">Core Competencies</h2>
            <p className="text-slate-400 text-sm">Tools and testing methodologies I work with daily</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {skills.map((skill) => (
              <div
                key={skill.name}
                className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800/80 hover:border-emerald-500/40 hover:bg-slate-900 transition duration-300 group"
              >
                <p className="text-xs text-slate-500 font-mono mb-1">{skill.category}</p>
                <p className="text-sm font-semibold text-slate-200 group-hover:text-emerald-400 transition">
                  {skill.name}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* QA Deliverables & Testing Artifacts */}
        <section className="space-y-6">
          <div className="border-b border-slate-800/80 pb-4">
            <h2 className="text-2xl font-bold text-white tracking-tight">Testing Artifacts & Standard Practices</h2>
            <p className="text-slate-400 text-sm">Deliverables generated during manual & automated test lifecycles</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {artifacts.map((item) => (
              <div 
                key={item.title}
                className="p-5 rounded-xl bg-slate-900/40 border border-slate-800/80 hover:border-emerald-500/30 transition duration-300 flex items-start gap-4"
              >
                <span className="text-2xl p-2 rounded-lg bg-slate-800/60 border border-slate-700/50">{item.icon}</span>
                <div className="space-y-1">
                  <h3 className="text-base font-bold text-white">{item.title}</h3>
                  <p className="text-slate-400 text-xs leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Featured Projects Section */}
        <section className="space-y-6">
          <div className="border-b border-slate-800/80 pb-4">
            <h2 className="text-2xl font-bold text-white tracking-tight">Featured Projects</h2>
            <p className="text-slate-400 text-sm">Testing frameworks and automation suites</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {projects.map((proj) => (
              <div 
                key={proj.title}
                className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800/80 hover:border-slate-700 hover:bg-slate-900/80 transition duration-300 flex flex-col justify-between space-y-4 group"
              >
                <div className="space-y-3">
                  <div className="flex justify-between items-center gap-2">
                    <h3 className="text-lg font-bold text-white group-hover:text-emerald-400 transition">
                      {proj.title}
                    </h3>
                    <span className="text-xs px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 font-mono border border-emerald-500/20 flex-shrink-0">
                      {proj.badge}
                    </span>
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {proj.description}
                  </p>
                </div>

                <div className="space-y-4 pt-2">
                  <div className="flex flex-wrap gap-1.5">
                    {proj.tech.map((t) => (
                      <span key={t} className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-950 text-slate-400 border border-slate-800">
                        {t}
                      </span>
                    ))}
                  </div>

                  <a
                    href={proj.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-mono text-emerald-400 hover:underline pt-1"
                  >
                    View Repository →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Academic Background Section */}
        <section className="space-y-6">
          <div className="border-b border-slate-800/80 pb-4">
            <h2 className="text-2xl font-bold text-white tracking-tight">Education & Background</h2>
            <p className="text-slate-400 text-sm">Academic foundations in Computer Science</p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800/80 hover:border-slate-700 transition duration-300 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div className="space-y-1">
              <span className="text-xs font-mono text-emerald-400">Bachelor of Science</span>
              <h3 className="text-xl font-bold text-white">Computer Science</h3>
              <p className="text-slate-400 text-sm">University of Sindh, Jamshoro</p>
            </div>
            <div className="md:text-right">
              <span className="inline-block px-3 py-1 rounded-full bg-slate-800 text-slate-300 text-xs font-mono border border-slate-700">
                Final Year Student
              </span>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-slate-800/80 pt-8 text-center text-xs text-slate-500 space-y-2">
          <p>© {new Date().getFullYear()} Mehtab Ali. All rights reserved.</p>
          <p>
            Contact: <a href={`mailto:${profile.email}`} className="text-emerald-400 hover:underline">{profile.email}</a>
          </p>
        </footer>

      </div>
    </main>
  );
}
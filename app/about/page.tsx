import Section from '@/components/Section';
import Tag from '@/components/Tag';
import Card from '@/components/Card';

export default function AboutPage() {
  const bio = `I'm Muhammad Athaqil Makarim (Aqil), a double-degree Computer Science graduate from the University of Queensland and the University of Indonesia (2025). My passion lies in transforming complex systems and data into clear, usable, and responsive interfaces. I thrive on crafting intuitive user experiences backed by robust data insights and efficient code. I'm interested in roles as a Software Engineer (Frontend/Full-stack), UI/UX Designer, or Data Analyst.`;

  const educationCourses = [
    "Web Design", "Human-Computer Interaction", "Information Visualization",
    "Design Thinking", "Software Engineering", "Data Science at Scale",
    "Relational Database Systems", "Machine Learning"
  ];

  const skills = {
    Frontend: ["React.js", "Next.js", "Tailwind CSS", "HTML", "CSS", "JavaScript", "Flutter"],
    Design: ["Figma", "Wireframing & Prototyping", "User Flows & IA", "Design Systems", "Accessibility (WCAG)", "Usability Testing"],
    Data: ["Python (Pandas, Jupyter)", "SQL", "Data Visualization (Matplotlib, Seaborn)", "Google Analytics"],
    Backend: ["Firebase", "Node.js", "Django", "PHP", "PostgreSQL"],
    Tools: ["Git", "VS Code", "Notion", "Jupyter", "IntelliJ", "PyCharm", "Excel", "Dataflow"],
  };

  const stats = [
    { 
      label: "Years of Study", 
      value: "4+", 
      icon: (
        <svg className="w-5 h-5 sm:w-6 sm:h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"></path>
        </svg>
      )
    },
    { 
      label: "Projects Completed", 
      value: "10+", 
      icon: (
        <svg className="w-5 h-5 sm:w-6 sm:h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
        </svg>
      )
    },
    { 
      label: "Technologies", 
      value: "20+", 
      icon: (
        <svg className="w-5 h-5 sm:w-6 sm:h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
        </svg>
      )
    },
    { 
      label: "Certifications", 
      value: "2+", 
      icon: (
        <svg className="w-5 h-5 sm:w-6 sm:h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
      )
    },
  ];

  return (
    <div className="container max-w-4xl mx-auto px-4">
      <Section>
        <div className="text-center mb-8 md:mb-12 animate-fade-in-up">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6 gradient-text animate-fade-in-up animate-delay-200">
            About Me
          </h1>
          <p className="text-base sm:text-lg md:text-xl max-w-2xl mx-auto animate-fade-in-up animate-delay-300" style={{ color: 'var(--text)', opacity: '0.8' }}>
            A brief introduction to my background, skills, and what drives my passion for technology.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-8 md:mb-12">
          {stats.map((stat, index) => (
            <Card key={stat.label} className="text-center animate-scale-in hover-lift" style={{ animationDelay: `${400 + index * 100}ms` }}>
              <div className="p-3 md:p-4">
                <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 mx-auto mb-2 md:mb-3 bg-primary/10 rounded-full flex items-center justify-center">
                  {stat.icon}
                </div>
                <p className="text-xl sm:text-2xl md:text-3xl font-bold mb-1" style={{ color: 'var(--text)' }}>{stat.value}</p>
                <p className="text-xs sm:text-sm" style={{ color: 'var(--text)', opacity: '0.7' }}>{stat.label}</p>
              </div>
            </Card>
          ))}
        </div>

        {/* Bio and Education */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-8 md:mb-12">
          <div className="animate-fade-in-left">
            <h2 className="text-xl sm:text-2xl font-semibold mb-3 md:mb-4" style={{ color: 'var(--text)' }}>Bio</h2>
            <p className="text-sm sm:text-base leading-relaxed" style={{ color: 'var(--text)', opacity: '0.8' }}>{bio}</p>
          </div>
          <div className="animate-fade-in-right">
            <h2 className="text-xl sm:text-2xl font-semibold mb-3 md:mb-4" style={{ color: 'var(--text)' }}>Education & Background</h2>
            <p className="text-base sm:text-lg font-medium mb-2" style={{ color: 'var(--primary)' }}>
              Bachelor of Computer Science (Double Degree)
            </p>
            <p className="text-sm sm:text-base mb-3 md:mb-4" style={{ color: 'var(--text)', opacity: '0.8' }}>
              University of Queensland (Australia) & University of Indonesia (Indonesia) — Graduated 2025
            </p>
            <h3 className="text-base sm:text-lg font-semibold mb-2" style={{ color: 'var(--text)' }}>Relevant Coursework:</h3>
            <div className="flex flex-wrap gap-1 md:gap-2">
              {educationCourses.map((course, index) => (
                <Tag key={index} variant="secondary" className="text-xs hover-scale">{course}</Tag>
              ))}
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mb-8 md:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 md:mb-6 text-center gradient-text animate-fade-in-up">Skills</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {Object.entries(skills).map(([category, skillList], index) => (
              <div key={category} className="bg-surface/40 p-4 md:p-6 rounded-[var(--radius)] border border-border hover:shadow-md hover:-translate-y-1 transition-all duration-300 ease-out-expo animate-fade-in-up hover-lift" style={{ animationDelay: `${600 + index * 150}ms` }}>
                <h3 className="text-lg sm:text-xl font-semibold mb-2 md:mb-3" style={{ color: 'var(--text)' }}>{category}</h3>
                <div className="flex flex-wrap gap-1 md:gap-2">
                  {skillList.map((skill) => (
                    <Tag key={skill} className="hover-scale text-xs">{skill}</Tag>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications Section */}
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 md:mb-6 text-center gradient-text animate-fade-in-up">Licenses & Certifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            <Card className="border-primary border-2 hover:-translate-y-1 animate-fade-in-left hover-lift">
              <div className="flex items-start gap-3 md:gap-4 p-4 md:p-6">
                <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 bg-primary/10 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-primary" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.24 10.285V11.69h4.225c-.183 1.87-2.075 4.21-4.225 4.21-2.97 0-5.39-2.42-5.39-5.39s2.42-5.39 5.39-5.39c1.625 0 2.865.7 3.75 1.56l.975-.975C15.65 2.795 13.9 2 12.24 2c-5.5 0-9.96 4.46-9.96 9.96s4.46 9.96 9.96 9.96c5.21 0 9.5-3.88 9.5-9.96 0-.65-.08-1.3-.195-1.915H12.24z"/>
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg sm:text-xl font-semibold mb-1" style={{ color: 'var(--text)' }}>Google Data Analytics</h3>
                  <p className="text-sm mb-2" style={{ color: 'var(--text)', opacity: '0.8' }}>Google • 2024</p>
                  <p className="text-xs sm:text-sm mb-3" style={{ color: 'var(--text)', opacity: '0.6' }}>
                    Completed a comprehensive program covering data cleaning, analysis, visualization, and interpretation using SQL, R, and Tableau.
                  </p>
                  <div className="flex flex-wrap gap-1 md:gap-2">
                    <Tag className="hover-scale text-xs">Data Analysis</Tag>
                    <Tag className="hover-scale text-xs">Google Analytics</Tag>
                    <Tag className="hover-scale text-xs">SQL</Tag>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="border-dashed border-2 border-border bg-transparent flex items-center justify-center text-center hover:-translate-y-1 animate-fade-in-right hover-lift" style={{ color: 'var(--text)', opacity: '0.6' }}>
              <div className="p-4 md:p-6 flex flex-col items-center">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-primary/10 rounded-full flex items-center justify-center mb-2 md:mb-3">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                  </svg>
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2" style={{ color: 'var(--text)' }}>More Certifications Coming Soon!</h3>
                <p className="text-xs sm:text-sm">Stay tuned for additional credentials in software development and data science.</p>
              </div>
            </Card>
          </div>
        </div>
      </Section>
    </div>
  );
}

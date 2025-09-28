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
    { label: "Years of Study", value: "4+", icon: (
      <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
      </svg>
    )},
    { label: "Projects Completed", value: "10+", icon: (
      <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    )},
    { label: "Technologies", value: "20+", icon: (
      <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    )},
    { label: "Certifications", value: "1", icon: (
      <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    )}
  ];

  return (
    <div className="container max-w-4xl mx-auto">
      <Section>
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            About Me
          </h1>
          <p className="text-lg md:text-xl text-text/80 max-w-2xl mx-auto">
            Get to know my journey, skills, and passion for creating meaningful digital experiences.
          </p>
        </div>

        {/* Stats Section */}
        <Card className="mb-12 bg-gradient-to-r from-primary/5 to-surface/30 border-primary/20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-3">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    {stat.icon}
                  </div>
                </div>
                <div className="text-2xl md:text-3xl font-bold text-text mb-1">{stat.value}</div>
                <div className="text-sm text-text/70">{stat.label}</div>
              </div>
            ))}
          </div>
        </Card>

        {/* Bio and Education */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <Card className="group hover:shadow-lg transition-all duration-300">
            <div className="flex items-start gap-3 mb-4">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-text">Personal Bio</h2>
            </div>
            <p className="text-text/80 leading-relaxed">{bio}</p>
          </Card>

          <Card className="group hover:shadow-lg transition-all duration-300">
            <div className="flex items-start gap-3 mb-4">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-text">Education</h2>
            </div>
            <div className="space-y-4">
              <div>
                <p className="text-lg font-semibold text-primary mb-1">
                  Bachelor of Computer Science (Double Degree)
                </p>
                <p className="text-text/80 text-sm">
                  University of Queensland (Australia) & University of Indonesia (Indonesia)
                </p>
                <p className="text-text/60 text-xs mt-1">Graduated 2025</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-text mb-2">Relevant Coursework:</h3>
                <div className="flex flex-wrap gap-2">
                  {educationCourses.map((course, index) => (
                    <Tag key={index} variant="secondary" className="text-xs">
                      {course}
                    </Tag>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Skills Section */}
        <Card className="mb-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-text mb-4">Technical Skills</h2>
            <p className="text-text/80">A comprehensive overview of my technical expertise across different domains</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(skills).map(([category, skillList]) => (
              <div key={category} className="group">
                <div className="bg-surface/40 p-6 rounded-[var(--radius)] border border-border hover:shadow-md hover:-translate-y-1 transition-all duration-300 ease-out-expo h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <h3 className="text-xl font-semibold text-text">{category}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skillList.map((skill) => (
                      <Tag key={skill} variant="tech" className="text-xs">
                        {skill}
                      </Tag>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Certifications Section */}
        <Card>
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-text mb-4">Licenses & Certifications</h2>
            <p className="text-text/80">Professional credentials that validate my expertise</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card style={{ borderColor: 'var(--primary)', borderWidth: '2px' }} className="group hover:shadow-lg transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.24 10.285V11.69h4.225c-.183 1.87-2.075 4.21-4.225 4.21-2.97 0-5.39-2.42-5.39-5.39s2.42-5.39 5.39-5.39c1.625 0 2.865.7 3.75 1.56l.975-.975C15.65 2.795 13.9 2 12.24 2c-5.5 0-9.96 4.46-9.96 9.96s4.46 9.96 9.96 9.96c5.21 0 9.5-3.88 9.5-9.96 0-.65-.08-1.3-.195-1.915H12.24z"/>
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-text mb-1">Google Data Analytics</h3>
                  <p className="text-text/80 text-sm mb-2">Google • 2024</p>
                  <p className="text-sm text-text/60 mb-3">
                    Completed a comprehensive program covering data cleaning, analysis, visualization, and interpretation using SQL, R, and Tableau.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Tag variant="primary" className="text-xs">Data Analysis</Tag>
                    <Tag variant="primary" className="text-xs">Google Analytics</Tag>
                    <Tag variant="primary" className="text-xs">SQL</Tag>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="border-dashed border-2 border-border bg-transparent flex items-center justify-center text-center text-text/60 group hover:shadow-md transition-all duration-300">
              <div className="p-6">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">More Certifications Coming Soon!</h3>
                <p className="text-sm">Stay tuned for additional credentials in software development and data science.</p>
              </div>
            </Card>
          </div>
        </Card>
      </Section>
    </div>
  );
}

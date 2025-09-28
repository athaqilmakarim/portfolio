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

  return (
    <div className="container max-w-4xl mx-auto">
      <Section>
        <h1 className="text-4xl font-bold mb-6 text-center">About Me</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-text">Bio</h2>
            <p className="text-text/80 mb-4">{bio}</p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-text">Education & Background</h2>
            <p className="text-lg font-medium text-primary mb-2">
              Bachelor of Computer Science (Double Degree)
            </p>
            <p className="text-text/80 mb-4">
              University of Queensland (Australia) & University of Indonesia (Indonesia) &mdash; Graduated 2025
            </p>
            <h3 className="text-xl font-semibold text-text mb-2">Relevant Coursework:</h3>
            <ul className="list-disc list-inside text-text/80 space-y-1">
              {educationCourses.map((course, index) => (
                <li key={index}>{course}</li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section className="mt-10 md:mt-16">
        <h2 className="text-3xl font-bold mb-6 text-center">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(skills).map(([category, skillList]) => (
            <div key={category} className="bg-surface/40 p-6 rounded-[var(--radius)] border border-border">
              <h3 className="text-xl font-semibold text-text mb-3">{category}</h3>
              <div className="flex flex-wrap gap-2">
                {skillList.map((skill) => (
                  <Tag key={skill}>{skill}</Tag>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section className="mt-10 md:mt-16">
        <h2 className="text-3xl font-bold mb-6 text-center">Licenses & Certifications</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card style={{ borderColor: 'var(--primary)', borderWidth: '2px' }}>
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.24 10.285V11.69h4.225c-.183 1.87-2.075 4.21-4.225 4.21-2.97 0-5.39-2.42-5.39-5.39s2.42-5.39 5.39-5.39c1.625 0 2.865.7 3.75 1.56l.975-.975C15.65 2.795 13.9 2 12.24 2c-5.5 0-9.96 4.46-9.96 9.96s4.46 9.96 9.96 9.96c5.21 0 9.5-3.88 9.5-9.96 0-.65-.08-1.3-.195-1.915H12.24z"/>
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-text">Google Data Analytics</h3>
                <p className="text-text/80">Google • 2024</p>
                <p className="text-sm text-text/60 mt-2">
                  Completed a comprehensive program covering data cleaning, analysis, visualization, and interpretation using SQL, R, and Tableau.
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  <Tag>Data Analysis</Tag>
                  <Tag>Google Analytics</Tag>
                  <Tag>SQL</Tag>
                </div>
              </div>
            </div>
          </Card>

          <Card className="border-dashed border-2 border-border bg-transparent flex items-center justify-center text-center text-text/60">
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">More Certifications Coming Soon!</h3>
              <p className="text-sm">Stay tuned for additional credentials in software development and data science.</p>
            </div>
          </Card>
        </div>
      </Section>
    </div>
  );
}

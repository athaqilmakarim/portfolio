import { experiences } from '@/data/experience';
import Section from '@/components/Section';
import Card from '@/components/Card';
import Tag from '@/components/Tag';
import Link from 'next/link';

export default function ExperiencePage() {
  return (
    <div className="container max-w-4xl mx-auto">
      <Section>
        <h1 className="text-4xl font-bold mb-6 text-center">Work Experience</h1>
        <p className="text-lg text-text/80 text-center mb-10">
          A detailed look into my professional roles and contributions.
        </p>

        <div className="space-y-10">
          {experiences.map((exp) => (
            <Card key={exp.slug} className="group hover:shadow-lg transition-shadow duration-300 ease-out-expo">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                <h2 className="text-2xl font-bold text-text">{exp.title}</h2>
                <span className="text-sm text-text/60 mt-1 md:mt-0">{exp.year}</span>
              </div>
              <p className="text-lg font-medium text-primary mb-2">{exp.company} &mdash; {exp.role}</p>
              <p className="text-text/80 mb-4">{exp.summary}</p>

              {exp.achievements && exp.achievements.length > 0 && (
                <div className="mb-4">
                  <h3 className="text-lg font-semibold text-text mb-2">Key Achievements:</h3>
                  <ul className="list-disc list-inside text-text/80 space-y-1">
                    {exp.achievements.map((achievement, idx) => (
                      <li key={idx}>{achievement}</li>
                    ))}
                  </ul>
                </div>
              )}

              {exp.tech && exp.tech.length > 0 && (
                <div className="mb-4">
                  <h3 className="text-lg font-semibold text-text mb-2">Technologies & Skills:</h3>
                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((tech) => (
                      <Tag key={tech}>{tech}</Tag>
                    ))}
                  </div>
                </div>
              )}

              {exp.links && exp.links.length > 0 && (
                <div className="mt-4 flex flex-wrap gap-4">
                  {exp.links.map((link) => (
                    <Link
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline transition-colors duration-200 ease-in-out focus-outline"
                    >
                      {link.label} &rarr;
                    </Link>
                  ))}
                </div>
              )}
            </Card>
          ))}
        </div>
      </Section>
    </div>
  );
}

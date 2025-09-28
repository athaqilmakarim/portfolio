import { experiences } from '@/data/experience';
import Section from '@/components/Section';
import Card from '@/components/Card';
import Tag from '@/components/Tag';
import Link from 'next/link';

export default function ExperiencePage() {
  return (
    <div className="container max-w-4xl mx-auto px-4">
      <Section>
        <div className="text-center mb-8 md:mb-12 animate-fade-in-up">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6 gradient-text animate-fade-in-up animate-delay-200">
            Work Experience
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-text/80 max-w-2xl mx-auto animate-fade-in-up animate-delay-300">
            A detailed look into my professional roles, achievements, and the impact I&apos;ve made in each position.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="space-y-6 md:space-y-8">
          {experiences.map((exp, index) => (
            <Card key={exp.slug} className="group hover:shadow-lg transition-all duration-300 animate-fade-in-up hover-lift" style={{ animationDelay: `${400 + index * 200}ms` }}>
              <div className="p-4 md:p-6">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4 md:mb-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 md:gap-3 mb-2">
                      <div className="w-2 h-2 sm:w-3 sm:h-3 bg-primary rounded-full flex-shrink-0"></div>
                      <span className="text-xs sm:text-sm font-medium text-primary/80">{exp.year}</span>
                    </div>
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-text mb-1 md:mb-2">{exp.title}</h2>
                    <p className="text-base sm:text-lg font-semibold text-primary mb-1">{exp.company}</p>
                    <p className="text-text/70 text-sm">{exp.role}</p>
                  </div>
                  <div className="mt-3 md:mt-0">
                    <span className="inline-flex items-center px-2 md:px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20">
                      Experience #{String(index + 1).padStart(2, '0')}
                    </span>
                  </div>
                </div>

                <div className="mb-4 md:mb-6">
                  <p className="text-sm sm:text-base text-text/80 leading-relaxed">{exp.summary}</p>
                </div>

                {exp.achievements && exp.achievements.length > 0 && (
                  <div className="mb-4 md:mb-6">
                    <h3 className="text-base sm:text-lg font-semibold text-text mb-2 md:mb-3 flex items-center gap-2">
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Key Achievements
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-3">
                      {exp.achievements.map((achievement, idx) => (
                        <div key={idx} className="flex items-start gap-2 md:gap-3 p-2 md:p-3 bg-surface/30 rounded-lg hover-scale smooth-transition">
                          <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-primary rounded-full flex-shrink-0 mt-1.5 md:mt-2"></div>
                          <span className="text-text/80 text-xs sm:text-sm">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {exp.tech && exp.tech.length > 0 && (
                  <div className="mb-4 md:mb-6">
                    <h3 className="text-base sm:text-lg font-semibold text-text mb-2 md:mb-3 flex items-center gap-2">
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                      </svg>
                      Technologies & Skills
                    </h3>
                    <div className="flex flex-wrap gap-1 md:gap-2">
                      {exp.tech.map((tech) => (
                        <Tag key={tech} variant="tech" className="hover-scale text-xs">{tech}</Tag>
                      ))}
                    </div>
                  </div>
                )}

                {exp.links && exp.links.length > 0 && (
                  <div className="pt-3 md:pt-4 border-t border-border">
                    <div className="flex flex-wrap gap-3 md:gap-4">
                      {exp.links.map((link) => (
                        <Link
                          key={link.label}
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 md:gap-2 text-primary hover:text-primary/80 font-medium transition-colors duration-200 ease-in-out focus-outline hover:-translate-y-0.5 smooth-transition text-sm"
                        >
                          {link.label}
                          <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </Card>
          ))}
        </div>
      </Section>
    </div>
  );
}

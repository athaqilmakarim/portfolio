import Link from 'next/link';
import { projects } from '@/data/projects';
import Button from '@/components/Button';
import Card from '@/components/Card';
import Tag from '@/components/Tag';
import Section from '@/components/Section';

export default function Home() {
  const featuredProjects = projects.slice(0, 3); // Get first 3 projects

  return (
    <div className="relative">
      {/* Background Decorations - Simplified for performance */}
      <div className="absolute inset-0 -z-10 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary rounded-full opacity-20"></div>
        <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-surface rounded-full opacity-20"></div>
        <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-border rounded-full opacity-20"></div>
      </div>

      <Section className="text-center py-12 md:py-16 lg:py-24 relative z-10 hero-section animate-fade-in-up">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold mb-4 gradient-text hero-title animate-fade-in-up animate-delay-200">
          Data-minded developer with a designer&#39;s eye.
        </h1>
        <p className="text-base sm:text-lg md:text-xl max-w-3xl mx-auto mb-6 md:mb-8 px-4 animate-fade-in-up animate-delay-300" style={{ color: 'var(--text)', opacity: '0.8' }}>
          I turn complex systems and data into clear, usable, and responsive interfaces. My passion lies in crafting intuitive user experiences backed by robust data insights and efficient code.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 px-4 animate-fade-in-up animate-delay-400">
          <Button variant="ghost" href="/experience" className="w-full sm:w-auto">Work Experience</Button>
          <Button variant="ghost" href="/projects" className="w-full sm:w-auto">View Projects</Button>
          <Button variant="ghost" href="/CV.pdf" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">Download CV</Button>
        </div>
      </Section>

      <Section className="py-8 md:py-10 lg:py-16 animate-fade-in-up animate-delay-500">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6 md:mb-8 text-center animate-fade-in-up animate-delay-600 px-4" style={{ color: 'var(--text)' }}>Featured Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 items-stretch px-4">
          {featuredProjects.map((project, index) => (
            <Link key={project.slug} href={`/projects/${project.slug}`} className="group project-card animate-fade-in-up hover-lift" style={{ animationDelay: `${700 + index * 100}ms` }}>
              <Card className="h-full flex flex-col hover-lift">
                <div className="flex-1 flex flex-col">
                  {/* Project number indicator */}
                  <div className="flex justify-between items-center mb-3 md:mb-4">
                    <span className="text-xs sm:text-sm font-semibold text-primary/80">Project {String(index + 1).padStart(2, '0')}</span>
                    <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-border/50 flex items-center justify-center text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 project-arrow" style={{ color: 'var(--text)', opacity: '0.6' }}>
                      <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M12 5l7 7-7 7"></path></svg>
                    </div>
                  </div>

                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 project-title" style={{ minHeight: '2.5rem', color: 'var(--text)' }}>{project.title}</h3>
                  <div className="flex flex-wrap gap-1 sm:gap-2 mb-3 md:mb-4">
                    {project.tags.map((tag) => (
                      <Tag key={tag} className="hover-scale text-xs">{tag}</Tag>
                    ))}
                  </div>
                  <p className="text-xs sm:text-sm md:text-base flex-1 project-summary leading-relaxed" style={{ color: 'var(--text)', opacity: '0.8' }}>{project.summary}</p>
                </div>
                <div className="mt-auto pt-3 md:pt-4 group-hover:translate-x-1 transition-transform duration-200 ease-out-expo project-link-text text-sm" style={{ color: 'var(--primary)', opacity: '0.8' }}>
                  View Project Details &rarr;
                </div>
              </Card>
            </Link>
          ))}
        </div>
        <div className="text-center mt-8 md:mt-10 animate-fade-in-up animate-delay-1000 px-4">
          <Button variant="ghost" href="/projects" className="w-full sm:w-auto">View all projects &rarr;</Button>
        </div>
      </Section>
    </div>
  );
}

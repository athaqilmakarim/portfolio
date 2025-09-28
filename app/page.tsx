import Link from 'next/link';
import { projects } from '@/data/projects';
import Button from '@/components/Button';
import Card from '@/components/Card';
import Tag from '@/components/Tag';
import Section from '@/components/Section';

export default function Home() {
  const featuredProjects = projects.slice(0, 3);

  return (
    <div className="relative">
      <Section className="hero-section text-center py-16 md:py-24">
        <div className="hero-text-wrapper">
          <h1 className="hero-title text-5xl md:text-7xl font-extrabold gradient-text">
            Data-minded developer with a designer&apos;s eye.
          </h1>
        </div>
        <p className="text-lg md:text-xl text-text/80 max-w-3xl mx-auto mb-8">
          I turn complex systems and data into clear, usable, and responsive interfaces. My passion lies in crafting intuitive user experiences backed by robust data insights and efficient code.
        </p>
        <div className="flex justify-center space-x-4">
          <Button variant="ghost" href="/experience">Work Experience</Button>
          <Button variant="ghost" href="/projects">View Projects</Button>
          <Button variant="ghost" href="/files/CV.pdf" target="_blank" rel="noopener noreferrer">Download CV</Button>
        </div>
      </Section>

      <Section className="py-10 md:py-16">
        <h2 className="text-4xl font-bold mb-8 text-center">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 items-stretch">
          {featuredProjects.map((project, index) => (
            <Link key={project.slug} href={`/projects/${project.slug}`} className="group project-card">
              <Card className="h-full flex flex-col">
                <div className="flex-1 flex flex-col">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-sm font-semibold text-primary/80 group-hover:text-primary transition-colors duration-300">Project {String(index + 1).padStart(2, '0')}</span>
                    <div className="w-8 h-8 rounded-full bg-border/50 group-hover:bg-primary/20 flex items-center justify-center text-text/60 group-hover:text-primary transition-all duration-300">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M12 5l7 7-7 7"></path></svg>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold mb-2 text-text group-hover:text-primary transition-colors duration-300" style={{ minHeight: '3rem' }}>{project.title}</h3>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <Tag key={tag} className="bg-surface/60 border-surface/80 text-text/70 group-hover:bg-primary/10 group-hover:border-primary/30 group-hover:text-primary transition-all duration-300">{tag}</Tag>
                    ))}
                  </div>
                  <p className="text-text/80 text-base flex-1 group-hover:text-text/90 transition-colors duration-300">{project.summary}</p>
                </div>
                <div className="mt-auto pt-4 text-primary/80 group-hover:text-primary group-hover:translate-x-1 transition-all duration-300 ease-out">
                  View Project Details &rarr;
                </div>
              </Card>
            </Link>
          ))}
        </div>
        <div className="text-center mt-10">
          <Button variant="ghost" href="/projects">View all projects &rarr;</Button>
        </div>
      </Section>
    </div>
  );
}

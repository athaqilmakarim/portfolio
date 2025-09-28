"use client";

import { useState } from 'react';
import { projects } from '@/data/projects';
import Section from '@/components/Section';
import Card from '@/components/Card';
import Tag from '@/components/Tag';
import Link from 'next/link';

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = ['All', 'Frontend', 'UI/UX', 'Data'];

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter(project => project.tags.includes(activeFilter));

  return (
    <div className="container max-w-6xl mx-auto">
      <Section>
        <h1 className="text-4xl font-bold mb-6 text-center">Projects</h1>
        <p className="text-lg text-text/80 text-center mb-10">
          A collection of my work in Frontend Development, UI/UX Design, and Data Analytics.
        </p>

        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {filters.map((filter) => (
            <Tag
              key={filter}
              onClick={() => setActiveFilter(filter)}
              isActive={activeFilter === filter}
            >
              {filter}
            </Tag>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredProjects.map((project) => (
            <Link key={project.slug} href={`/projects/${project.slug}`} className="group project-card">
              <Card className="h-full flex flex-col">
                <div className="flex-1 flex flex-col">
                  <h3 className="text-2xl font-bold mb-2 text-text group-hover:text-primary transition-colors duration-300">{project.title}</h3>
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
      </Section>
    </div>
  );
}

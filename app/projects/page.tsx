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
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Featured Projects
          </h1>
          <p className="text-lg md:text-xl text-text/80 max-w-2xl mx-auto">
            A collection of my work showcasing expertise in Frontend Development, UI/UX Design, and Data Analytics.
          </p>
        </div>

        {/* Filter Tags */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((filter) => (
            <Tag
              key={filter}
              onClick={() => setActiveFilter(filter)}
              isActive={activeFilter === filter}
              className="px-4 py-2 text-sm font-medium"
            >
              {filter}
            </Tag>
          ))}
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredProjects.map((project, index) => (
            <Link key={project.slug} href={`/projects/${project.slug}`} className="group project-card">
              <Card className="h-full flex flex-col hover:shadow-lg transition-all duration-300">
                <div className="flex-1 flex flex-col">
                  {/* Project Header */}
                  <div className="flex justify-between items-center mb-4">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-sm font-medium text-primary/80">
                        Project {String(index + 1).padStart(2, '0')}
                      </span>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-border/50 flex items-center justify-center text-text/60 text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 project-arrow">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M12 5l7 7-7 7"></path>
                      </svg>
                    </div>
                  </div>

                  {/* Project Title */}
                  <h3 className="text-xl md:text-2xl font-bold mb-3 text-text project-title" style={{ minHeight: '3rem' }}>
                    {project.title}
                  </h3>

                  {/* Project Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <Tag key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Tag>
                    ))}
                  </div>

                  {/* Project Summary */}
                  <p className="text-text/80 text-sm md:text-base flex-1 project-summary leading-relaxed">
                    {project.summary}
                  </p>
                </div>

                {/* Project Footer */}
                <div className="mt-auto pt-4 border-t border-border/50">
                  <div className="flex items-center justify-between">
                    <span className="text-primary/80 text-sm font-medium group-hover:translate-x-1 transition-transform duration-200 ease-out-expo project-link-text">
                      View Project Details
                    </span>
                    <svg className="w-4 h-4 text-primary/60 group-hover:translate-x-1 transition-transform duration-200 ease-out-expo" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </Section>
    </div>
  );
}

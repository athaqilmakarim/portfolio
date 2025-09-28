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
    <div className="container max-w-6xl mx-auto px-4">
      <Section>
        <div className="text-center mb-8 md:mb-12 animate-fade-in-up">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6 gradient-text animate-fade-in-up animate-delay-200">
            Featured Projects
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-text/80 max-w-2xl mx-auto animate-fade-in-up animate-delay-300">
            A collection of my work showcasing expertise in Frontend Development, UI/UX Design, and Data Analytics.
          </p>
        </div>

        {/* Filter Tags */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-8 md:mb-12 animate-fade-in-up animate-delay-400">
          {filters.map((filter) => (
            <Tag
              key={filter}
              onClick={() => setActiveFilter(filter)}
              isActive={activeFilter === filter}
              className="px-3 md:px-4 py-1.5 md:py-2 text-xs sm:text-sm font-medium hover-scale smooth-transition"
            >
              {filter}
            </Tag>
          ))}
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {filteredProjects.map((project, index) => (
            <Link key={project.slug} href={`/projects/${project.slug}`} className="group project-card animate-fade-in-up hover-lift" style={{ animationDelay: `${500 + index * 100}ms` }}>
              <Card className="h-full flex flex-col hover:shadow-lg transition-all duration-300">
                <div className="flex-1 flex flex-col p-4 md:p-6">
                  {/* Project Header */}
                  <div className="flex justify-between items-center mb-3 md:mb-4">
                    <div className="flex items-center gap-1.5 md:gap-2">
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-primary rounded-full"></div>
                      <span className="text-xs sm:text-sm font-medium text-primary/80">
                        Project {String(index + 1).padStart(2, '0')}
                      </span>
                    </div>
                    <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-border/50 flex items-center justify-center text-text/60 text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 project-arrow">
                      <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M12 5l7 7-7 7"></path>
                      </svg>
                    </div>
                  </div>

                  {/* Project Title */}
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 md:mb-3 text-text project-title" style={{ minHeight: '2.5rem' }}>
                    {project.title}
                  </h3>

                  {/* Project Tags */}
                  <div className="flex flex-wrap gap-1 md:gap-2 mb-3 md:mb-4">
                    {project.tags.map((tag) => (
                      <Tag key={tag} variant="secondary" className="text-xs hover-scale">{tag}</Tag>
                    ))}
                  </div>

                  {/* Project Summary */}
                  <p className="text-xs sm:text-sm md:text-base text-text/80 flex-1 project-summary leading-relaxed">
                    {project.summary}
                  </p>
                </div>

                {/* Project Footer */}
                <div className="mt-auto pt-3 md:pt-4 border-t border-border/50 px-4 md:px-6 pb-4 md:pb-6">
                  <div className="flex items-center justify-between">
                    <span className="text-primary/80 text-xs sm:text-sm font-medium group-hover:translate-x-1 transition-transform duration-200 ease-out-expo project-link-text">
                      View Project Details
                    </span>
                    <svg className="w-3 h-3 sm:w-4 sm:h-4 text-primary/60 group-hover:translate-x-1 transition-transform duration-200 ease-out-expo" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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

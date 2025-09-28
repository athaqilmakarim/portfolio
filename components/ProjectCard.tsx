import Link from 'next/link';
import Image from 'next/image';

interface ProjectCardProps {
  title: string;
  slug: string;
  tags: string[];
  summary: string;
  image?: string;
}

export default function ProjectCard({ title, slug, tags, summary, image }: ProjectCardProps) {
  return (
    <Link href={`/projects/${slug}`}>
      <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 p-6 border border-lightgray group">
        {image ? (
          <div className="mb-4 rounded-lg overflow-hidden">
            <Image 
              src={image} 
              alt={title}
              width={400}
              height={192}
              className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        ) : (
          <div className="mb-4 bg-lightgray rounded-lg h-48 flex items-center justify-center">
            <span className="text-darktext/50 text-sm">Project Image</span>
          </div>
        )}
        
        <div className="space-y-3">
          <h3 className="text-xl font-semibold text-darktext group-hover:text-sage transition-colors">
            {title}
          </h3>
          
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span 
                key={tag}
                className="px-3 py-1 bg-sage/10 text-sage text-xs font-medium rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
          
          <p className="text-darktext/80 text-sm leading-relaxed">
            {summary}
          </p>
        </div>
      </div>
    </Link>
  );
}

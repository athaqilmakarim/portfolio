'use client';

interface TagFilterProps {
  tags: string[];
  activeTag: string | null;
  onTagChange: (tag: string | null) => void;
}

export default function TagFilter({ tags, activeTag, onTagChange }: TagFilterProps) {
  return (
    <div className="flex flex-wrap gap-3 mb-8">
      <button
        onClick={() => onTagChange(null)}
        className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
          activeTag === null
            ? 'bg-sage text-white'
            : 'bg-lightgray text-darktext hover:bg-sage/20'
        }`}
      >
        All
      </button>
      {tags.map((tag) => (
        <button
          key={tag}
          onClick={() => onTagChange(tag)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
            activeTag === tag
              ? 'bg-sage text-white'
              : 'bg-lightgray text-darktext hover:bg-sage/20'
          }`}
        >
          {tag}
        </button>
      ))}
    </div>
  );
}

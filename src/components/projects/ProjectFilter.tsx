interface Props {
  tags: string[];
  current: string;
  onChange: (tag: string) => void;
}

const ProjectFilter = ({ tags, current, onChange }: Props) => (
  <div className="mb-6 flex flex-wrap gap-2">
    <button
      className={`rounded-full px-3 py-1 text-sm ${current === 'all' ? 'bg-indigo-600 text-white' : 'bg-gray-200 dark:bg-gray-700'}`}
      onClick={() => onChange('all')}
    >
      All
    </button>
    {tags.map((tag) => (
      <button
        key={tag}
        className={`rounded-full px-3 py-1 text-sm ${current === tag ? 'bg-indigo-600 text-white' : 'bg-gray-200 dark:bg-gray-700'}`}
        onClick={() => onChange(tag)}
      >
        {tag}
      </button>
    ))}
  </div>
);

export default ProjectFilter;

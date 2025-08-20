import { useTheme } from '../../hooks/useTheme';

const ThemeToggle = () => {
  const { theme, toggle } = useTheme();
  return (
    <button
      aria-label="Toggle theme"
      onClick={toggle}
      className="rounded p-2 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-400 dark:hover:bg-gray-700"
    >
      {theme === 'dark' ? '🌙' : '☀️'}
    </button>
  );
};

export default ThemeToggle;

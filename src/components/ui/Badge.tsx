import { HTMLAttributes } from 'react';
import { cn } from '../../lib/utils';

const Badge = ({ className, ...props }: HTMLAttributes<HTMLSpanElement>) => (
  <span
    className={cn(
      'inline-block rounded-md bg-gray-200 px-2 py-1 text-xs dark:bg-gray-700',
      className
    )}
    {...props}
  />
);

export default Badge;

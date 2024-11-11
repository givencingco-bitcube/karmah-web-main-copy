import { LucideIcon } from 'lucide-react';
import * as React from 'react';

import { cn } from '~/lib/utils';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  iconPosition?: 'left' | 'right';
  icon?: LucideIcon;
  iconClassName?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, iconPosition, icon, iconClassName, type, ...props }, ref) => {
    const Icon = icon;

    return (
      <div className="relative w-full">
        {Icon && (
          <div
            className={cn(
              'absolute content-center h-14',
              iconPosition === 'left' && 'left-0 pl-4',
              iconPosition === 'right' && 'right-0 pr-4',
            )}>
            <Icon
              size={24}
              className={iconClassName}
              absoluteStrokeWidth={true}
            />
          </div>
        )}

        <input
          type={type}
          className={cn(
            'px-6',
            iconPosition === 'left' && 'pl-14 pr-4',
            iconPosition === 'right' && 'pr-14 pl-6',
            'flex h-14 w-full rounded-full border bg-background py-4 text-sm',
            'file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground',
            'placeholder:font-normal',
            'disabled:cursor-not-allowed disabled:opacity-50',
            className,
          )}
          ref={ref}
          {...props}
        />
      </div>
    );
  },
);
Input.displayName = 'Input';

export { Input };

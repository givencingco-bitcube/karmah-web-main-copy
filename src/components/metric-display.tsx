import { cn } from '~/lib/utils';

export function MetricDisplay({
  value,
  label,
  color,
}: {
  value: string;
  label: string;
  color:
    | 'text-primary-saturn-orange'
    | 'text-secondary-aqua'
    | 'text-primary-happy';
  className?: string;
}) {
  return (
    <div className="flex flex-col gap-4 text-center font-antiqueOlive">
      <span className={cn('text-4xl -rotate-2', color)}>{value}</span>
      <span className="text-xl text-secondary-sea-800">{label}</span>
    </div>
  );
}

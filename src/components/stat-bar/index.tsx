interface Props {
  label: string;
  value: number;
}

const STAT_MAX = 150;

const StatBar = ({ label, value }: Props) => {
  const pct = Math.min((value / STAT_MAX) * 100, 100);
  return (
    <div className="flex items-center gap-2">
      <span className="w-12 text-right font-['Press_Start_2P'] text-[7px] text-indigo-300">
        {label}
      </span>
      <div className="flex-1 h-2 bg-white/10">
        <div
          className="h-full bg-indigo-500 transition-all duration-300"
          style={{ width: `${pct}%` }}
        />
      </div>
      <span className="w-8 text-right text-xs font-mono text-white/70">
        {value}
      </span>
    </div>
  );
};

export default StatBar;

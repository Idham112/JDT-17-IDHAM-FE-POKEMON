import { Button } from "@/components/ui/button";

interface Props {
  page: number;
  onPrev: () => void;
  onNext: () => void;
}

const Pagination = ({ page, onPrev, onNext }: Props) => {
  return (
    <div className="flex items-center justify-center gap-6 py-4">
      <Button
        variant="outline"
        size="sm"
        onClick={onPrev}
        disabled={page === 1}
        className="rounded-none border-2 border-stone-800 px-3 py-1.5 font-['Press_Start_2P'] text-[9px] uppercase tracking-wider text-stone-800 hover:bg-stone-800 hover:text-white disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-stone-800"
      >
        ◄ Prev
      </Button>
      <Button
        variant="outline"
        size="sm"
        onClick={onNext}
        className="rounded-none border-2 border-stone-800 px-3 py-1.5 font-['Press_Start_2P'] text-[9px] uppercase tracking-wider text-stone-800 hover:bg-stone-800 hover:text-white"
      >
        Next ►
      </Button>
    </div>
  );
};

export default Pagination;

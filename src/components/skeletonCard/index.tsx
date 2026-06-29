const SkeletonCard = () => {
  return (
    <div className="flex animate-pulse flex-col items-center border border-white/5 bg-white/5 p-4 pt-3">
      <div className="mb-2 h-3 w-14 self-start bg-white/10" />
      <div className="flex h-24 items-center justify-center py-2">
        <div className="h-20 w-20 bg-white/10" />
      </div>
      <div className="mt-1 h-4 w-24 bg-white/10" />
      <div className="mt-2 flex gap-2">
        <div className="h-3 w-10 bg-white/10" />
        <div className="h-3 w-12 bg-white/10" />
      </div>
    </div>
  );
};

export default SkeletonCard;
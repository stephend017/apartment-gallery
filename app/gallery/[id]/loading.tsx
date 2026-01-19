export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 dark:bg-black p-4 sm:p-6 md:p-8">
      <main
        className="
  w-full
  max-w-4xl
  max-w-sm mx-auto
  p-6
  rounded-2xl 
  shadow-xl
  bg-white/50 
  dark:bg-black/30
  backdrop-blur-lg 
  backdrop-saturate-150
  border 
  border-white/20 
  dark:border-white/10
  animate-pulse
"
      >
        {/* Title */}
        <div className="h-10 sm:h-12 w-2/3 bg-zinc-200/30 dark:bg-zinc-800/30 rounded mb-4" />

        {/* Meta */}
        <div className="h-3 sm:h-4 w-1/3 bg-zinc-200/30 dark:bg-zinc-800/30 rounded mb-6" />

        {/* Description */}
        <div className="space-y-2 sm:space-y-3 mb-10">
          <div className="h-4 sm:h-5 bg-zinc-200/30 dark:bg-zinc-800/30 rounded" />
          <div className="h-4 sm:h-5 bg-zinc-200/30 dark:bg-zinc-800/30 rounded w-5/6" />
          <div className="h-4 sm:h-5 bg-zinc-200/30 dark:bg-zinc-800/30 rounded w-4/6" />
        </div>

        {/* Images */}
        <div className="flex flex-col gap-6 justify-center">
          <div className="w-full sm:w-[175px] h-[175px] bg-zinc-200/30 dark:bg-zinc-800/30 rounded-t-2xl rounded-b-lg" />
          <div className="w-full sm:w-[175px] h-[175px] bg-zinc-200/30 dark:bg-zinc-800/30 rounded-t-2xl rounded-b-lg" />
        </div>
      </main>
    </div>
  );
}

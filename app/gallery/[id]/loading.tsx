export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 dark:bg-black">
      <main className="max-w-4xl w-full p-12 bg-white dark:bg-black rounded-2xl shadow animate-pulse">
        {/* Title */}
        <div className="h-12 w-2/3 bg-zinc-200 dark:bg-zinc-800 rounded mb-4" />

        {/* Meta */}
        <div className="h-4 w-1/3 bg-zinc-200 dark:bg-zinc-800 rounded mb-6" />

        {/* Description */}
        <div className="space-y-3 mb-10">
          <div className="h-4 bg-zinc-200 dark:bg-zinc-800 rounded" />
          <div className="h-4 bg-zinc-200 dark:bg-zinc-800 rounded w-5/6" />
          <div className="h-4 bg-zinc-200 dark:bg-zinc-800 rounded w-4/6" />
        </div>

        {/* Images */}
        <div className="flex gap-6 justify-center">
          <div className="w-[350px] h-[350px] bg-zinc-200 dark:bg-zinc-800 rounded-2xl" />
          <div className="w-[350px] h-[350px] bg-zinc-200 dark:bg-zinc-800 rounded-2xl" />
        </div>
      </main>
    </div>
  );
}

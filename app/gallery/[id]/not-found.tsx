export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 dark:bg-black">
      <main className="max-w-3xl p-12 bg-white dark:bg-black rounded-lg shadow text-center">
        <h1 className="text-4xl font-extrabold mb-4">Gallery Page Not Found</h1>
        <p className="text-lg text-zinc-700 dark:text-zinc-300">
          This gallery entry does not exist.
        </p>
      </main>
    </div>
  );
}

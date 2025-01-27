export default function Home() {
  return (
    <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
      <div className="container">
        <h1>Quiz App</h1>
        <a href="/quiz">
          <button>Start Quiz</button>
        </a>
      </div>
    </main>
  );
}

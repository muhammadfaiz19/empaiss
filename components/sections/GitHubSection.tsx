import GitHubCalendar from "react-github-calendar";

export default function GitHubSection() {
  return (
    <section className="py-6 md:py-12">
      <h2 className="text-3xl font-bold mb-6 text-center">
        GitHub Contributions
      </h2>
      <div className="bg-muted rounded-lg p-4 overflow-hidden w-full">
        <div className="w-full flex items-center justify-center">
          <GitHubCalendar username="muhammadfaiz19" blockSize={17} />
        </div>
      </div>
    </section>
  );
}
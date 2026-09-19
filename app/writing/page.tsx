import { getAllEssays } from "@/lib/writing";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WritingList from "@/components/writing/WritingList";

export const metadata = {
  title: "Writing",
  description:
    "Essays on data engineering, applied AI, and the craft of building software.",
};

export default function WritingPage() {
  const essays = getAllEssays();

  return (
    <>
      <Navbar />
      <main className="pt-14 min-h-screen">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-3xl font-bold text-neutral-900 dark:text-white mb-2">
            Writing
          </h1>
          <p className="text-muted mb-10">
            Essays on data engineering, applied AI, and the craft of building
            software, originally published on LinkedIn.
          </p>
          <WritingList essays={essays} />
        </div>
      </main>
      <Footer />
    </>
  );
}

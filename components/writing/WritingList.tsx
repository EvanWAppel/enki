"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import type { Essay } from "@/lib/writing";

function EssayCard({ essay }: { essay: Essay }) {
  return (
    <Link
      href={`/writing/${essay.slug}`}
      className="group block rounded-xl border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-800 overflow-hidden hover:border-accent hover:shadow-sm transition-all"
    >
      {essay.image && (
        <div className="w-full bg-neutral-100 dark:bg-neutral-700">
          <Image
            src={essay.image}
            alt={essay.title}
            width={0}
            height={0}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="w-full h-auto"
          />
        </div>
      )}
      <div className="p-5">
        <div className="flex items-start justify-between gap-3 mb-2">
          <h3 className="font-semibold text-neutral-900 dark:text-white group-hover:text-accent transition-colors leading-snug">
            {essay.title}
          </h3>
          <span className="shrink-0 text-xs font-medium px-2 py-0.5 rounded-full bg-neutral-100 dark:bg-neutral-700 text-muted">
            {essay.lane}
          </span>
        </div>
        <p className="text-sm text-muted leading-relaxed">{essay.excerpt}</p>
      </div>
    </Link>
  );
}

export default function WritingList({ essays }: { essays: Essay[] }) {
  const lanes = Array.from(new Set(essays.map((e) => e.lane))).filter(Boolean);
  const [filter, setFilter] = useState<string>("all");

  const visible =
    filter === "all" ? essays : essays.filter((e) => e.lane === filter);

  return (
    <div>
      {/* Lane filter bar */}
      <div className="flex flex-wrap gap-2 mb-8">
        {["all", ...lanes].map((lane) => (
          <button
            key={lane}
            onClick={() => setFilter(lane)}
            className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
              filter === lane
                ? "bg-accent text-white"
                : "bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 hover:bg-neutral-200 dark:hover:bg-neutral-700"
            }`}
          >
            {lane === "all" ? "All" : lane}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {visible.map((essay) => (
          <EssayCard key={essay.slug} essay={essay} />
        ))}
      </div>
    </div>
  );
}

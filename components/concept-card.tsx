"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"
import { cn } from "@/lib/utils"

interface ConceptCardProps {
  id: string
  title: string
  author: string
  summary: string
  details: string
  color: "blue" | "amber" | "slate"
}

export function ConceptCard({ id, title, author, summary, details, color }: ConceptCardProps) {
  const [expanded, setExpanded] = useState(false)

  const colorClasses = {
    blue: {
      card: "border-blue-200 bg-blue-50 hover:bg-blue-100 dark:border-blue-800 dark:bg-blue-950/50 dark:hover:bg-blue-900/50",
      title: "text-blue-800 dark:text-blue-300",
    },
    amber: {
      card: "border-amber-200 bg-amber-50 hover:bg-amber-100 dark:border-amber-800 dark:bg-amber-950/50 dark:hover:bg-amber-900/50",
      title: "text-amber-800 dark:text-amber-300",
    },
    slate: {
      card: "border-gray-200 bg-gray-50 hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800/50 dark:hover:bg-gray-700/50",
      title: "text-gray-800 dark:text-gray-300",
    },
  }

  return (
    <div
      className={cn(
        "transition-all duration-300 cursor-pointer rounded-lg border p-6 focus-visible:focus-visible",
        colorClasses[color].card,
      )}
      onClick={() => setExpanded(!expanded)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault()
          setExpanded(!expanded)
        }
      }}
      aria-expanded={expanded}
      aria-controls={`concept-details-${id}`}
    >
      <h3 className={cn("text-xl font-bold mb-2", colorClasses[color].title)}>{title}</h3>
      <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">({author})</p>
      <p className="text-gray-700 dark:text-gray-300 mb-4">{summary}</p>

      <div className="w-full flex items-center justify-between text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
        <span>{expanded ? "Mostrar Menos" : "Saiba Mais"}</span>
        {expanded ? (
          <ChevronUp className="h-4 w-4" aria-hidden="true" />
        ) : (
          <ChevronDown className="h-4 w-4" aria-hidden="true" />
        )}
      </div>

      {expanded && (
        <div
          id={`concept-details-${id}`}
          className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-600 animate-fade-in"
        >
          <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{details}</p>
        </div>
      )}
    </div>
  )
}

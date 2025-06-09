import { TrendingUp, TrendingDown, Users, Building, GraduationCap } from "lucide-react"
import { cn } from "@/lib/utils"

interface SchoolCardProps {
  name: string
  ideb: number
  meta: number
  status: "high" | "low"
  students: string
  infrastructure: string
  staff: string
  quote: string
  color: string
}

export function SchoolCard({
  name,
  ideb,
  meta,
  status,
  students,
  infrastructure,
  staff,
  quote,
  color,
}: SchoolCardProps) {
  return (
    <article className="bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700 p-6 hover:shadow-lg transition-shadow">
      <header className="flex items-center gap-3 mb-4">
        <div
          className={cn(
            "p-2 rounded-lg",
            color === "green" ? "bg-green-100 dark:bg-green-900/30" : "bg-red-100 dark:bg-red-900/30",
          )}
          aria-hidden="true"
        >
          {color === "green" ? (
            <TrendingUp className="h-6 w-6 text-green-600 dark:text-green-400" />
          ) : (
            <TrendingDown className="h-6 w-6 text-red-600 dark:text-red-400" />
          )}
        </div>
        <h3
          className={cn(
            "text-xl font-bold",
            color === "green" ? "text-green-800 dark:text-green-300" : "text-red-800 dark:text-red-300",
          )}
        >
          {name}
        </h3>
      </header>

      <dl className="space-y-3 mb-4">
        <div className="flex items-center gap-2">
          <TrendingUp className="h-4 w-4 text-gray-500" aria-hidden="true" />
          <dt className="font-medium text-gray-900 dark:text-white">IDEB:</dt>
          <dd className="text-gray-700 dark:text-gray-300">
            {ideb} ({status === "high" ? "Acima" : "Abaixo"} da meta)
          </dd>
        </div>
        <div className="flex items-center gap-2">
          <Users className="h-4 w-4 text-gray-500" aria-hidden="true" />
          <dt className="font-medium text-gray-900 dark:text-white">Alunos:</dt>
          <dd className="text-gray-700 dark:text-gray-300">{students}</dd>
        </div>
        <div className="flex items-start gap-2">
          <Building className="h-4 w-4 text-gray-500 mt-1" aria-hidden="true" />
          <div>
            <dt className="font-medium text-gray-900 dark:text-white">Infraestrutura:</dt>
            <dd className="text-sm text-gray-600 dark:text-gray-400 mt-1">{infrastructure}</dd>
          </div>
        </div>
        <div className="flex items-start gap-2">
          <GraduationCap className="h-4 w-4 text-gray-500 mt-1" aria-hidden="true" />
          <div>
            <dt className="font-medium text-gray-900 dark:text-white">Corpo Docente:</dt>
            <dd className="text-sm text-gray-600 dark:text-gray-400 mt-1">{staff}</dd>
          </div>
        </div>
      </dl>

      <footer className="pt-4 border-t border-gray-200 dark:border-gray-700">
        <blockquote className="text-sm italic text-gray-600 dark:text-gray-400 leading-relaxed">"{quote}"</blockquote>
      </footer>
    </article>
  )
}

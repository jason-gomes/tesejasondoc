import { cn } from "@/lib/utils"

interface TeacherCardProps {
  name: string
  school: string
  color: "blue" | "amber"
  approach: {
    vision: string
    strategy: string
  }
  dynamics: {
    keyword: string
    interaction: string
  }
  activeView: "approach" | "dynamics"
}

export function TeacherCard({ name, school, color, approach, dynamics, activeView }: TeacherCardProps) {
  return (
    <article
      className={cn(
        "transition-all duration-300 rounded-lg border p-6",
        color === "blue"
          ? "border-blue-200 bg-blue-50 dark:border-blue-800 dark:bg-blue-950/30"
          : "border-amber-200 bg-amber-50 dark:border-amber-800 dark:bg-amber-950/30",
      )}
    >
      <header className="mb-4">
        <h3
          className={cn(
            "text-2xl font-bold mb-2",
            color === "blue" ? "text-blue-800 dark:text-blue-300" : "text-amber-800 dark:text-amber-300",
          )}
        >
          {name}
        </h3>
        <p className="text-gray-600 dark:text-gray-400">({school})</p>
      </header>

      {activeView === "approach" && (
        <div className="space-y-4 animate-fade-in">
          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Visão do Aluno:</h4>
            <blockquote
              className={cn(
                "border-l-4 pl-4 italic text-gray-600 dark:text-gray-400",
                color === "blue" ? "border-blue-200 dark:border-blue-700" : "border-amber-200 dark:border-amber-700",
              )}
            >
              "{approach.vision}"
            </blockquote>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Estratégia:</h4>
            <p className="text-gray-700 dark:text-gray-300">{approach.strategy}</p>
          </div>
        </div>
      )}

      {activeView === "dynamics" && (
        <div className="space-y-4 animate-fade-in">
          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Palavra-Chave:</h4>
            <blockquote
              className={cn(
                "border-l-4 pl-4 italic text-gray-600 dark:text-gray-400",
                color === "blue" ? "border-blue-200 dark:border-blue-700" : "border-amber-200 dark:border-amber-700",
              )}
            >
              {dynamics.keyword}
            </blockquote>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Interação:</h4>
            <p className="text-gray-700 dark:text-gray-300">{dynamics.interaction}</p>
          </div>
        </div>
      )}
    </article>
  )
}

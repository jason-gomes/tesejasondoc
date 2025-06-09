interface SectionHeaderProps {
  title: string
  description?: string
  id?: string
  className?: string
}

export function SectionHeader({ title, description, id, className = "" }: SectionHeaderProps) {
  return (
    <div className={`text-center mb-16 ${className}`}>
      <h2 id={id} className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
        {title}
      </h2>
      {description && (
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">{description}</p>
      )}
    </div>
  )
}

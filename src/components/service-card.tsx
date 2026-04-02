import {
  Brain, PenTool, Code2, Plug, Headphones, GraduationCap,
  Phone, Mic, FileText, Box, Check,
} from "lucide-react";

const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  Brain, PenTool, Code2, Plug, Headphones, GraduationCap,
  Phone, Mic, FileText, Box,
};

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
  features: readonly string[];
}

export function ServiceCard({
  icon,
  title,
  description,
  features,
}: ServiceCardProps) {
  const IconComponent = ICON_MAP[icon] ?? Box;

  return (
    <div className="bg-white rounded-xl p-6 border border-border hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
      <div className="w-12 h-12 rounded-lg bg-brand-accent-bg flex items-center justify-center mb-4">
        <IconComponent className="w-6 h-6 text-brand-primary" />
      </div>

      <h3 className="text-lg font-semibold text-brand-dark mb-2">{title}</h3>
      <p className="text-sm text-brand-gray-600 mb-4">{description}</p>

      <ul className="space-y-2">
        {features.map((feature) => (
          <li key={feature} className="flex items-center gap-2 text-sm text-brand-gray-600">
            <Check className="w-4 h-4 text-brand-primary flex-shrink-0" />
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
}

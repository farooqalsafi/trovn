import { SectionLabel } from "./section-label";
import { FadeUp } from "./animations/fade-up";

interface SectionHeadingProps {
  label: string;
  title: string;
  subtitle?: string;
  highlightWords?: string[];
  className?: string;
}

export function SectionHeading({
  label,
  title,
  subtitle,
  highlightWords = [],
  className,
}: SectionHeadingProps) {
  const words = title.split(" ");

  return (
    <div className={`text-center mb-16 ${className ?? ""}`}>
      <SectionLabel text={label} />
      <FadeUp delay={0.1}>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-dark mb-4">
          {words.map((word, i) => (
            <span key={i}>
              <span
                className={
                  highlightWords.includes(word)
                    ? "text-brand-primary"
                    : undefined
                }
              >
                {word}
              </span>
              {i < words.length - 1 ? " " : ""}
            </span>
          ))}
        </h2>
      </FadeUp>
      {subtitle && (
        <FadeUp delay={0.2}>
          <p className="text-brand-gray-600 text-lg max-w-2xl mx-auto">
            {subtitle}
          </p>
        </FadeUp>
      )}
    </div>
  );
}

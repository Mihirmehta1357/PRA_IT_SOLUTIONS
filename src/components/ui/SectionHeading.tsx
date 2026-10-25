import React from 'react';
import './SectionHeading.css';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  emphasisWord?: string;
  subtitle?: string;
  align?: 'left' | 'center';
  isDark?: boolean;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  title,
  emphasisWord,
  subtitle,
  align = 'left',
  isDark = false,
}) => {
  // If emphasisWord is present, we can highlight it in copper
  let renderedTitle: React.ReactNode = title;
  if (emphasisWord && title.includes(emphasisWord)) {
    const parts = title.split(emphasisWord);
    renderedTitle = (
      <>
        {parts[0]}
        <span className="heading-copper-emphasis">{emphasisWord}</span>
        {parts[1]}
      </>
    );
  }

  return (
    <div className={`section-heading-wrap align-${align} ${isDark ? 'heading-dark' : ''}`}>
      {eyebrow && (
        <div className={`eyebrow ${isDark ? 'eyebrow-dark' : ''}`}>
          {eyebrow}
        </div>
      )}
      <h2 className="section-heading-title">{renderedTitle}</h2>
      {subtitle && <p className="section-heading-sub">{subtitle}</p>}
    </div>
  );
};

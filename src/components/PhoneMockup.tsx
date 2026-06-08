import type { ReactNode } from "react";

type PhoneMockupProps = {
  children: ReactNode;
  className?: string;
};

export default function PhoneMockup({ children, className = "" }: PhoneMockupProps) {
  return (
    <div className={`phone-mockup ${className}`.trim()}>
      <div className="phone-mockup__frame">
        <div className="phone-mockup__notch" aria-hidden="true" />
        <div className="phone-mockup__screen">{children}</div>
        <div className="phone-mockup__indicator" aria-hidden="true" />
      </div>
    </div>
  );
}

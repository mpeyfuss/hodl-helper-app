import { cn } from "@/lib/utils";
import { ReactNode } from "react";

export const Title = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return <h1 className={cn("text-5xl font-title", className)}>{children}</h1>;
};

export const Heading = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return <h2 className={cn("text-3xl font-title", className)}>{children}</h2>;
};

export const Subheading = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return <h3 className={cn("text-xl font-title", className)}>{children}</h3>;
};

export const Paragraph = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return <p className={cn("text-base font-body", className)}>{children}</p>;
};

import * as React from "react";

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={`w-full px-4 py-3 bg-white dark:bg-black text-black dark:text-white border-4 border-black dark:border-white focus:outline-none focus:border-[#CCFF00] transition-colors min-h-[150px] resize-y ${className || ''}`}
        ref={ref}
        {...props}
      />
    );
  }
);
Textarea.displayName = "Textarea";

export { Textarea };

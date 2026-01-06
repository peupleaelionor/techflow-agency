import * as React from "react";
import { Controller } from "react-hook-form";

const Form = ({ children, ...props }: React.ComponentProps<"form">) => {
  return <form {...props}>{children}</form>;
};

const FormField = ({ name, control, render }: any) => {
  return (
    <Controller
      name={name}
      control={control}
      render={render}
    />
  );
};

const FormItem = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    return <div ref={ref} className={`space-y-2 ${className || ''}`} {...props} />;
  }
);
FormItem.displayName = "FormItem";

const FormLabel = React.forwardRef<HTMLLabelElement, React.LabelHTMLAttributes<HTMLLabelElement>>(
  ({ className, ...props }, ref) => {
    return (
      <label
        ref={ref}
        className={`text-sm font-bold text-black dark:text-white ${className || ''}`}
        {...props}
      />
    );
  }
);
FormLabel.displayName = "FormLabel";

const FormControl = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ ...props }, ref) => {
    return <div ref={ref} {...props} />;
  }
);
FormControl.displayName = "FormControl";

const FormMessage = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, children, ...props }, ref) => {
    return (
      <p
        ref={ref}
        className={`text-sm font-medium text-red-600 dark:text-red-400 ${className || ''}`}
        {...props}
      >
        {children}
      </p>
    );
  }
);
FormMessage.displayName = "FormMessage";

export { Form, FormField, FormItem, FormLabel, FormControl, FormMessage };

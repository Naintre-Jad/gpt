import React from "react";
const variantClasses = {
  h1: "font-normal text-[18px]",
  h2: "text-[16px]",
  h3: "font-semibold text-[12px]",
};
const Text = ({ children, className, variant, as, ...restProps }) => {
  const Component = as || "span";
  return (
    <Component
      className={`${className} ${variantClasses[variant]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };

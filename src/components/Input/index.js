import { ErrorMessage } from "../../components/ErrorMessage";
import React from "react";
import PropTypes from "prop-types";

const variants = {
  srcOutlineBluegray300:
    "bg-white_A700 border border-bluegray_300 border-solid",
  OutlineBluegray100: "bg-white_A700 border border-bluegray_100 border-solid",
};
const shapes = {
  srcRoundedBorder6: "rounded-radius6",
  RoundedBorder8: "rounded-radius8",
};
const sizes = {
  smSrc: "pb-[9px] pr-[9px] pt-[16px]",
  sm: "pr-[5px] py-[5px]",
  md: "pb-[13px] pt-[19px] px-[12px]",
};

const Input = React.forwardRef(
  (
    {
      wrapClassName = "",
      className = "",
      name,
      placeholder,
      type = "text",
      children,
      errors = [],
      label = "",
      prefix,
      suffix,
      shape,
      variant,
      size,
      ...restProps
    },
    ref
  ) => {
    return (
      <>
        <div
          className={`${wrapClassName} ${shapes[shape] || ""} ${
            variants[variant] || ""
          } ${sizes[size] || ""}`}
        >
          {!!label && label}
          {!!prefix && prefix}
          <input
            ref={ref}
            className={`${className} bg-transparent border-0`}
            type={type}
            name={name}
            placeholder={placeholder}
            {...restProps}
          />
          {!!suffix && suffix}
        </div>
        {!!errors && <ErrorMessage errors={errors} />}
      </>
    );
  }
);

Input.propTypes = {
  wrapClassName: PropTypes.string,
  className: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  shape: PropTypes.oneOf(["srcRoundedBorder6", "RoundedBorder8"]),
  variant: PropTypes.oneOf(["srcOutlineBluegray300", "OutlineBluegray100"]),
  size: PropTypes.oneOf(["smSrc", "sm", "md"]),
};
Input.defaultProps = {
  wrapClassName: "",
  className: "",
  name: "",
  placeholder: "",
  type: "text",
  shape: "",
  variant: "",
  size: "sm",
};

export { Input };

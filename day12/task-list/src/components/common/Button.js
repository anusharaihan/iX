import React from "react";
import Spinner from "./Spinner";

export default function Button({
  children,
  className,
  onClick,
  type,
  variant = "primary",
  loading = false,
  disabled = false,
}) {
  return (
    <button
      className={"btn btn-" + variant + " " + className}
      onClick={onClick}
      type={type}
      disabled={disabled || loading}
      style={{
        position: "relative"
      }}
    >
      {children}
      {
        loading ?
        <div style= {{
          position: 'absolute',
          top:'2px',
          right: '2px'
        }}>
          <Spinner variant='white' />
          </div>
        :
        <></>
      }
    </button>
  );
}

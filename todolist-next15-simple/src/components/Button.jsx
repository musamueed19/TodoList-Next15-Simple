'use client'

const Button = ({ label, variant = "normal" }) => {
    let className = "";


    if (variant === "normal") {
        className =
          "w-[7rem] border border-blue-200 hover:border-blue-500 bg-blue-100 hover:bg-blue-200 text-[#353535] hover:text-[#252525] font-semibold text-lg";
}

  return (
    
      <button className={`rounded-md py-1 ${className}`}>
          {label}
      </button>
  )
}

export default Button
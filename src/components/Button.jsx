import { twMerge } from "tailwind-merge";

function Button({
  children,
  onClick,
  type = "primary",
  color = "#7c3aed",
  className = "",
  id = "",
}) {
  if (type === "primary")
    return (
      <button
        className={twMerge(
          `flex flex-row max-w-fit items-center text-xl gap-2 px-4 py-2 rounded-md outline-none hover:shadow-[0px_0px_0px_3px_#020617,0px_0px_0px_6px_${color}] focus-visible:shadow-[0px_0px_0px_3px_#020617,0px_0px_0px_6px_${color}] transition-shadow duration-300 ease bg-[${color}]`,
          className
        )}
        onClick={onClick}
      >
        {children}
      </button>
    );

  if (type === "delete")
    return (
      <button
        id={id}
        className="flex flex-row items-center gap-2 px-4 py-2 rounded-md bg-red-500 bg-opacity-20 border-2 border-red-500 hover:shadow-[0px_0px_0px_3px_#020617,0px_0px_0px_6px_#ef4444] focus-visible:shadow-[0px_0px_0px_3px_#020617,0px_0px_0px_6px_#ef4444] focus-visible:bg-opacity-100 hover:bg-opacity-100 text-red-500 fill-red-500 hover:fill-white focus-visible:fill-white focus-visible:text-white hover:text-white transition-all duration-300 ease text-xl outline-none"
        onClick={onClick}
      >
        {children && <span>{children}</span>}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          aria-hidden="true"
          width="20"
        >
          <path
            fillRule="evenodd"
            d="M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z"
            clipRule="evenodd"
          ></path>
        </svg>
      </button>
    );
}

export default Button;

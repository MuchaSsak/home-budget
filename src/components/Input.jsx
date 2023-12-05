function Input({
  children,
  state,
  setState,
  type = "text",
  step,
  min,
  id,
  required = true,
}) {
  return (
    <input
      value={state || ""}
      onChange={(e) => setState(e.target.value) || null}
      className="px-4 py-2 rounded-md bg-slate-950 outline-0 shadow-[0px_0px_0px_1px_#fff] focus-visible:shadow-[0px_0px_0px_2px_#7c3aed] transition-shadow"
      placeholder={children}
      type={type}
      step={step || null}
      min={min || null}
      id={id || null}
      required={required}
    />
  );
}

export default Input;

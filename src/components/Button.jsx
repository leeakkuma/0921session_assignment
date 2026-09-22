export default function Button({
  text,
  type = "button",
  onClick,
  disabled = false,
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className="
        w-[380px]
        px-6 py-3 rounded-xl
        body-lg text-primary-100
        bg-primary-500
        hover:bg-primary-600
        active:bg-primary-700
        disabled:cursor-not-allowed
        disabled:bg-neutral-200
        disabled:text-primary-100
      "
    >
      {text}
    </button>
  );
}
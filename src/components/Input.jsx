export default function Input({ label, id, error, className = "", ...props }) {
  return (
    <div className="flex w-full flex-col gap-1.5">
      <label htmlFor={id} className="body-lg text-neutral-200">
        {label}
      </label>

      <input
        id={id}
        placeholder="내용을 입력하세요"
        aria-invalid={Boolean(error)}
        className={`
          w-[380px] rounded-xl px-6 py-3
          body-lg text-neutral-200
          border-[2px] border-transparent bg-primary-100
          transition-colors
          focus:border-primary-600 focus:bg-primary-100
          focus:text-primary-900 focus:outline-none
          [&:not(:focus):not(:placeholder-shown)]:bg-primary-100
          [&:not(:focus):not(:placeholder-shown)]:text-primary-900
          aria-[invalid=true]:border-red-500
          disabled:cursor-not-allowed disabled:bg-neutral-200
          disabled:text-primary-100
          ${className}
        `}
        {...props}
      />

      {error && <p className="text-xs text-red-500">{error}</p>}
    </div>
  );
}
export default function SectionHeading({ heading, subheading, inverted }) {
  return (
    <div className="grid md:grid-cols-2 text-center md:text-left items-end gap-4 mb-8 relative">
      <div className="flex justify-center md:justify-end">
        <h2
          className={
            !inverted
              ? "font-semibold text-5xl border-b-[6px] text-neutral-700 border-sky-600 md:text-right w-fit"
              : "font-semibold text-5xl border-b-[6px] text-white border-sky-300 md:text-right w-fit"
          }
        >
          {heading}
        </h2>
      </div>
      <div className="flex justify-center md:justify-start">
        <p
          className={
            inverted
              ? "text-gray-200 border-sky-300 font-semibold text-3xl border-b-4 w-fit"
              : "text-gray-400 border-sky-300 font-semibold text-3xl border-b-4 w-fit"
          }
        >
          {subheading}
        </p>
      </div>
    </div>
  );
}

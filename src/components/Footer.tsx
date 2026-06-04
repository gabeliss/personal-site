export default function Footer() {
  return (
    <footer className="border-t hairline bg-[--color-primary] px-8 py-6">
      <div className="section-shell flex flex-col gap-2 text-sm font-medium text-[color-mix(in_oklch,var(--color-bg)_58%,var(--color-primary))] md:flex-row md:items-center md:justify-between">
        <p>Built with React, TypeScript, and Tailwind CSS.</p>
        <p>Gabriel Liss</p>
      </div>
    </footer>
  );
}

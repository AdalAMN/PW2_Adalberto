export default function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-3xl font-bold text-white mb-6 tracking-tight fade-in">
      {children}
    </h2>
  );
}
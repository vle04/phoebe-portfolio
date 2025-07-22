export default function SkillTab({ label }: { label: string }) {
    return (
        <div className="bg-neutral-300 min-w-[80px] px-4 rounded-full text-center">
            {label}
        </div>
    );
}
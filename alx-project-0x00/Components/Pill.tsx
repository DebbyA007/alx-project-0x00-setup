interface PillProps {
text: string;
color?: string;
}

export default function Pill({ text, color = "bg-blue-500" }: PillProps) {
return (
<span className={`text-white px-3 py-1 rounded-full text-sm font-medium ${color}`}>
{text}
</span>
);
}

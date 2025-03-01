type MyExperienceProps = {
    title: string
    date: string
    company: string
    points: string[]
    current?: boolean
}

const MyExperience = ({
    title,
    date,
    company,
    points,
    current,
}: MyExperienceProps) => {
    const activeColor = current ? 'bg-[green]' : 'bg-[#ffffff]'

    return (
        <div className="relative pl-8 border-l border-gray-800">
            <div
                className={`absolute w-4 h-4 rounded-full -left-2 top-0 ${activeColor}`}
            ></div>
            <div className="mb-1 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <h3 className="text-xl font-bold">{title}</h3>
                <span className="text-xs text-gray-400">{date}</span>
            </div>
            <h4 className="text-[#ffffff] text-gray-300 mb-4 italic">
                {company}{' '}
            </h4>
            <ul className="list-disc list-inside text-gray-300 space-y-2 text-sm">
                {points.map((point) => (
                    <li key={point}>{point}</li>
                ))}
            </ul>
        </div>
    )
}

export default MyExperience

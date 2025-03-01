import { Github, Linkedin, Mail } from 'lucide-react'

const Header = () => {
    return (
        <div className="flex flex-col sm:flex-row justify-between items-center w-full border p-5 rounded border-zinc-800 gap-y-2 relative">
            <div className="flex flex-col justify-center sm:items-start w-full">
                <div className="flex flex-col sm:flex-row justify-center items-center gap-2">
                    <div>
                        <span className="relative flex h-16 w-16 shrink-0 overflow-hidden rounded-full">
                            <img
                                className="aspect-square h-full w-full"
                                alt="profile picture"
                                src="https://media.licdn.com/dms/image/v2/D5603AQHq-W8nde6_QA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1682706030196?e=1746057600&v=beta&t=DmHoA80PxPgEgw5dHEe2u9mzjagOzzCs6RyxhaGR-7A"
                            />
                        </span>
                    </div>
                    <div className="text-center sm:text-left">
                        <h1 className="font-semibold leading-7">
                            Kishan Raghav Suvarna
                        </h1>
                        <p className="text-sm font-light p-2 sm:p-0">
                            Husband | Software Engineer
                        </p>
                    </div>
                </div>
            </div>
            <div className="flex gap-2">
                <a
                    href="https://github.com/kishansuvarna09"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-[#ffffff] transition-colors"
                >
                    <Github size={24} />
                </a>
                <a
                    href="https://www.linkedin.com/in/kishansuvarna09/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-[#ffffff] transition-colors"
                >
                    <Linkedin size={24} />
                </a>
                <a
                    href="mailto:kishansuvarna09@gmail.com"
                    className="text-gray-400 hover:text-[#ffffff] transition-colors"
                >
                    <Mail size={24} />
                </a>
            </div>
        </div>
    )
}

export default Header

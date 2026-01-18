import { FaGithub } from "react-icons/fa";
import { FaLink } from "react-icons/fa6";
const Cards = ({ image, title, subtitle, githubUrl, liveUrl }) => {
  return (
    <div className="m-4 block max-x-sm overflow-visible rounded-lg bg-gray-400/20 backdrop-blur-lg">
      <div className="relative">
        <img className="h-44 w-full" width={100} src={image} alt={title} />
        <div className="flex flex-col justify-between p-4 text-white">
          <h2 className="mb-2 text-2xl font-bold">{title}</h2>
          <div className="relative group overflow-visible">
            <p className="mb-2 text-sm font-medium cursor-pointer">
              {subtitle.length > 50 ? `${subtitle.slice(0, 50)}...` : subtitle}
            </p>

            {/* Readable Glass Tooltip */}
            <div
              className="absolute left-1/2 top-full z-[999]
               mt-3 -translate-x-1/2 scale-0
               w-[350px] max-w-[92vw]
               rounded-2xl
               bg-black/80
               backdrop-blur-xl
               border border-white
               px-5 py-4
               text-sm leading-relaxed text-gray-100
               shadow-[0_10px_40px_rgba(0,0,0,0.6)]
               transition-all duration-200
               group-hover:scale-100"
            >
              {subtitle}
            </div>
          </div>
        </div>
        <div className="flex justify-evenly gap-4 border-t-2  p-2">
          <button
            className={`border px-4 py-2 rounded-lg flex items-center gap-2 ${!githubUrl ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-100/20 transition"
              }`}
            disabled={!githubUrl}
          >
            <FaGithub />
            {githubUrl ? (
              <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                Github
              </a>
            ) : (
              <span>No Link</span>
            )}
          </button>

          <button
            className={`border px-4 py-2 rounded-lg flex items-center gap-2 ${!liveUrl ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-100/20 transition"
              }`}
            disabled={!liveUrl}
          >
            <FaLink />
            {liveUrl ? (
              <a href={liveUrl} target="_blank" rel="noopener noreferrer">
                Live
              </a>
            ) : (
              <span>No Live</span>
            )}
          </button>
        </div>
      </div>
    </div>
  )
}

export default Cards
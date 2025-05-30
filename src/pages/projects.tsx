import ChessImage from "../assets/chess.png";
import LiteRateImage from "../assets/literate.png";

function projects() {

    const projects_info: {title : string, technologies: string, picture: string, github: string}[] = [
        {
            title : "Chess",
            technologies : "Java + JavaFX",
            picture : ChessImage,
            github : "https://github.com/alfkristian02/TDT4100-Chess"
        },
        {
            title : "LiteRate",
            technologies : "React + Firebase",
            picture : LiteRateImage,
            github : "https://github.com/alfkristian02/TDT4140-Programvareutvikling"

        }
    ]

    const projects_cards = projects_info.map(info => (
        <div className="w-full sm:w-1/3 py-2 ">
            <div className="bg-cards_background rounded-md m-3 p-2">
                <h3 className="text-center font-normal text-2xl">{info.title}</h3>
                <p className="text-center mt-2">Teknologier: {info.technologies}</p>
                <img className="m-auto h-32 px-2 my-4" src={info.picture}/>
                <p className="text-center mt-2 ">GitHub: <a className="font-medium text-blue-600 dark:text-blue-500 hover:underline" href={info.github}>Link</a></p>
            </div>
        </div>
    ));

    return (
        <>
        <div className="w-full">  {/* container */}
            <h2 className="text-3xl sm:text-4xl mt-14 text-center">Prosjekter:</h2>

            <div className="w-full sm:w-[60vw] mx-auto mt-4 flex flex-wrap"> {/* content */}
                {projects_cards}
            </div>
        </div>
        </>
    )
}

export default projects
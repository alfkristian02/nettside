// import { useState } from 'react'
function tictactoe() {

    // const [boardState, setBoardState] = useState(0)

    // Shouldnt need turn as the change triggers at once
    // const [turn, setturn] = useState(0)

    const board = [
            <div className="w-1/3 justify-center text-center border-b border-r border-black"><button className="w-full h-full">hei</button></div>,
            <div className="w-1/3 justify-center text-center border-l border-b border-r border-black"><button className="w-full h-full">hei</button></div>,
            <div className="w-1/3 justify-center text-center border-l border-b border-black"><button className="w-full h-full">hei</button></div>,
            <div className="w-1/3 justify-center text-center border-b border-t border-r border-black"><button className="w-full h-full">hei</button></div>,
            <div className="w-1/3 justify-center text-center border border-black"><button className="w-full h-full">hei</button></div>,
            <div className="w-1/3 justify-center text-center border-b border-t border-l border-black"><button className="w-full h-full">hei</button></div>,
            <div className="w-1/3 justify-center text-center border-t border-r border-black"><button className="w-full h-full">hei</button></div>,
            <div className="w-1/3 justify-center text-center border-l border-t border-r border-black"><button className="w-full h-full">hei</button></div>,
            <div className="w-1/3 justify-center text-center border-l border-t border-black"><button className="w-full h-full">hei</button></div>,
    ]

    return (
        <>
            <div className="flex flex-wrap w-[20vw] h-[20vw] mx-auto mt-14"> {/* Board */}
                {board}
            </div> {/* Board */}

        </>
    )
}

export default tictactoe
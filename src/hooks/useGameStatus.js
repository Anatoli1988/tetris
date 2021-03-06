import {useCallback, useEffect, useState} from "react";


export const useGameStatus = rowsCleared => {
    const [score, setScore] = useState(0)
    const [rows, setRows] = useState(0)
    const [level, setLevel] = useState(0)


    const linePoints = [40, 100, 300, 1200]

    const calcScore = useCallback(() => {
        if (rowsCleared > 0) {
            setScore(prew => prew + linePoints[rowsCleared - 1] * (level + 1))
            setRows(prew => prew + rowsCleared)
        }
    }, [level, linePoints, rowsCleared])

    useEffect(() => {
        calcScore()
    }, [calcScore, rowsCleared, score])
return [score, setScore, rows, setRows, level, setLevel]
}
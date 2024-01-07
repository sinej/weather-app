'use client'

import {useEffect} from "react";

type Props = {
    error: Error;
    reset: () => void;
}
export default function Error ({ error, reset }: Props) {

    useEffect(() => {
        console.error("----", error.message);
    }, []);

    return (
        <>
            <h2>에러 페이지 입니다:(</h2>
            <button onClick={() => reset()}>다시 돌아가기</button>
        </>
    )
}
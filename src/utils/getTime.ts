export const getTime = async (timeZone: string): Promise<Response> => {
    const res = await fetch(`https://timeapi.io/api/Time/current/zone?timeZone=${timeZone}`, {
        next: {tags: ['time']}
    })

    if(!res.ok) throw new Error('시간 정보를 가져올 수 없습니다.');

    return res.json();
}
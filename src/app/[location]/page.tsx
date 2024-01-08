import HomeButton from "@/components/homeButton";
import {getForecast} from "@/utils/getForecast";


type Props = {
    params: {
        location: String
    },
    searchParams: {
        name: string;
    }
}


export function generateMetadata({params, searchParams}: Props) {
    return {
        title: `날씨 앱 - ${searchParams.name}`,
        description: `${searchParams.name} 날씨를 알려드립니다.`
    }
}


export default async function Detail ({ params, searchParams }: Props) {
    const res = await getForecast(params?.location);

    console.log("res", res);
    return (
        <>
            <h1>{searchParams.name}의 3일 예보</h1>
            <ul>
                {res?.forecast?.forecastday.map((day) => {

                    console.log(day)
                        return  <li key={day.date}>{day.date} / {day.day.avgtemp_c}</li>
                }
                )}
            </ul>
            <HomeButton/>
        </>
    )
}
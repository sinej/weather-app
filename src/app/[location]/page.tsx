import HomeButton from "@/components/homeButton";
import {getForecast} from "@/utils/getForecast";
import {
    createFlightRouterStateFromLoaderTree
} from "next/dist/server/app-render/create-flight-router-state-from-loader-tree";


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
    const name =  searchParams.name;
    console.log(params.location)
    const res = await getForecast(params.location);

    return (
        <>
            <h1>{searchParams.name}의 3일 예보</h1>
            <ul>
                {res.forecast.forecastday.map((day) => (
                    <li key={day.date}>{day.date} / {day.day.avgtemp_c}</li>
                ))}
            </ul>
            <HomeButton/>
        </>
    )
}
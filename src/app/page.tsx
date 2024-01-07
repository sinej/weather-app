import Link from "next/link";
import style from './style.module.css';
import {getCurrentWeather} from "@/utils/getCurrentWeather";
import {getTime} from "@/utils/getTime";
import {
    createFlightRouterStateFromLoaderTree
} from "next/dist/server/app-render/create-flight-router-state-from-loader-tree";
import RevalidateButton from "@/components/revalidateButton";

export default async function Home() {
    const res = await getCurrentWeather('seoul');
    const time = await getTime(res.location.tz_id);
    console.log(time)

  return (
      <>

    <h1>main</h1>
      <h3>{time.dateTime}</h3>
        <ul className={style.list}>
          <li>
              <Link href={"/seoul"}>서울</Link>
              <span>{res.current.condition.text}</span>
          </li>
            <li>
                <Link href={"/newyork"}>뉴욕</Link>
                <span>{res.current.condition.text}</span>
            </li>
            <li>
                <Link href={"/londor"}>런던</Link>
                <span>{res.current.condition.text}</span>
            </li>
        </ul>

          <RevalidateButton tag={'time'}/>
      </>

  )
}

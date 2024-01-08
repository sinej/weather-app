import Link from "next/link";
import style from './style.module.css';
import {getCurrentWeather} from "@/utils/getCurrentWeather";
import {getTime} from "@/utils/getTime";
import RevalidateButton from "@/components/revalidateButton";

export default async function Home() {
    const res = await getCurrentWeather('seoul');
    const time = await getTime(res.location.tz_id);

  return (
      <>

    <h1>main</h1>
      <h3>{time.dateTime}</h3>
        <ul className={style.list}>
          <li>
              <Link href={"/seoul?name=서울"}>서울</Link>
          </li>
            <li>
                <Link href={"/NYC?name=뉴욕"}>뉴욕</Link>
            </li>
            <li>
                <Link href={"/london?name=런던"}>런던</Link>
            </li>
        </ul>

          <RevalidateButton tag={'time'}/>
      </>

  )
}

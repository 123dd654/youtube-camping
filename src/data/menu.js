import { FaGithubAlt } from "react-icons/fa";
import { FiYoutube } from "react-icons/fi";
import { HiOutlineMailOpen } from "react-icons/hi";
import { FaInstagram } from "react-icons/fa";
import { TiChartLineOutline } from "react-icons/ti";
import { TiPinOutline } from "react-icons/ti";
import { TiTags } from "react-icons/ti";
import { TiBookmark } from "react-icons/ti";
import { LuDog } from "react-icons/lu";


export const headerMenus = [
    {
        title: "순위영상",
        icon: <TiChartLineOutline />,
        src: "/search/캠핑영상"
    }, {
        title: "애견동반 캠핑장",
        icon: <LuDog />,
        src: "/search/애견동반캠핑장"
    }, {
        title: "추천캠핑장",
        icon: <TiPinOutline />,
        src: "/search/추천캠핑장"
    }, {
        title: "캠핑용품",
        icon: <TiTags />,
        src: "/search/캠핑용품"
    }, {
        title: "경기도캠핑장",
        icon: <TiBookmark />,
        src: "/search/경기도캠핑장"
    }, {
        title: "강원도캠핑장",
        icon: <TiBookmark />,
        src: "/search/강원도캠핑장"
    }, {
        title: "경남캠핑장",
        icon: <TiBookmark />,
        src: "/search/경남캠핑장"
    }, {
        title: "경북캠핑장",
        icon: <TiBookmark />,
        src: "/search/경북캠핑장"
    }
]

export const searchKeyword = [
    {
        title: "camping",
        src: "/search/camping"
    }, {
        title: "youtube",
        src: "/search/youtube"
    }, {
        title: "snowpeak",
        src: "/search/snowpeak"
    }, {
        title: "nordisk",
        src: "/search/nordisk"
    }, {
        title: "uniflame",
        src: "/search/uniflame"
    }, {
        title: "helinox",
        src: "/search/helinox"
    }, {
        title: "hilleberg",
        src: "/search/hilleberg"
    }, {
        title: "helsport",
        src: "/search/helsport"
    }, {
        title: "trangia",
        src: "/search/trangia"
    },
]

export const snsLink = [
    {
        title: "github",
        url: "https://github.com/123dd654",
        icon: <FaGithubAlt />
    }, {
        title: "youtube",
        url: "https://www.youtube.com/",
        icon: <FiYoutube />
    }, {
        title: "email",
        url: "https://mail.google.com/",
        icon: <HiOutlineMailOpen />
    }, {
        title: "instgram",
        url: "",
        icon: <FaInstagram />
    },
]

/* leny/next-homepage
 *
 * /src/pages/index.js - Entry point page container
 *
 * coded by leny@flatLand!
 * started at 20/02/2021
 */

import {Helmet} from "react-helmet";
import ShareCard from "../components/head/share-card";

import data from "../../data/data.json";

export const getStaticProps = () => ({props: data});

export default ({title, cards: {twitter, facebook}}) => (
    <div>
        <Helmet htmlAttributes={{lang: "en"}}>
            <title>{"leny.me - Pierre-Antoine Delnatte"}</title>
            <meta
                httpEquiv={"X-Clacks-Overhead"}
                content={"GNU Terry Pratchett"}
            />
        </Helmet>
        <ShareCard type={"twitter"} {...twitter} />
        <ShareCard type={"facebook"} {...facebook} />
        <main>
            <h1>{title}</h1>
        </main>
    </div>
);

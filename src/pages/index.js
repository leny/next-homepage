/* leny/next-homepage
 *
 * /src/pages/index.js - Entry point page container
 *
 * coded by leny@flatLand!
 * started at 20/02/2021
 */

import {Helmet} from "react-helmet";

import data from "../../data/data.json";

export const getStaticProps = async () => ({props:data});

export default ({title}) => (
    <div>
        <Helmet htmlAttributes={{lang:"en"}}>
            <title>{"leny.me - Pierre-Antoine Delnatte"}</title>
            <meta httpEquiv={"X-Clacks-Overhead"} content={"GNU Terry Pratchett"} />
        </Helmet>
        <main>
            <h1>{title}</h1>
        </main>
    </div>
)

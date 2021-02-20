/* leny/next-homepage
 *
 * /src/pages/index.js - Entry point page container
 *
 * coded by leny@flatLand!
 * started at 20/02/2021
 */

import data from "../../data/data.json";

export const getStaticProps = async () => ({props:data});

export default ({title}) => <div>{title}</div>;

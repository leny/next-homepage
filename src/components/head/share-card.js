/* leny/next-homepage
 *
 * /src/components/head/share-card.js - ShareCard Component
 *
 * coded by leny@flatLand!
 * started at 20/02/2021
 */

import {Helmet} from "react-helmet";

export default ({type, ...props}) => (
    <Helmet>
        {Object.entries(props).map(([key, value]) => (
            <meta key={key} property={`${type}:${key}`} content={value} />
        ))}
    </Helmet>
);

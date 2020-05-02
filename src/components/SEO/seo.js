/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";

import Config from '../../config';

function SEO({ description, lang, meta, title }) {

  const metaDescription = description || Config.SITE_METADATA.description

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${Config.SITE_METADATA.title}`}
      meta={[
        {
          charSet:"utf-8",
        },
        {
          name: `viewport`,
          content: "width=device-width, initial-scale=1.0",
        },  
        {
          name: `description`,
          content: metaDescription,
        }        
      ].concat(meta)}
    />
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default SEO;

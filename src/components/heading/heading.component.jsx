import React, { Fragment } from "react";
import "./heading.styles.css";

/**
 * This functional component is used to display Heading
 *
 * @author Jay
 */
const HeadingTitle = () => {
  return (
    <Fragment>
      <h1 className="title">Build Dashboard</h1>
      <h5 className="title">Top 10 builds of the month</h5>
    </Fragment>
  );
};

export default HeadingTitle;

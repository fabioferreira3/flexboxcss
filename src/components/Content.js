import React from 'react';
import FlexExampleImage from "./FlexExampleImage"

export const Content = () => {

  return (
    <div>
      <h2>What is Flexbox?</h2>
      <p>The CSS Flexible Box Layout Model or simply Flexbox is part of the CSS3 specification that promises to organize elements on the page
        predictably when the layout needs to be viewed on different screen sizes and on different devices.</p>
      <p>Flexbox helps us organize these elements without the help of float and also helps us to solve "Box-Model"
        problems that normally happen when we add padding, margin and border beyond the width of the element.</p>
      <h2>How does Flexbox works?</h2>
      <p>The idea is simple: the children of an element with flexbox can be positioned in any direction and can
        have flexible dimensions to adapt. You can position the various elements regardless of their position in the
        HTML structure, which is very good. One of the problems with float is its dependence on elements in the HTML
        structure. These elements need to be in a specific order, otherwise the layout will not work.
        With Flexbox this order does not matter, it means that you can organize your HTML information to
        benefit SEO and Accessibility. The code for structuring these elements is simpler and easier to maintain.</p>
      <h2>Flexbox and its terminologies</h2>
      <p>
        When we use the property <strong>"display: flex"</strong> or <strong>"display: inline-flex"</strong> in an HTML element (tag) it gets the name of flex container and all tags or even loose text that are inside it we call flex items.
      </p>
      <p>
        The flex container has the power to work in two axes, the main axis which by default is on the X axis (horizontal) and cross axis (opposite axis) which by default is on the Y axis (vertical).
      </p>
      <p>
        We have Flexbox properties that affect the behavior of the main axis and other properties that affect the behavior of the cross axis.
        In addition we have the property flex-direction: column
        that changes the main axis to the Y axis while changing the cross axis for the X axis.
        This means that we can change the direction of the main axis and cross axis but we do not change their behavior.
      </p>
      <div className={'flexexample'}>
        <div className={'exampleslist'}>
          <h3>Main Axis</h3>
          <ul>
            <li>flex-direction</li>
            <li>justify-content</li>
          </ul>
          <h3>Cross Axis</h3>
          <ul>
            <li>flex-wrap</li>
            <li>align-items</li>
            <li>align-content</li>
          </ul>
          <h3>Main Axis and Cross Axis</h3>
          <ul>
            <li>flex-flow</li>
          </ul>
        </div>
        <FlexExampleImage/>
      </div>

    </div>
  )
}

import React, { useEffect, useState } from "react"
import classNames from 'classnames';

import Layout from "../components/layout"
import SEO from "../components/seo"

import '../components/index.css'
import Images from "../components/images"
import { setFlexDirection } from "../helpers/flexDirection"
import { setFlexWrap } from "../helpers/flexWrap"
import { setJustifyContent } from "../helpers/justifyContent"
import { setAlignItems } from "../helpers/alignItems"
import { setAlignContent } from "../helpers/alignContent"

const IndexPage = () => {

  const [classes, setClasses] = useState(['flexboxwrapper', 'flexdirectionrow', 'alignitemsflexstart'])

  const updateFlexDirection = (direction) => {
    const updatedClasses = setFlexDirection(direction, classes);
    setClasses(updatedClasses)
  }

  const updateFlexWrap = (wrap) => {
    const updatedClasses = setFlexWrap(wrap, classes);
    setClasses(updatedClasses)
  }

  const updateJustifyContent = (justifyContent) => {
    const updatedClasses = setJustifyContent(justifyContent, classes);
    setClasses(updatedClasses)
  }

  const updateAlignItems = (alignItems) => {
    const updatedClasses = setAlignItems(alignItems, classes);
    setClasses(updatedClasses)
  }

  const updateAlignContent = (alignContent) => {
    const updatedClasses = setAlignContent(alignContent, classes);
    setClasses(updatedClasses)
  }

  useEffect(() => {
    console.log(classes)
  }, [classes]);

  return (
  <Layout>
    <SEO title="Home" />
    <div className={'mainStuffWrapper'}>
      <div className={classNames(classes)}>
        <Images/>
      </div>
      <div className="controlsWrapper">
        <div className="control">
          <h2>Flex Direction</h2>
          <button onClick={() => updateFlexDirection('row')}>row</button>
          <button onClick={() => updateFlexDirection('column')}>column</button>
          <button onClick={() => updateFlexDirection('row-reverse')}>row-reverse</button>
          <button onClick={() => updateFlexDirection('column-reverse')}>column-reverse</button>
        </div>
        <div className="control">
          <h2>Flex Wrap</h2>
          <button onClick={() => updateFlexWrap('nowrap')}>nowrap</button>
          <button onClick={() => updateFlexWrap('wrap')}>wrap</button>
          <button onClick={() => updateFlexWrap('wrap-reverse')}>wrap-reverse</button>
        </div>
        <div className="control">
          <h2>Justify Content</h2>
          <button onClick={() => updateJustifyContent('flex-start')}>flex-start</button>
          <button onClick={() => updateJustifyContent('flex-end')}>flex-end</button>
          <button onClick={() => updateJustifyContent('center')}>center</button>
          <button onClick={() => updateJustifyContent('space-between')}>space-between</button>
          <button onClick={() => updateJustifyContent('space-around')}>space-around</button>
          <button onClick={() => updateJustifyContent('space-evenly')}>space-evenly</button>
        </div>
        <div className="control">
          <h2>Align Items</h2>
          <button onClick={() => updateAlignItems('flex-start')}>flex-start</button>
          <button onClick={() => updateAlignItems('flex-end')}>flex-end</button>
          <button onClick={() => updateAlignItems('center')}>center</button>
          <button onClick={() => updateAlignItems('stretch')}>stretch</button>
          <button onClick={() => updateAlignItems('baseline')}>baseline</button>
        </div>
        <div className="control">
          <h2>Align Content</h2>
          <button onClick={() => updateAlignContent('flex-start')}>flex-start</button>
          <button onClick={() => updateAlignContent('flex-end')}>flex-end</button>
          <button onClick={() => updateAlignContent('center')}>center</button>
          <button onClick={() => updateAlignContent('stretch')}>stretch</button>
          <button onClick={() => updateAlignContent('space-between')}>space-between</button>
          <button onClick={() => updateAlignContent('space-around')}>space-around</button>
        </div>
      </div>
    </div>
  </Layout>
  )

}

export default IndexPage

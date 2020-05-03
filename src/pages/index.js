import React, { useState } from "react"
import classNames from 'classnames';

import Layout from "../components/layout"
import SEO from "../components/seo"

import '../components/index.css'
import Images from "../components/images"
import { classesDefs } from "../helpers/classesNames"
import { setNewClasses } from "../helpers/setNewClasses"
import { FlexSetting } from "../components/FlexSetting"
import { CounterButtons } from "../components/CounterButtons"

const IndexPage = () => {

  const [classes, setClasses] = useState([
    'flexboxwrapper',
    classesDefs.FlexDirection.row.name,
    classesDefs.AlignItems.flexStart.name
  ])
  const [qtyImages, setQtyImages] = useState(5);

  const updateClasses = (targetClass, classDefinitions) => {
    const updatedClasses = setNewClasses(targetClass, classes, classDefinitions)
    setClasses(updatedClasses)
  }

  const updateFlexDirection = (targetClass) => {
    return updateClasses(targetClass, classesDefs.FlexDirection)
  }

  const updateFlexWrap = (targetClass) => {
    return updateClasses(targetClass, classesDefs.FlexWrap)
  }

  const updateJustifyContent = (targetClass) => {
    return updateClasses(targetClass, classesDefs.JustifyContent)
  }

  const updateAlignItems = (targetClass) => {
    return updateClasses(targetClass, classesDefs.AlignItems)
  }

  const updateAlignContent = (targetClass) => {
    return updateClasses(targetClass, classesDefs.AlignContent)
  }

  return (
  <Layout>
    <SEO title="Home" />
    <div className={'mainStuffWrapper'}>
      <h2>Flexbox CSS Tester</h2>
      <div className={classNames(classes)}>
        <Images qtyImages={qtyImages}/>
      </div>
      <div className={'mainControlsWrapper'}>
        <div>
          <span>Qty of Images:</span>
          <CounterButtons imagesSet={qtyImages} callback={setQtyImages}/>
        </div>
        <div className="controlsWrapper">
          <div className="control">
            <FlexSetting
              title={'flex-direction:'}
              classDefinitions={classesDefs.FlexDirection}
              callback={updateFlexDirection}
              currentClasses={classes}
            />
          </div>
          <div className="control">
            <FlexSetting
              title={'flex-wrap:'}
              classDefinitions={classesDefs.FlexWrap}
              callback={updateFlexWrap}
              currentClasses={classes}
            />
          </div>
          <div className="control">
            <FlexSetting
              title={'justify-content:'}
              classDefinitions={classesDefs.JustifyContent}
              callback={updateJustifyContent}
              currentClasses={classes}
            />
          </div>
          <div className="control">
            <FlexSetting
              title={'align-items:'}
              classDefinitions={classesDefs.AlignItems}
              callback={updateAlignItems}
              currentClasses={classes}
            />
          </div>
          <div className="control">
            <FlexSetting
              title={'align-content:'}
              classDefinitions={classesDefs.AlignContent}
              callback={updateAlignContent}
              currentClasses={classes}
            />
          </div>
        </div>
      </div>

    </div>
  </Layout>
  )
}

export default IndexPage

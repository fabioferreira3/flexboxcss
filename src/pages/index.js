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
import { Content } from "../components/Content"

const IndexPage = () => {

  const [classes, setClasses] = useState([
    'flexboxwrapper',
    classesDefs.FlexDirection.row.name,
    classesDefs.AlignItems.stretch.name,
    classesDefs.FlexWrap.wrap.name,
    classesDefs.JustifyContent.center.name,
    classesDefs.AlignContent.center.name
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
    <SEO/>
    <div className={'mainStuffWrapper'}>
      <div className="flexContainer">
        <h2>Flexbox CSS Tester</h2>
        <div className={classNames(classes)}>
          <Images qtyImages={qtyImages}/>
        </div>
      </div>
      <div className={'containerControlsWrapper'}>
        <div className={'counter'}>
          <span className={'qty'}>Images:</span>
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
        <div className={'donateBox'}>
          <form style={{margin: 0}} action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
            <input type="hidden" name="cmd" value="_s-xclick" />
            <input type="hidden" name="hosted_button_id" value="YUQ4PDT5XTLAY" />
            <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
            <img alt="" border="0" src="https://www.paypal.com/en_BR/i/scr/pixel.gif" width="1" height="1" />
          </form>
        </div>
      </div>
    </div>
    <div className={'secondaryStuffWrapper'}>
      <Content/>
    </div>
  </Layout>
  )
}

export default IndexPage

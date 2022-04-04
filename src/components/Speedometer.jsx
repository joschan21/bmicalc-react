import React from 'react'
import { useSelector } from 'react-redux'
import ReactSpeedometer from 'react-d3-speedometer'
import { CustomSegmentLabelPosition } from 'react-d3-speedometer'

const Speedometer = ({ setSelectedIndex, motionDirection, moveTo }) => {
  const { bmi, health, range } = useSelector((state) => state.bmi)

  // bmi can be between 18.5 and 40
  const max = 40
  const min = 14

  let shownValue = bmi
  if (bmi > max) shownValue = max
  if (bmi < min) shownValue = min

  function getPercent(bmiValue) {
    return (bmiValue - min) / (max - min)
  }

  const bmiPercent = getPercent(bmi)

  // colors for each of the segments, respective color only shown when selected
  let bmiColors = ['#ff878799', '#9cdb9799', '#ff878799', '#f0424299']
  let activeSegment = 4

  // determine selected segment
  if (Number(bmiPercent) <= getPercent(18.5)) activeSegment = 1
  if (Number(bmiPercent) > getPercent(18.5))
    activeSegment = 2
  if (Number(bmiPercent) > getPercent(25) && Number(bmiPercent) < getPercent(30))
    activeSegment = 3

  // return an array of gray colors, except for the selected segment
  let arr = []
  for (let i = 1; i <= 4; i++) {
    if (i === activeSegment) arr = [...arr, bmiColors[activeSegment - 1]]
    else arr = [...arr, '#D3D3D3']
  }

  return (
      <ReactSpeedometer
        forceRender={true} // production false
        className='speedometer'
        minValue={14}
        width={380}
        height={220}
        maxValue={40}
        segments={5}
        needleHeightRatio={0.7}
        ringWidth={25}
        cornerRadius={20}
        needleColor="#3a3b3c"
        segmentColors={arr}
        paddingHorizontal={10}
        paddingVertical={10}
        valueTextFontWeight='500'
        customSegmentStops={[14, 18.5, 25, 30, 40]}
        customSegmentLabels={[
          {
            text: 'Thin',
            fontSize: "16",
            color: '#000000',
            position: CustomSegmentLabelPosition.Outside,
          },
          {
            text: 'Healthy',
            fontSize: "16",
            color: '#000000',
            position: CustomSegmentLabelPosition.Outside,
          },
          {
            text: 'Overweight',
            fontSize: "16",
            color: '#000000',
            position: CustomSegmentLabelPosition.Outside,
          },
          {
            text: 'Obese',
            fontSize: "16",
            color: '#000000',
            position: CustomSegmentLabelPosition.Outside,
          },
        ]}
        currentValueText={`${bmi} BMI`}
        value={shownValue}
      />
  )
}

export default Speedometer

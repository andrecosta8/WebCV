import React from 'react'
import Card from '../../components/Card/Card'

const Experience: React.FC = () => {
  return (
    <Card 
    title="test" 
    institution='nbn' 
    startDate={new Date("2022-09-07")}
    description='bla bla bla' />
  )
}

export default Experience
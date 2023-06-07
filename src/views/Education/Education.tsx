import React from 'react'
import Card from '../../components/Card/Card'

const Education: React.FC = () => {
  return (
    <Card 
    title="test" 
    institution='nbn' 
    startDate={new Date("2020-09-07")}
    description='bla bla bla' />
  )
}

export default Education
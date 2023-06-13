import React from 'react'

//구조 분해 할당
//const FoodItem = function() {
const FoodItem = ({foodId : fId, foodName : fName, price}) => {


    // console.log('props: ', props);

  return (
    <li className={fId}> {fName} : {price}원</li>
  )
}

export default FoodItem;



import React from 'react'
import FoodItem from './FoodItem'
import SayHello from '../../SayHello'

const FoodList = () => {

    //나중에는 fetch를 통해 서버에서 음식 목록을 json으로 받아올 것이다.
    const food = {
        id: 327432,
        foodList : [
            {
                fName: '짜장면',
                price: 6000,
                id: 'chinese'
            },
            {
                fName: '해물파전',
                price: 12000,
                id: 'korean'
            },
            {
                fName: '규동',
                price: 7000,
                id: 'japanese'
            },
            {
                fName: '김치찌개',
                price: 5000,
                id: 'korean'
            },
            {
                fName: '탕수육',
                price: 20000,
                id: 'chinese'
            },
    
        ]
    }

  return (
    <ul>
        {
            food.foodList.map( 
                f => <FoodItem foodName={f.fName} price={f.price} foodId={f.id}/>)
        }
        <SayHello>
            <a href='http://www.naver.com'>네이버</a> 
        </SayHello>
        <SayHello>
            <a href='http://www.google.com'>구글</a>
        </SayHello>
        

        
        
        {/* <FoodItem foodName='짜장면' price={6000} foodId={'chinese'} />
        <FoodItem foodName='김치전' price={8500} foodId={'korean'} />
        <FoodItem foodName={'규동'} price={7500} foodId={'japanese'} /> */}
    </ul>
  )
}

export default FoodList;
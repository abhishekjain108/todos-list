import React, { useState } from 'react'
import Heading from './Heading'
import { ImCross } from "react-icons/im";




const InputFiled = () => {

    let[inputdata , setInputData] = useState('')
    let[totaldata , setTotalData ] = useState([])


    function handleChangeInput(e){
        setInputData(e.target.value)
    }

    function handleClickAdd(e){
        if(!inputdata){

        }else{
            setTotalData((prevalue)=>{
                return [...prevalue , inputdata]
            })
        }
        setInputData('')

        e.preventDefault()
    }

    function handleRemoveEachItem(id){
        let updateditems = totaldata.filter((elem , ind )=>{
            return ind !== id
        })
        setTotalData(updateditems)
    }

    function handleRemoveAll(){
        setTotalData([])
    }
  return (
    <>
    <Heading/>

    <form action="" onSubmit={handleClickAdd}>
        <div className="input-container">
            <input type="text" placeholder='Enter To-do List' value={inputdata} onChange={handleChangeInput}/>
            <button className='btn btn-success ms-2'>Add</button>
            <button className='btn btn-danger ms-2' onClick={handleRemoveAll}>Remove All</button>

        </div>
    </form>

    <div className="total-item">
      {
        totaldata.map((elem , ind)=>{
            return (
                <div className="each-item" key={ind}>
                <b>{elem}</b> 
                <button className='btn btn-sm btn-danger ms-2' onClick={()=> handleRemoveEachItem(ind)}><ImCross /></button>
                </div>
            )
        })
      }
    </div>
    </>
  )
}

export default InputFiled
import React from 'react'

function Gender({OnGender,selectgender}) {
  return (
    <div className='flex'>
        <div className='form-control'>
        <label htmlFor="" className={`label gap-2 cursor-pointer`}>
            <span className='label-text'> Male</span>
        <input type="checkbox" 
        checked={selectgender==='male'}
        onChange={()=>{OnGender('male')}}
         className='checkbox border-slate-900'/>
        </label>
        </div>
        <div className='form-control'>
        <label htmlFor="" className={`label gap-2 cursor-pointer`}>
            <span className='label-text'> Female</span>
        <input type="checkbox"  
                checked={selectgender==='female'}
                onChange={()=>{OnGender('female')}}
        className='checkbox border-slate-900'/>
        </label>
        </div>
    </div>
  )
}

export default Gender
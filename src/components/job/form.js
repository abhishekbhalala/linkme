import React, { useState } from 'react'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
const Form = () => {

    const [option,setOption]=useState("");
    const value=(e)=>{
        setOption(e.target.value);
    }

    const submithandler=(e)=>{
        e.preventDefault();
        console.log(option)
    }

    const[mi,setMi]=useState("");
    const mivalue=(e)=>{
        setMi(e.target.value)
    }

    const miSubmitHandler=(e)=>{
        e.preventDefault();
        console.log(mi)
    }

    const [company,setCompany]=useState("");
    const valuecompany=(e)=>{
        setCompany(e.target.value);
    }

    const companysubmithandler=(e)=>{
        e.preventDefault();
        console.log(company)
    }
    const [isdropdown,setIsdropdown]=useState(false);
    const jobsdropdownclick=(e)=>{
        e.preventDefault();
        setIsdropdown(!isdropdown);
      }

      const [miisdropdown,misetIsdropdown]=useState(false);
    const mijobsdropdownclick=(e)=>{
        e.preventDefault();
        misetIsdropdown(!miisdropdown);
      }

      const [companyisdropdown,companysetIsdropdown]=useState(false);
      const companydropdownclick=(e)=>{
          e.preventDefault();
          companysetIsdropdown(!companyisdropdown);
        }
  return (
    <>
   
<input name='keyword'  type='hidden'/>
<input name='location'  type='hidden'/>
<input name='locationId' type='hidden'/>
<input name='geoId' type='hidden'/>

<ul className='filters_list'>
<form className='filters_form' onSubmit={submithandler}>
    <li className='filter'>
<div className='filter__dropdown_to_modal'>
<div className='collapsible_dropdown'>
<button className='guest_filters_filter_button' onClick={jobsdropdownclick}>
Any Time
<ArrowDropDownIcon className='iconarrow' onClick={jobsdropdownclick}>
      </ArrowDropDownIcon>
</button>
<div className='collapsible_dropdown_list'>
<div className='filter_values_container'>
<div className='filter_values_container_filter_values'>
{isdropdown && <div>
<div className='filter_values_container_filter_value'>
 <input type='radio' onChange={value} value="Past 24 hours" checked={option === "Past 24 hours"}/>
<label >Past 24 hours</label>
</div>

<div className='filter_values_container_filter_value'>
 <input type='radio' onChange={value} value="Past Week" checked={option==="Past Week"}/>
<label >Past Week</label>
</div>

<div className='filter_values_container_filter_value'>
 <input type='radio'onChange={value} value="Past Month" checked={option === "Past Month"}/>
<label >Past Month</label>
</div>

<div className='filter_values_container_filter_value'>
 <input type='radio'onChange={value} value="Any Time" checked={option === "Any Time"}/>
<label >Any Time</label>
</div>
<button type='submit'>Done</button>
</div>}
</div>
</div>
</div>
</div>
</div>
    </li></form>

    <form className='filters_form' onSubmit={miSubmitHandler}>
    <li className='filter'>
<div className='filter_dropdown_to_modal'>
<div className='collapsible_dropdown'>
<button className='guest_filters_filter_button' onClick={mijobsdropdownclick}>
25 mi 40km
<ArrowDropDownIcon className='iconarrow' onClick={mijobsdropdownclick}>
      </ArrowDropDownIcon>
</button>
<div className='collapsible_dropdown_list'>
<div className='filter_values_container'>
<div className='filter_values_container_filter_values'>
{miisdropdown && <div>
<div className='filter_values_container_filter_value'>
 <input type='radio' onChange={mivalue} value="10 mi 15km" checked={mi === "10 mi 15km"}/>
<label >10 mi 15km</label>
</div>

<div className='filter_values_container_filter_value'>
 <input type='radio' onChange={mivalue} value="25 mi 40km" checked={mi==="25 mi 40km"}/>
<label >25 mi 40km</label>
</div>

<div className='filter_values_container_filter_value'>
 <input type='radio'onChange={mivalue} value="50 mi 80km" checked={mi === "50 mi 80km"}/>
<label >50 mi 80km</label>
</div>

<div className='filter_values_container_filter_value'>
 <input type='radio'onChange={mivalue} value="75 mi 120km" checked={mi === "75 mi 120km"}/>
<label >75 mi 120km</label>
</div>

<div className='filter_values_container_filter_value'>
 <input type='radio'onChange={mivalue} value="100 mi 160km" checked={mi === "100 mi 160km"}/>
<label >100 mi 160km</label>
</div>
<button type='submit'>Done</button>

</div>}
</div>
</div>
</div>
</div>
</div>
    </li></form>


   
    <form className='filters_form' onSubmit={companysubmithandler}>
    <li className='filter'>
<div className='filter_dropdown_to_modal'>
<div className='collapsible_dropdown'>
<button className='guest_filters_filter_button' onClick={companydropdownclick}>
Company
<ArrowDropDownIcon className='iconarrow' onClick={companydropdownclick}>
      </ArrowDropDownIcon>
</button>
{companyisdropdown &&
<div className='collapsible_dropdown_list'>
    <section className='filter_type_head'>
        <input className='filter_type_head_input' placeholder='Add a Filter'/>
    <div className='sr_only'>
    <div className='typehead_input_dropdown_list'>
         {/* <template className='typehead_item'>

         </template> */}

    </div>
    </div>
    </section>
<div className='filter_values_container'>
<div className='filter_values_container_filter_values'>
 <div>
<div className='filter_values_container_filter_value'>
 <input type='checkbox' onChange={valuecompany}/>
<label >KPMG</label>
</div>

<div className='filter_values_container_filter_value'>
 <input type='checkbox' onChange={valuecompany} />
<label >25 mi 40km</label>
</div>

<div className='filter_values_container_filter_value'>
 <input type='checkbox'onChange={valuecompany}/>
<label >50 mi 80km</label>
</div>

<div className='filter_values_container_filter_value'>
 <input type='checkbox'onChange={valuecompany}/>
<label >75 mi 120km</label>
</div>

<div className='filter_values_container_filter_value'>
 <input type='checkbox'onChange={valuecompany} />
<label >100 mi 160km</label>
</div>
<button type='submit'>Done</button>

</div>
</div>
</div>
</div>}
</div>
</div>
    </li></form>
</ul> 
</>
  )
}

export default Form
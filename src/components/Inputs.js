import { useState } from "react";
import classes from "./Inputs.module.css";

const Inputs = ({ data }) => {
    const [currentStaff, setCurrentStaff] = useState("");
    const [currentId, setCurrentId] = useState("");

    const filterByCurrentStaff = data.filter(el => el.staffType === currentStaff);

    let name;
    const currentInfo =  data.find(el => el._id === currentId)
    if(currentInfo){
        name = currentInfo.fullName
        console.log(name)
    }

    const changeCurrentStaffHandler = (event) => {
        setCurrentStaff(event.target.value);
        setCurrentId("");
    };

    const changeCurrentRollId = (event) => {
        setCurrentId(event.target.value); 
    }

    return (
        <form className={classes.form}>
            <div>
                <label htmlFor="staffs">
                    Staffs Type
                </label>
                <select 
                    defaultValue='--Staffs--'
                    title='staffs'
                    onChange={changeCurrentStaffHandler}
                    id="staffs"
                >  
                    <option hidden disabled>--Staffs--</option>
                    <option value="Principal">Principal</option>
                    <option value="Vice-Principal">Vice-Principal</option>
                    <option value="Teacher">Teacher</option>
                </select>
            </div>

            <div>
                <label htmlFor="id">
                    ID no.
                </label>
                <select 
                    defaultValue='--All--'
                    id='id'
                    onChange={changeCurrentRollId}
                >
                    <option value="" hidden>--All--</option>
                    {filterByCurrentStaff.map(el => (
                        <option value={el._id} key={el._id}>{el.rollId}</option>
                    ))}
                </select>
            </div>

            <div>
                <label htmlFor="shift">
                    Shift
                </label>
                <select 
                    defaultValue='--Shift--'
                    id='shift'
                >
                    {!currentId ? 
                        <option hidden disabled>--Shift--</option> : 
                        <option>{`${data.find(el => el._id === currentId).shift.entry} - ${data.find(el => el._id === currentId).shift.exit}`}</option> 
                    }
                </select>
            </div>

            <div>
            <label htmlFor="fullName">Full Name</label>
            <select 
                defaultValue='--All--'
                value = {name}
                id='fullName'
                onChange={(event) => console.log(data.find(el => el.fullName === event.target.value)._id)}
            >
               {currentStaff ? filterByCurrentStaff.map(el => (
                   <option key={el.fullName}>{el.fullName}</option>
               )) : <option value='' hidden>--All--</option>}
               

            </select>
            </div>
        </form>
    );
};

export default Inputs;
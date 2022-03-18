import { useState } from "react";
import classes from "./Inputs.module.css";

const Inputs = ({ data }) => {
    const [currentStaff, setCurrentStaff] = useState("");
    const [currentId, setCurrentId] = useState("");
    const [currentName, setCurrentName] = useState("");

    const filterByCurrentStaff = data.filter(el => el.staffType === currentStaff);

    const changeCurrentStaffHandler = (event) => {
        setCurrentStaff(event.target.value);
        setCurrentId("");
    };

    const changeCurrentIdHandler = (event) => {
        setCurrentId(event.target.value); 
        const currentInfo =  data.find(el => el._id === event.target.value)
        if(currentInfo){
           setCurrentName(currentInfo.fullName)
        }
    }

    const changeNameHandler = (event) => {
        setCurrentName(event.target.value)
        const currentInfo =  data.find(el => el.fullName === event.target.value)
        if(currentInfo){
           setCurrentId(currentInfo._id)
        }
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
                    id='id'
                    value={currentId}
                    onChange={changeCurrentIdHandler}
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
                    value = {currentName}
                    id='fullName'
                    onChange={changeNameHandler}
                >
                    <option value='' hidden>--All--</option>
                    {filterByCurrentStaff.map(el => (
                        <option key={el.fullName}>{el.fullName}</option>
                    ))}
                </select>
            </div>
        </form>
    );
};

export default Inputs;
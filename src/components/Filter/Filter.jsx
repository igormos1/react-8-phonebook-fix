import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';


import { useSelector, useDispatch } from "react-redux";
import { useId } from "react";

import { changeFilter } from "redux/contacts/filterSlice";

export const Filter = () => {
    
const id = useId();
const filter = useSelector(state => state.filter);
const dispatch = useDispatch();

    const onChangeFilter = (event) => dispatch(changeFilter(event.currentTarget.value));
    
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '100%' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id={`${id}-filter`}
        label="Find contacts by name"
        variant="outlined"
        type="search"
        value={filter}
        onChange={onChangeFilter}
      />
    </Box>
  );
}





// import { useId } from "react";
// import { useSelector, useDispatch } from "react-redux";

// import { changeFilter } from "redux/contacts/filterSlice";
// import s from "./Filter.module.css";


// export const Filter = () => {

// const id = useId();
// const filter = useSelector(state => state.filter);
// const dispatch = useDispatch();

// const onChangeFilter = (event) => dispatch(changeFilter(event.currentTarget.value));

//     return (
//         <div className={s.filter}>
//             <label htmlFor={`${id}-filter`} className={s.label}>Find contacts by name</label>
//             <input className={s.input} type="search"
//                 id={`${id}-filter`}
//                 value={filter}
//                 onChange={onChangeFilter}
//             />
//         </div>

//     );
// }


import './App.css';
import Header from './component/Header';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import AddIcon from '@mui/icons-material/Add';
import { useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';

function App() {

const[name, setName] = useState("");
const[email, setEmail] = useState("");
const[data, setData] = useState([]);

const addmore = () => { 
  setData([...data, {name, email}]);
  setName("");
  setEmail("");     
};

const removeItem = (index) =>{
  let arr = data;
  arr.splice(index,1);
setData([...arr]);
}

  return (
    <div className="App">
      <div className='header'> 
     <Header/>
     </div>
{/* Form */}
<div className='form'>
<Stack direction="row" spacing={2}>
<TextField value={name} onChange={(event) => setName(event.target.value)} id="outlined-basic" label="Name" variant="outlined" />
<TextField value={email} onChange={(event) => setEmail(event.target.value)} id="outlined-basic" label="Emial" variant="outlined" />
<Button onClick={addmore} variant="contained" color="success">
              <AddIcon/>
      </Button>
      </Stack>
</div>

{/* Data */}
<div className='data'>
<div className='data_val'>
  <h1>Name</h1>
  <h1>Email</h1>
  <h1>Remove</h1> 
</div>
{
  data.map((element, index) => {
    return(
      
    <div className='data_val'>
    <h1>{element.name}</h1>
    <h1>{element.email}</h1>
    <Button  onClick={removeItem} variant="contained" color="error">
    <DeleteIcon  />
      </Button>
  </div>
    )
  } 
)}

</div>
    </div>
  );
}

export default App;

import React, {useState}from 'react';
import Axios from 'axios'

const Entries=()=>{
    const [enter, setEnter] = useState('');
const getEntries = ()=>{
    Axios.get("https://www.boredapi.com/api/activity")
    .then((response) =>{
        setEnter(
            response.data.activity
            );

    });
};

return (
    <div>
        <h1>hello</h1>
        <p>
            If you click the button data will present!!!!!!
            </p>
        <button onClick={getEntries}>click me</button>
<p>
    {enter}
</p>
           
    </div>
);
}
export default Entries;



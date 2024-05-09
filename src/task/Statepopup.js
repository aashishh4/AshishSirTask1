import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Statepopup(props) {
    const [selectedState, setSelectedState] = useState(""); 
    const Navigate=useNavigate();
    

    
    console.log("props", props);

    const handleStateChange = (event) => {
        const selectedValue = event.target.value;
        setSelectedState(selectedValue);
        Navigate("/dasboard")
        console.log('selectedState', selectedValue);
       
        
    };

    return (
        <div>
            <h1 className='loginModal'>
                <span className="closeButton" onClick={() => props.setIsOpen(false)}>
               X
                </span>
                <br/>
                <span className="title">State List</span>
                <br/>
                {/* Dropdown menu for state list */}
                <select value={selectedState} onChange={handleStateChange}>
                    <option value="">Select a state...</option>
                    <option value="state1">State 1</option>
                    <option value="state2">State 2</option>
                    <option value="state3">State 3</option>
                    {/* Add more options as needed */}
                </select>
            </h1>
        </div>
    );
}

export default Statepopup;

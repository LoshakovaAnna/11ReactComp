import React from 'react';

import Form from './Form';
import PetsList from './PetsList';
import Settings from './Settings';

function App(){    
    return (
        <div>            
            <Form />
            <Settings />
            <PetsList />        
        </div>
    )
}

export default App;
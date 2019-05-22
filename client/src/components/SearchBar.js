import React,{useState} from 'react'

export default function SearchBar({handleSearch}) {
    const [value, setValue] = useState('');

    const handleChange = event => setValue(event.target.value);

    const handleSubmit = event => {
        event.preventDefault();
        handleSearch(value);
        setValue('');
    }
    
    return (
        <form onSubmit={handleSubmit}>
            <div className="ui right aligned category search">
                <div className="ui icon input">
                    <input className='prompt' type='text' placeholder = 'Search' value={value} onChange={handleChange} />
                    <i className = 'search icon'></i>
            </div>
            </div>
        </form>
    )
};

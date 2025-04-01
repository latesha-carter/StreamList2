import React, { useState } from 'react';

function StreamList() {
  const [input, setInput] = useState('');
  const [userInfo, setUserInfo] = useState({ name: '', email: '' });
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleUserInfoChange = (e) => {
    const { name, value } = e.target;
    setUserInfo((prev) => ({ ...prev, [name]: value }));
  };

  const handleCredentialsChange = (e) => {
    const { name, value } = e.target;
    setCredentials((prev) => ({ ...prev, [name]: value }));
  };

  const handleCredentialsSubmit = (e) => {
    e.preventDefault();
    console.log('Credentials:', credentials);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(input, userInfo);
  };

  const toggleDropdown = () => {
    setDropdownVisible((prev) => !prev);
  };

  return (
    <div>
      {/* Second Navigation Bar */}
      <nav style={{ backgroundColor: '#f8f9fa', padding: '10px', borderBottom: '1px solid #ddd', position: 'relative' }}>
        <button
          onClick={toggleDropdown}
          style={{
            backgroundColor: 'black',
            color: 'white',
            border: 'none',
            padding: '10px',
            cursor: 'pointer',
          }}
        >
          Menu
        </button>
        {dropdownVisible && (
          <ul
            style={{
              listStyleType: 'none',
              margin: '10px 0 0 0',
              padding: '0',
              backgroundColor: 'white',
              border: '1px solid #ddd',
              position: 'absolute',
              top: '50px', // Adjusted to ensure it appears below the button
              left: '10px', // Adjusted for proper alignment
              zIndex: 1000, // Ensures it appears above other elements
            }}
          >
            <li style={{ padding: '10px', cursor: 'pointer' }}>Profile1</li>
            <li style={{ padding: '10px', cursor: 'pointer' }}>Profile2</li>
            <li style={{ padding: '10px', cursor: 'pointer' }}>Favorites</li>
            <li style={{ padding: '10px', cursor: 'pointer' }}>Settings</li>
            <li style={{ padding: '10px', cursor: 'pointer' }}>User Information</li>
          </ul>
        )}
      </nav>

      <form onSubmit={handleCredentialsSubmit} style={{ position: 'absolute', top: '10px', left: '10px' }}>
        <input
          type="text"
          name="username"
          value={credentials.username}
          onChange={handleCredentialsChange}
          placeholder="Username"
          style={{ fontFamily: 'inherit', marginRight: '5px', backgroundColor: 'white', color: 'black' }}
        />
        <input
          type="password"
          name="password"
          value={credentials.password}
          onChange={handleCredentialsChange}
          placeholder="Password"
          style={{ fontFamily: 'inherit', marginRight: '5px', backgroundColor: 'white', color: 'black' }}
        />
        <button type="submit" style={{ fontFamily: 'inherit', backgroundColor: 'black', color: 'white' }}>Enter</button>
      </form>
      <h2>StreamList</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          onChange={handleInputChange}
          placeholder="Stream Name"
          style={{ backgroundColor: 'white', color: 'black' }}
        />
        <div>
          <input
            type="text"
            name="name"
            value={userInfo.name}
            onChange={handleUserInfoChange}
            placeholder="Your Name"
            style={{ backgroundColor: 'white', color: 'black' }}
          />
          <input
            type="email"
            name="email"
            value={userInfo.email}
            onChange={handleUserInfoChange}
            placeholder="Your Email"
            style={{ backgroundColor: 'white', color: 'black' }}
          />
        </div>
        <button type="submit" style={{ backgroundColor: 'black', color: 'white' }}>Submit</button>
      </form>
    </div>
  );
}

export default StreamList;

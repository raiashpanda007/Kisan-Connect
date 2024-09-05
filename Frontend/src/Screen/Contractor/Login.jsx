import React, { useState } from 'react';

const Login = () => {
  

  const handleSubmit = (event) => {
    event.preventDefault();
    // Implement login logic here (mock or API integration)
    console.log('Contractor Login:', { email, password });
  };

  return (
    <div className="form-container">
      <h2>Contractor Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
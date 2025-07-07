import { useState } from "react";

function SignupForm() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ username: '', email: '', password: '', confirmPassword: '' });
    }, 2000);
  };

  return (
    <div className="glass-card signup-form">
      <div className="form-header">
        <h2 className="gradient-text">Join CreativeHub</h2>
        <p>Begin your creative journey today</p>
      </div>
      
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label>Username</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
            className="input-field"
            placeholder="Enter your username"
            required
          />
        </div>
        
        <div className="input-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="input-field"
            placeholder="Enter your email"
            required
          />
        </div>
        
        <div className="input-group">
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            className="input-field"
            placeholder="Create a password"
            required
          />
        </div>
        
        <div className="input-group">
          <label>Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleInputChange}
            className="input-field"
            placeholder="Confirm your password"
            required
          />
        </div>
        
        <button
          type="submit"
          className={`btn-primary ${isSubmitted ? 'submitted' : ''}`}
          disabled={isSubmitted}
        >
          {isSubmitted ? 'Welcome! 🎉' : 'Create Account'}
        </button>
      </form>
      
      <div className="form-footer">
        <p>Already have an account? <a href="#" className="link">Sign In</a></p>
      </div>
    </div>
  );
}

export default SignupForm;

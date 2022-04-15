import React, { useState, useEffect } from 'react';
import Link from 'next/link';

import { getCategories } from '../services';
import Home from '../pages';
import { Auth } from '.';

const initialState = {
  fullName: '',
  username: '',
  password: '',
  confirmPassword: '',
  phoneNumber: '',
  avatarURL: '',
}

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [form, setForm] = useState(initialState);

  const handleChange = (e) => {
      setForm({ ...form, [e.target.name]: e.target.value });
  }

  useEffect(() => {
    getCategories().then((newCategories) => {
      setCategories(newCategories);
    });
  }, []);

  const switchMode = () => {
    return (
      <div className="auth__form-container_fields-content_input">
                                <label htmlFor="fullName">Full Name</label>
                                <input 
                                    name="fullName" 
                                    type="text"
                                    placeholder="Full Name"
                                   
                                    required
                                />
                            </div>
    );
}

  return (
    <div className="bg-white shadow-lg rounded-lg p-8 pb-12 mb-8">
      <h3 className="text-xl mb-8 font-semibold border-b pb-4">Categories</h3>
      {categories.map((category, index) => (
        <Link key={index} href={`/category/${category.slug}`}>
          <span className={`cursor-pointer block ${(index === categories.length - 1) ? 'border-b-0' : 'border-b'} pb-3 mb-3`}>{category.name}</span>
        </Link>
        ))}
      </div>
    );
  };
  export default Categories;
              
        
        
        

        
           
          

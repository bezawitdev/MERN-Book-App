import React from 'react';
import {useState} from 'react';
import Layout from '../shared/Layout';

function AddBook() {
  const [inputs, setInputs] = useState({
    name:"",
    description:"",
    author:"",
    price:"",
    available:"",
    image:""
  })

  return (
    <div>
      <Layout/>
      <form>
  <label>
    Name:
    <input type="text" name="name" />
  </label>
  <label>
    Author:
    <input type="text" name="author" />
  </label>
  <label>
    Description:
    <input name="description" />
  </label>
  <label>
    Price:
    <input type="number" name="price" />
  </label>
  <label>
    Available:
    <input type="text" name="available" />
  </label>
  <label>
    Image:
    <input name="image" />
  </label>
  <button type="submit">Add Book</button>
</form>
      
      </div>
  )
}

export default AddBook
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Container, Form, Button } from 'react-bootstrap';


const SearchByCategory = () => {
  const { searchterm } = useParams();
  const [searchQuery, setSearchQuery] = useState('');
  const [category, setCategoryname] = useState('');
  const [location , setLocation] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`http://localhost:3001/category/location?query=${searchterm}`);
        const data = await res.json(); 
        console.log (data);
        if (data.length > 0) {
          const product = data[0];
          setCategoryname(searchterm); 
          setLocation(product.location);
        }
      } catch (error) {
        console.log(error);
      }
    }; 

    fetchData(); 
  }, [searchterm]);

  const handleSearch = () => {
    navigate(`/search/category/${category}/${searchQuery}`);
  };


  return (
    <Container fluid>
      <h1 className="text-center my-4">Search in {category}</h1>
      <Form className="d-flex justify-content-center my-4">
        <Form.Control
          type="text"
          placeholder="Search for products"
          className="w-10"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <Button variant="primary" className="ml-2" onClick={handleSearch}>Search</Button>
      </Form>
      <Container fluid className="d-flex flex-column align-items-center my-4">
        <h2>Location </h2>
        <h2><strong>Starts from:</strong>  {location}</h2>
      </Container>
    </Container>
  );
};

export default SearchByCategory;

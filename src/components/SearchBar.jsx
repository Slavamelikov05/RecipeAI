import React, { useState, useEffect } from 'react';
import {
  Button,
  Form,
  FormControl,
  InputGroup,
  Modal,
  CloseButton,
} from 'react-bootstrap';
import './SearchBar.css';
import axios from 'axios';
import Cookies from 'js-cookie';
const SearchBar = ({ pageRecipe, setpageRecipe }) => {
  const [search, setSearch] = useState('');
  const [recipe, setRecipe] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [cookieId, setcookieId] = useState('');

  useEffect(() => {
    const ssid = Cookies.get('ssid');
    if (ssid) {
      setcookieId(ssid);
      console.log(cookieId);
    }
  }, [cookieId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setShowModal(true);
    setLoading(true);
    try {
      const response = await axios.post('api/recipes', {
        ingredients: search,
      });

      setRecipe(JSON.parse(response.data));

      setLoading(false);
      console.log(recipe);
    } catch (error) {
      setShowModal(false);
      console.error('Error fetching recipe', error);
    }
  };

  const handleSave = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('api/saverecipe', {
        name: recipe.name,
        ingredients: recipe.ingredients,
        instructions: recipe.instructions,
        cookieId: cookieId,
      });
      console.log(response.data);
    } catch (error) {
      console.error('Error saving recipe', error);
    }
  };

  const handleClose = () => {
    setShowModal(false);
    setRecipe(null);
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <InputGroup className='search-bar'>
          <FormControl
            type='text'
            placeholder='Choose your ingredients'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <Button variant='primary' type='submit'>
            Search
          </Button>
        </InputGroup>
      </Form>

      <Modal
        show={showModal}
        onHide={null}
        backdrop={'static'}
        keyboard={false}
      >
        {loading ? (
          <Modal.Body>Generating recipe...</Modal.Body>
        ) : (
          recipe && (
            <>
              <Modal.Header>
                <Modal.Title>{recipe.name}</Modal.Title>
                <CloseButton onClick={handleClose} />
              </Modal.Header>
              <Modal.Body>
                <h4>Ingredients:</h4>
                <ul>
                  {recipe.ingredients.map((ingredientObj, index) => (
                    <li key={index}>{ingredientObj}</li>
                  ))}
                </ul>
                <h4>Instructions:</h4>
                <ul>
                  {recipe.instructions.map((instruction) => (
                    <li>{instruction}</li>
                  ))}
                </ul>
              </Modal.Body>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <Button variant='danger' onClick={handleClose}>
                  Close
                </Button>
                <Button variant='warning' onClick={handleSubmit}>
                  Regenerate
                </Button>
                <Button variant='success' onClick={handleSave}>
                  Save Recipe
                </Button>
              </div>
            </>
          )
        )}
      </Modal>
    </>
  );
};
export default SearchBar;

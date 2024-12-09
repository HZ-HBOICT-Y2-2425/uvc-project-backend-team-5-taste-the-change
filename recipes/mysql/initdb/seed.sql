USE recipe_app;

INSERT INTO recipes (name, description, ingredients, emission_per_meal, servings, diet, time, image)
VALUES
('Spaghetti Bolognese', 'Classic Italian dish', 'spaghetti, beef, tomato sauce, garlic', 2.5, 4, 'meat', 30, 'spaghetti.jpg'),
('Vegan Tacos', 'Delicious and healthy vegan tacos', 'tortillas, beans, avocado, tomato, lettuce', 1.2, 4, 'vegan', 20, 'vegan_tacos.jpg'),
('Chicken Curry', 'Spicy and flavorful chicken curry', 'chicken, curry powder, coconut milk, onions', 3.1, 6, 'meat', 40, 'chicken_curry.jpg');

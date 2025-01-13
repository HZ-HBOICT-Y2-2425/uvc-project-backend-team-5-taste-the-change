-- Insert beginner goals
INSERT INTO goals (id, goal, description, level) VALUES
(1, 'Incorporate More Plant-Based Meals', 'Start by adding one plant-based meal to your diet each day. It could be as simple as oatmeal for breakfast or a veggie stir-fry for dinner.', 'beginner'),
(2, 'Experiment with Plant-Based Proteins', 'Try different plant-based protein sources like tofu, tempeh, lentils, chickpeas, and quinoa. Aim to include at least one in your meals daily.', 'beginner'),
(3, 'Learn Plant-Based Recipes', 'Pick 3-5 plant-based recipes to try each week. This will help you build a repertoire of delicious, go-to meals.', 'beginner');

-- Insert intermediate goals
INSERT INTO goals (id, goal, description, level) VALUES
(4, 'Plan and Prep', 'Dedicate a couple of hours each week to plan your meals and prep ingredients. This can make sticking to a plant-based diet easier during busy days.', 'intermediate'),
(5, 'Explore New Foods', 'Challenge yourself to try a new plant-based ingredient or dish each week. This could be a new vegetable, grain, or even a plant-based dessert.', 'intermediate'),
(6, 'Find Plant-Based Alternatives', 'Swap out animal-based products for plant-based alternatives. For instance, use almond or oat milk instead of dairy, or try plant-based yogurt and cheese.', 'intermediate');

-- Insert advanced goals
INSERT INTO goals (id, goal, description, level) VALUES
(7, 'Go Fully Plant-Based', 'Commit to eating a fully plant-based diet for a set period, like 30 days, to see how you feel and discover new favorite foods.', 'advanced'),
(8, 'Educate Yourself', 'Learn more about the nutritional aspects of a plant-based diet. Read books, watch documentaries, or take an online course to deepen your understanding.', 'advanced'),
(9, 'Get Involved', 'Join plant-based communities or support groups, either online or in your local area. Sharing experiences and tips can be incredibly motivating.', 'advanced');

-- Seed messages for all goals
INSERT INTO messages (goal_id, message) VALUES
(1, 'You are making a difference one meal at a time!'),
(1, 'Small changes lead to big results. Keep adding those plant-based meals!'),
(1, 'Every veggie on your plate reduces your carbon footprint.'),

(2, 'Exploring new proteins is fun and nutritious!'),
(2, 'Tofu today, lentils tomorrow-you are rocking the protein variety!'),
(2, 'Plant-based proteins are packed with goodness. Keep it up!'),

(3, 'Cooking new recipes is like discovering hidden treasures!'),
(3, 'Every new dish is a step closer to your goal. Keep experimenting!'),
(3, "Great recipes build a great lifestyle. What's cooking today?"),

(4, "Meal prep saves time and keeps you on track. You're doing awesome!"),
(4, 'A little planning today means a lot of success tomorrow.'),
(4, 'Your organized prep will keep you focused on your goal!'),

(5, 'New foods = new adventures! Try something exciting this week.'),
(5, 'A new dish awaits you! Discover and enjoy.'),
(5, "Variety is the spice of life. You're mastering it one meal at a time!"),

(6, 'Switching to plant-based alternatives is a great step forward!'),
(6, 'Your choices today are shaping a better tomorrow. Keep it up!'),
(6, 'Every small swap contributes to a healthier planet.'),

(7, "You're all in, and it's inspiring!"),
(7, "30 days of plant power you are unstoppable!"),
(7, "Every bite you take supports a healthier planet. Keep it up!"),

(8, 'Knowledge is power. Keep educating yourself about plant-based living.'),
(8, 'Your commitment to learning is inspiring. The more you know, the better you grow!'),
(8, 'Stay curious and keep exploring the science behind your choices.'),

(9, 'Building community makes the journey easier and more fun!'),
(9, 'Your contributions to the plant-based community are meaningful.'),
(9, 'Together, we can create a more sustainable world. Keep connecting!');
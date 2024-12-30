export interface Recipe {
  id: string;
  name: string;
  category: string;
  ingredients: string[];
  instructions: string[];
  image: string;
  storage: string;
  familyNotes: string;
}

export const categories = [
  "Appetizers",
  "Main Courses",
  "Desserts",
  "Sides",
  "Beverages"
];

export const recipes: Recipe[] = [
  {
    id: "1",
    name: "Grandma's Apple Pie",
    category: "Desserts",
    ingredients: [
      "6 cups sliced apples",
      "1 tablespoon lemon juice",
      "3/4 cup white sugar",
      "1 teaspoon ground cinnamon",
      "1/4 teaspoon ground nutmeg",
      "2 tablespoons all-purpose flour",
      "2 tablespoons butter",
      "1 egg yolk",
      "2 pie crusts"
    ],
    instructions: [
      "Preheat oven to 425°F (220°C).",
      "Mix sliced apples with lemon juice, sugar, cinnamon, nutmeg, and flour.",
      "Pour mixture into pie crust, dot with butter.",
      "Cover with top crust, seal edges, and cut slits for steam to escape.",
      "Brush top with beaten egg yolk.",
      "Bake for 45 minutes or until crust is golden and filling is bubbly."
    ],
    image: "https://images.unsplash.com/photo-1568571780765-9276ac8b75a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    storage: "Cover and refrigerate for up to 4 days.",
    familyNotes: "Grandma always said the secret was in using a mix of tart and sweet apples!"
  },
  {
    id: "2",
    name: "Uncle Bob's BBQ Ribs",
    category: "Main Courses",
    ingredients: [
      "2 racks of pork ribs",
      "1/4 cup brown sugar",
      "2 tablespoons paprika",
      "1 tablespoon garlic powder",
      "1 tablespoon onion powder",
      "1 teaspoon black pepper",
      "1 teaspoon salt",
      "1 cup BBQ sauce"
    ],
    instructions: [
      "Mix dry ingredients to create a rub.",
      "Apply rub generously to both sides of the ribs.",
      "Preheat grill to 250°F (120°C) for indirect cooking.",
      "Place ribs on grill, cook for 4-5 hours until tender.",
      "In the last 30 minutes, brush with BBQ sauce every 10 minutes.",
      "Remove from grill, let rest for 10 minutes before serving."
    ],
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    storage: "Wrap tightly in foil and refrigerate for up to 3 days. Reheat in oven at 250°F.",
    familyNotes: "Uncle Bob swears by apple wood chips for smoking these ribs!"
  },
  {
    id: "3",
    name: "Aunt Mary's Spinach Dip",
    category: "Appetizers",
    ingredients: [
      "1 package frozen chopped spinach, thawed and drained",
      "1 cup sour cream",
      "1 cup mayonnaise",
      "1 package vegetable soup mix",
      "1 can water chestnuts, drained and chopped",
      "3 green onions, chopped"
    ],
    instructions: [
      "Mix all ingredients in a large bowl.",
      "Cover and refrigerate for at least 2 hours or overnight.",
      "Serve with bread cubes or crackers."
    ],
    image: "https://images.unsplash.com/photo-1576021122295-694c60397c92?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    storage: "Keep refrigerated for up to 3 days.",
    familyNotes: "Aunt Mary likes to serve this in a hollowed-out bread bowl for parties!"
  },
  {
    id: "4",
    name: "Cousin Sarah's Garlic Mashed Potatoes",
    category: "Sides",
    ingredients: [
      "4 large potatoes, peeled and quartered",
      "4 cloves garlic, peeled",
      "1/2 cup milk",
      "1/4 cup butter",
      "Salt and pepper to taste"
    ],
    instructions: [
      "Boil potatoes and garlic until tender, about 15 minutes.",
      "Drain and return to pot.",
      "Add milk, butter, salt, and pepper.",
      "Mash until smooth and creamy."
    ],
    image: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    storage: "Refrigerate for up to 3 days. Reheat in microwave or oven.",
    familyNotes: "Sarah says the secret is boiling the garlic with the potatoes!"
  },
  {
    id: "5",
    name: "Grandpa's Lemonade",
    category: "Beverages",
    ingredients: [
      "6 lemons",
      "1 cup sugar",
      "6 cups cold water",
      "Ice cubes",
      "Mint leaves for garnish"
    ],
    instructions: [
      "Juice the lemons to make 1 cup of lemon juice.",
      "In a large pitcher, combine lemon juice and sugar. Stir until sugar dissolves.",
      "Add cold water and stir well.",
      "Chill in the refrigerator for at least an hour.",
      "Serve over ice, garnished with mint leaves."
    ],
    image: "https://images.unsplash.com/photo-1621263764928-df1444c5e859?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    storage: "Keep refrigerated for up to 1 week.",
    familyNotes: "Grandpa always said the key is to use freshly squeezed lemons!"
  },
  {
    id: "6",
    name: "Mom's Chocolate Chip Cookies",
    category: "Desserts",
    ingredients: [
      "2 1/4 cups all-purpose flour",
      "1 teaspoon baking soda",
      "1 cup butter, softened",
      "3/4 cup granulated sugar",
      "3/4 cup packed brown sugar",
      "1 teaspoon vanilla extract",
      "2 large eggs",
      "2 cups semi-sweet chocolate chips"
    ],
    instructions: [
      "Preheat oven to 375°F (190°C).",
      "Mix flour and baking soda in a bowl.",
      "In a large bowl, beat butter, sugars, and vanilla until creamy. Add eggs, one at a time, beating well after each addition.",
      "Gradually beat in flour mixture. Stir in chocolate chips.",
      "Drop by rounded tablespoon onto ungreased baking sheets.",
      "Bake for 9 to 11 minutes or until golden brown.",
      "Cool on baking sheets for 2 minutes; remove to wire racks to cool completely."
    ],
    image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    storage: "Store in an airtight container at room temperature for up to 1 week.",
    familyNotes: "Mom always adds an extra handful of chocolate chips for good measure!"
  },
  {
    id: "7",
    name: "Aunt Lisa's Bruschetta",
    category: "Appetizers",
    ingredients: [
      "6 ripe tomatoes, diced",
      "1/2 red onion, finely chopped",
      "4 cloves garlic, minced",
      "1/4 cup fresh basil, chopped",
      "1/4 cup olive oil",
      "2 tablespoons balsamic vinegar",
      "1 baguette, sliced",
      "Salt and pepper to taste"
    ],
    instructions: [
      "Mix tomatoes, onion, garlic, and basil in a bowl.",
      "Add olive oil and balsamic vinegar. Season with salt and pepper.",
      "Let the mixture sit for at least 30 minutes to marinate.",
      "Toast baguette slices until golden brown.",
      "Top each slice with the tomato mixture and serve immediately."
    ],
    image: "https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    storage: "Best served fresh. Store tomato mixture in the refrigerator for up to 2 days.",
    familyNotes: "Aunt Lisa insists on using the ripest tomatoes for the best flavor!"
  },
  {
    id: "8",
    name: "Uncle Mike's Grilled Salmon",
    category: "Main Courses",
    ingredients: [
      "4 salmon fillets",
      "1/4 cup olive oil",
      "2 tablespoons lemon juice",
      "2 cloves garlic, minced",
      "1 teaspoon dried dill",
      "Salt and pepper to taste",
      "Lemon wedges for serving"
    ],
    instructions: [
      "Mix olive oil, lemon juice, garlic, dill, salt, and pepper in a small bowl.",
      "Place salmon in a shallow dish and pour marinade over it. Let sit for 30 minutes.",
      "Preheat grill to medium-high heat.",
      "Grill salmon for 4-5 minutes per side, or until it flakes easily with a fork.",
      "Serve with lemon wedges."
    ],
    image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    storage: "Refrigerate leftovers for up to 2 days.",
    familyNotes: "Uncle Mike always uses wild-caught salmon for the best taste and texture!"
  },
  {
    id: "9",
    name: "Grandma's Peach Cobbler",
    category: "Desserts",
    ingredients: [
      "4 cups sliced peaches",
      "1 cup sugar",
      "1 cup flour",
      "2 teaspoons baking powder",
      "1/2 teaspoon salt",
      "1/2 cup butter, melted",
      "1/2 cup milk",
      "1 teaspoon vanilla extract",
      "1/4 cup brown sugar"
    ],
    instructions: [
      "Preheat oven to 375°F (190°C).",
      "Place peaches in a 9x13 inch baking dish and sprinkle with 1/2 cup of sugar.",
      "In a bowl, mix flour, remaining sugar, baking powder, and salt.",
      "Stir in melted butter, milk, and vanilla until just combined.",
      "Pour batter over peaches and sprinkle with brown sugar.",
      "Bake for 45 minutes or until top is golden brown."
    ],
    image: "https://images.unsplash.com/photo-1562007908-17c67e878c88?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    storage: "Cover and refrigerate for up to 3 days. Best served warm.",
    familyNotes: "Grandma says using ripe, local peaches makes all the difference!"
  },
  {
    id: "10",
    name: "Cousin Tom's Roasted Vegetables",
    category: "Sides",
    ingredients: [
      "2 zucchinis, sliced",
      "2 bell peppers, chopped",
      "1 red onion, cut into wedges",
      "2 cups cherry tomatoes",
      "3 tablespoons olive oil",
      "2 cloves garlic, minced",
      "1 teaspoon dried thyme",
      "Salt and pepper to taste"
    ],
    instructions: [
      "Preheat oven to 425°F (220°C).",
      "In a large bowl, toss all vegetables with olive oil, garlic, thyme, salt, and pepper.",
      "Spread vegetables on a baking sheet in a single layer.",
      "Roast for 20-25 minutes, stirring halfway through, until vegetables are tender and lightly charred."
    ],
    image: "https://images.unsplash.com/photo-1592417817098-8fd3d9eb14a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    storage: "Store in an airtight container in the refrigerator for up to 3 days. Reheat in the oven for best results.",
    familyNotes: "Tom suggests experimenting with different herb combinations for variety!"
  },
  {
    id: "11",
    name: "Aunt Emma's Iced Tea",
    category: "Beverages",
    ingredients: [
      "4 black tea bags",
      "4 cups boiling water",
      "4 cups cold water",
      "1/2 cup sugar",
      "1/4 cup lemon juice",
      "Lemon slices and mint for garnish"
    ],
    instructions: [
      "Steep tea bags in boiling water for 5 minutes, then remove bags.",
      "While tea is still hot, stir in sugar until dissolved.",
      "Add cold water and lemon juice, stir well.",
      "Refrigerate until chilled.",
      "Serve over ice, garnished with lemon slices and mint leaves."
    ],
    image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    storage: "Keep refrigerated for up to 5 days.",
    familyNotes: "Aunt Emma's secret is to add a pinch of baking soda to reduce bitterness!"
  },
  {
    id: "12",
    name: "Uncle John's Stuffed Mushrooms",
    category: "Appetizers",
    ingredients: [
      "24 large mushrooms",
      "1/2 pound sausage",
      "1 package cream cheese, softened",
      "1/4 cup grated Parmesan cheese",
      "1/4 cup breadcrumbs",
      "2 cloves garlic, minced",
      "2 tablespoons fresh parsley, chopped",
      "Salt and pepper to taste"
    ],
    instructions: [
      "Preheat oven to 350°F (175°C).",
      "Remove stems from mushrooms and chop finely.",
      "Cook sausage in a skillet, drain fat.",
      "Mix sausage, chopped stems, cream cheese, Parmesan, breadcrumbs, garlic, and parsley.",
      "Stuff mixture into mushroom caps.",
      "Bake for 20-25 minutes until mushrooms are tender and filling is hot."
    ],
    image: "https://images.unsplash.com/photo-1607355739828-0bf365440db5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    storage: "Best served immediately. Leftovers can be refrigerated for up to 2 days.",
    familyNotes: "Uncle John likes to experiment with different types of sausage for unique flavors!"
  },
  {
    id: "13",
    name: "Grandpa's Beef Stew",
    category: "Main Courses",
    ingredients: [
      "2 pounds beef stew meat, cubed",
      "1/4 cup flour",
      "2 tablespoons olive oil",
      "4 cups beef broth",
      "4 potatoes, peeled and cubed",
      "4 carrots, sliced",
      "1 onion, chopped",
      "2 celery stalks, chopped",
      "1 can diced tomatoes",
      "2 bay leaves",
      "1 teaspoon thyme",
      "Salt and pepper to taste"
    ],
    instructions: [
      "Coat beef cubes in flour seasoned with salt and pepper.",
      "In a large pot, brown beef in olive oil over medium-high heat.",
      "Add beef broth, vegetables, tomatoes, and herbs. Bring to a boil.",
      "Reduce heat, cover, and simmer for 2-3 hours until meat is tender.",
      "Remove bay leaves before serving."
    ],
    image: "https://images.unsplash.com/photo-1583032015879-e5022cb87c3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    storage: "Refrigerate for up to 3 days. Flavors often improve overnight!",
    familyNotes: "Grandpa says the key is to be patient and let it simmer slowly!"
  },
  {
    id: "14",
    name: "Aunt Carol's Fruit Salad",
    category: "Sides",
    ingredients: [
      "2 apples, diced",
      "2 bananas, sliced",
      "1 cup grapes, halved",
      "1 cup strawberries, quartered",
      "1 can mandarin oranges, drained",
      "1/4 cup honey",
      "2 tablespoons lemon juice",
      "1/4 cup chopped nuts (optional)"
    ],
    instructions: [
      "In a large bowl, gently mix all the fruits together.",
      "In a small bowl, whisk honey and lemon juice.",
      "Pour the dressing over the fruit and toss gently to coat.",
      "Chill for at least 1 hour before serving.",
      "Sprinkle with chopped nuts before serving, if desired."
    ],
    image: "https://images.unsplash.com/photo-1490474418585-ba9bad8fd0ea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    storage: "Best served within 24 hours. Keep refrigerated.",
    familyNotes: "Aunt Carol loves to use whatever fruits are in season for the best flavor!"
  },
  {
    id: "15",
    name: "Cousin Rachel's Mojito",
    category: "Beverages",
    ingredients: [
      "10 fresh mint leaves",
      "1/2 lime, cut into 4 wedges",
      "2 tablespoons white sugar",
      "1 cup ice cubes",
      "1.5 oz white rum",
      "1/2 cup club soda"
    ],
    instructions: [
      "In a glass, muddle mint leaves with sugar and lime wedges.",
      "Fill the glass with ice cubes.",
      "Pour rum over ice.",
      "Top with club soda and stir.",
      "Garnish with a sprig of mint and a lime wedge."
    ],
    image: "https://images.unsplash.com/photo-1551538827-9c037cb4f32a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    storage: "Best served immediately.",
    familyNotes: "Rachel says the key is to not over-muddle the mint to avoid bitterness!"
  },
  {
    id: "16",
    name: "Uncle Pete's Guacamole",
    category: "Appetizers",
    ingredients: [
      "3 ripe avocados",
      "1 lime, juiced",
      "1/2 red onion, finely diced",
      "2 Roma tomatoes, diced",
      "1 jalapeño, seeded and minced",
      "1/4 cup fresh cilantro, chopped",
      "2 cloves garlic, minced",
      "Salt and pepper to taste"
    ],
    instructions: [
      "Cut avocados in half, remove pits, and scoop out the flesh into a bowl.",
      "Mash avocados with a fork, leaving some chunks.",
      "Add lime juice, onion, tomatoes, jalapeño, cilantro, and garlic. Mix gently.",
      "Season with salt and pepper to taste.",
      "Cover with plastic wrap pressed directly onto the surface and refrigerate for 1 hour before serving."
    ],
    image: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    storage: "Best served fresh. If storing, keep plastic wrap directly on the surface to prevent browning for up to 1 day.",
    familyNotes: "Uncle Pete swears by using perfectly ripe avocados - they should yield to gentle pressure but not be too soft!"
  },
  {
    id: "17",
    name: "Aunt Maria's Paella",
    category: "Main Courses",
    ingredients: [
      "2 cups short-grain rice",
      "4 cups chicken broth",
      "1/2 pound large shrimp, peeled and deveined",
      "1/2 pound chicken thighs, cut into bite-sized pieces",
      "1/2 pound Spanish chorizo, sliced",
      "1 onion, diced",
      "2 cloves garlic, minced",
      "1 red bell pepper, diced",
      "1 cup frozen peas",
      "2 tomatoes, diced",
      "1/2 teaspoon saffron threads",
      "2 tablespoons olive oil",
      "Salt and pepper to taste",
      "Lemon wedges for serving"
    ],
    instructions: [
      "In a large paella pan or skillet, heat olive oil over medium heat.",
      "Add chicken and chorizo, cook until browned.",
      "Add onion, garlic, and bell pepper. Cook until softened.",
      "Stir in rice, tomatoes, and saffron. Cook for 2 minutes.",
      "Pour in chicken broth, bring to a boil, then reduce heat and simmer for 15 minutes.",
      "Add shrimp and peas on top of the rice. Cook for an additional 5-10 minutes until rice is tender and liquid is absorbed.",
      "Remove from heat, cover with a cloth, and let stand for 5 minutes.",
      "Serve with lemon wedges."
    ],
    image: "https://images.unsplash.com/photo-1534080564583-6be75777b70a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    storage: "Refrigerate leftovers for up to 2 days. Reheat in the oven for best results.",
    familyNotes: "Aunt Maria says the key to perfect paella is not stirring after adding the broth - let it develop that crispy bottom!"
  },
  {
    id: "18",
    name: "Grandma's Lemon Meringue Pie",
    category: "Desserts",
    ingredients: [
      "1 pre-baked 9-inch pie crust",
      "1 1/2 cups sugar",
      "6 tablespoons cornstarch",
      "1/4 teaspoon salt",
      "1 1/2 cups water",
      "4 egg yolks",
      "2 tablespoons butter",
      "1/3 cup lemon juice",
      "1 tablespoon lemon zest",
      "4 egg whites",
      "1/4 teaspoon cream of tartar",
      "6 tablespoons sugar"
    ],
    instructions: [
      "In a saucepan, mix 1 1/2 cups sugar, cornstarch, and salt. Gradually stir in water.",
      "Cook over medium heat, stirring constantly, until mixture thickens and boils. Cook for 1 minute.",
      "Remove from heat. Stir a little hot mixture into egg yolks, then add back to the pan. Boil for 1 more minute, stirring constantly.",
      "Remove from heat; stir in butter, lemon juice, and zest. Pour into pie crust.",
      "For meringue, beat egg whites with cream of tartar until soft peaks form. Gradually add 6 tablespoons sugar, beating until stiff and glossy.",
      "Spread meringue over hot filling, sealing to edge of crust.",
      "Bake at 350°F (175°C) for 15 minutes or until meringue is golden brown.",
      "Cool completely before serving."
    ],
    image: "https://images.unsplash.com/photo-1519915028121-7d3463d20b13?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    storage: "Best served the same day. Can be refrigerated for up to 2 days, but meringue may weep.",
    familyNotes: "Grandma's secret is to add a pinch of salt to the meringue for extra stability!"
  },
  {
    id: "19",
    name: "Uncle Jim's Coleslaw",
    category: "Sides",
    ingredients: [
      "1 medium cabbage, finely shredded",
      "2 carrots, grated",
      "1 small onion, finely chopped",
      "1 cup mayonnaise",
      "2 tablespoons apple cider vinegar",
      "2 tablespoons sugar",
      "1 teaspoon celery seed",
      "Salt and pepper to taste"
    ],
    instructions: [
      "In a large bowl, combine shredded cabbage, grated carrots, and chopped onion.",
      "In a separate bowl, whisk together mayonnaise, vinegar, sugar, celery seed, salt, and pepper.",
      "Pour the dressing over the vegetables and toss until well coated.",
      "Cover and refrigerate for at least 2 hours before serving, preferably overnight.",
      "Stir well before serving."
    ],
    image: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    storage: "Can be refrigerated for up to 3 days. Stir before serving.",
    familyNotes: "Uncle Jim likes to add a diced apple for extra crunch and sweetness!"
  },
  {
    id: "20",
    name: "Aunt Sophia's Sangria",
    category: "Beverages",
    ingredients: [
      "1 bottle red wine",
      "1/2 cup brandy",
      "1/4 cup orange liqueur",
      "1/4 cup1/4 cup sugar",
      "1 orange, sliced",
      "1 lemon, sliced",
      "1 lime, sliced",
      "1 apple, cored and chopped",
      "1 cup club soda",
      "Ice cubes"
    ],
    instructions: [
      "In a large pitcher, combine wine, brandy, orange liqueur, and sugar. Stir until sugar dissolves.",
      "Add sliced orange, lemon, lime, and chopped apple.",
      "Refrigerate for at least 2 hours or overnight to allow flavors to meld.",
      "Just before serving, add club soda and ice.",
      "Stir gently and serve in glasses, making sure each glass gets some of the fruit."
    ],
    image: "https://images.unsplash.com/photo-1600335895229-6e75511892c8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    storage: "Best served fresh. Can be refrigerated without club soda for up to 2 days.",
    familyNotes: "Aunt Sophia says the secret is using a good quality red wine - she prefers a Spanish Rioja!"
  }
];


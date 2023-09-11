import { useEffect, useState } from 'react';

import classes from './AvailableMeals.module.css';
import MealItem from './MealItem/MealItem';
import Card from '../UI/Card';

const loadedMeals = [];

const AvailableMeals = () => {
    const [meals, setMeals] = useState([]);
    const [searchInput, setSearchInput] = useState("");         // for searchbar
    const [isLoading, setIsLoading] = useState(true);           // will always load data when component is init
    const [httpError, setHttpError] = useState();               // by default, no data

    const handleChange = (e) => {
        e.preventDefault();
        setSearchInput(e.target.value);
    };

    // initial data loading ----------------------------------
    useEffect(() => {
        const fetchMeals = async () => {
            const response = await fetch('https://react-food-app-treap-default-rtdb.firebaseio.com/meals.json');

            if (!response.ok) {
                throw new Error('Something went wrong! Please try again later.');
            }

            const responseData = await response.json();
            for (const key in responseData) {
                loadedMeals.push({
                    id: key,
                    image: responseData[key].image,
                    name: responseData[key].name,
                    description: responseData[key].description,
                    price: responseData[key].price,
                    proteins: responseData[key].proteins,
                    fats: responseData[key].fats,
                    carbs: responseData[key].carbohydrates,
                    stars: responseData[key].stars
                });
            }

            setMeals(loadedMeals);
            setIsLoading(false);
        };

        fetchMeals().catch(error => { // fetchMeals is async and throws a promise
            setIsLoading(false);
            setHttpError(error.message);
        });

    }, []); // no dependencies, don't want to add additional data
    // ---------------------------------------------------------------------

    // searchbar
    useEffect(() => {
        const filteredData = loadedMeals.filter((item) => {
            if (item.name.toLowerCase().includes(searchInput.toLowerCase())) {
                return item;
            }
            return false;
        });
        setMeals(filteredData);
    }, [searchInput, setSearchInput]);


    if (isLoading) {
        return (
            <section className={classes.MealsLoading}>
                <p>Loading...</p>
            </section>
        );
    }

    if (httpError) {
        return (
            <section className={classes.MealsError}>
                <p>{httpError}</p>
            </section>
        );
    }

    const mealsList = meals.map((meal =>
        <MealItem
            image={meal.image}
            id={meal.id}
            key={meal.id}
            name={meal.name}
            description={meal.description}
            price={meal.price}
            proteins={meal.proteins}
            fats={meal.fats}
            carbs={meal.carbs}
            stars={meal.stars}
        />
    ));

    return (
        <section className={classes.meals}>
            <input
                type="search"
                placeholder="Find what you're craving..."
                onChange={handleChange}
                value={searchInput} />
            <Card>
                <ul>
                    {mealsList}
                </ul>
            </Card>
        </section>
    );
};

export default AvailableMeals;

import React,{useEffect,useState} from 'react'
import axios from 'axios'
import BookCard from './BookCard'

export default function UseBooks() {
    const [data, setData] = useState([]);
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("");

    useEffect(() => {
        axios.get("https://in3.dev/knygos/")
            .then((res) => {
                setData(res.data);
                console.log("BOOKS:", res.data);
            })
            .catch((err) => console.error(`Error fetching books: `, err));
    }, []);

    useEffect(() => {
        axios.get("https://in3.dev/knygos/types/")
            .then((res) => {
                setCategories(res.data);
                console.log("CATEGORIES:", res.data);
            })
            .catch((err) => console.error(`Error fetching categories: `, err));
    }, []);

    const handleCategoryChange = (event) => {
        setSelectedCategory(event.target.value);
    };

    const filteredBooks = selectedCategory
        ? data.filter((book) => book.type === Number(selectedCategory))
        : data;

    return (
        <div>
            <select onChange={handleCategoryChange}>
                <option value="">Rusiuoti pagal kategorija</option>
                {categories.map((cata) => (
                    <option key={cata.id} value={cata.id}>
                        {cata.title}
                    </option>
                ))}
            </select>

            <div className="library">
                {filteredBooks.length > 0 ? (
                    filteredBooks.map((book) => (
                        <BookCard key={book.id} book={book} />
                    ))
                ) : (
                    <h3>NO BOOKS FOUND</h3>
                )}
            </div>
        </div>
    );
}
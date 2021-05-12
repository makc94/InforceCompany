import { useState } from "react";
import { Badge } from 'react-bootstrap';

export default function App() {
  const initialList = [
    {
      id: 1,
      imageUrl:
        "https://images.pexels.com/photos/341523/pexels-photo-341523.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
      name: "IPHONES",
      count: 8,
      size: {
        width: 200,
        height: 200,
      },
      weight: "2000g",
      comments: "5G speed. A14 Bionic, the fastest chip in a smartphone.",
    },

    {
      id: 2,
      imageUrl:
        "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?cs=srgb&dl=pexels-math-90946.jpg&fm=jpg",
      name: "CAMERA",
      count: 1,
      size: {
        width: 200,
        height: 200,
      },
      weight: "500g",
      comments:
        "Capture the peaks of more decisive moments with the α7 III from Sony, packing newly developed back-illuminated full-frame CMOS sensor and other advanced imaging innovations, high-speed response, ease of operation, and reliable durability that are ready for various shooting needs.",
    },
    {
      id: 3,
      imageUrl:
        "https://images.pexels.com/photos/6294458/pexels-photo-6294458.jpeg?cs=srgb&dl=pexels-klaus-nielsen-6294458.jpg&fm=jpg",
      name: "EGGS",
      count: 13,
      size: {
        width: 200,
        height: 200,
      },
      weight: "50g",
      comments:
        "Eggs are among the most nutritious foods on the planet. A whole egg contains all the nutrients required to turn a single cell into a baby chicken.",
    },
  ];

  const [list, setList] = useState(initialList);

//   const addItem = () => {
//     setList(...list, list.concat("turtle"));
//   };

  const sortByCount = () => {
    const sorted = [...list].sort((a, b) => {
      return a.count - b.count;
    });
    setList(sorted);
  };
  // СОРТУВАННЯ ПО КІЛЬКОСТІ ТОВАРУ

  const sortByName = () => {
    const sorted = [...list].sort((a, b) => (a.name > b.name ? 1 : -1));

    setList(sorted);
  };
  // СОРТУВАННЯ ПО НАЗВІ ТОВАРУ

  const hendleRemove = (id) => {
    alert("Are you sure?");
    const newList = list.filter((item) => item.id !== id);

    setList(newList);
  };
  // ВИДАЛЕННЯ ПУНКТУ

  const listProducts = list.map((item) => {
    return (
      <div className="card" key={item.id}>
        <img
          class="card-img-top"
          src={item.imageUrl}
          width={item.size.width}
          height={item.size.height}
          alt={item.name}
        ></img>
        <h2 className="card-title">{item.name}</h2>
        <span className="card-body">{item.comments}</span>
        <p>We have: {item.count}</p>
        <a href="#" class="btn btn-primary">
          More
        </a>

        <div>
          <button
            className="btn btn-danger col"
            onClick={hendleRemove.bind(null, item.id)}
          >
            Delete
          </button>
        </div>
      </div>
    );
  });

  return (
    <div className="container">
      <div className="row">{listProducts}</div>
      <div className="row row-cols-auto">
//         <button className="btn btn-success col but" onClick={addItem}>
//           New
//         </button>
        <button className="btn btn-success col but" onClick={sortByCount}>
          Sort by count:
        </button>
        <button className="btn btn-success col but" onClick={sortByName}>
          Sort by name:
        </button>
        
      </div>
    </div>
  );
}

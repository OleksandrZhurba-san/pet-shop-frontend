import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategories } from "../../redux/slices/categoriesSlice";

export default function Categories() {
  const dispatch = useDispatch();
  const {
    data: categories,
    isLoading,
    isError,
    message,
  } = useSelector((state) => state.categories);

  useEffect(() => {
    dispatch(getAllCategories());
  }, [dispatch]);

  if (isLoading) {
    return <>Loading..</>;
  }
  if (isError) {
    return <>Error: {message}</>;
  }

  return (
    <>
      {categories.map((category) => {
        return (
          <div key={category.id}>
            <p>{category.id}</p>
            <p>{category.title}</p>
            <img
              src={`http://localhost:3333${category.image}`}
              alt={category.title}
            ></img>
          </div>
        );
      })}
    </>
  );
}

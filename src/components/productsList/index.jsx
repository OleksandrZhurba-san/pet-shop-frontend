import { useSelector } from "react-redux";
import ProductCard from "../productCard";
import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import ProductFilters from "../filter";

export default function ProductsList({ id, page }) {
  const { data, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.products
  );
  const [title, setTitle] = useState("");
  const [filterData, setFilterData] = useState({
    priceFrom: null,
    priceTo: null,
    isDiscounted: false,
    sortOrder: "default",
  });
  useEffect(() => {
    if (page === "sales") {
      setTitle("Discounted items");
    } else if (page === "home") {
      setTitle("Sales");
    } else if (page === "products") {
      setTitle("All products");
    }
  }, [page]);

  function handleFilterChange(filters) {
    setFilterData(filters);
  }

  if (isLoading) return <Typography>Loading...</Typography>;
  if (isError) return <Typography>Error: {message}</Typography>;
  if (isSuccess) {
    let products = [...data];
    if (page === "sales") {
      products = data.filter((product) => product.discont_price);
    } else if (page === "categories") {
      products = data.filter((product) => product.categoryId === +id);
    } else if (page === "home") {
      products = data.filter((product) => product.discont_price).slice(0, 4);
    }

    //TODO: filter sort logic
    // Apply filters from filterData
    if (filterData.priceFrom !== null && filterData.priceFrom !== "") {
      products = products.filter((product) => {
        const applicablePrice = product.discont_price
          ? product.discont_price
          : product.price;
        return applicablePrice >= filterData.priceFrom;
      });
    }
    if (filterData.priceTo !== null && filterData.priceTo !== "") {
      products = products.filter((product) => {
        const applicablePrice = product.discont_price
          ? product.discont_price
          : product.price;
        return applicablePrice <= filterData.priceTo;
      });
    }
    if (filterData.isDiscounted) {
      products = products.filter((product) => product.discont_price);
    }

    // Sorting logic
    if (filterData.sortOrder === "az") {
      products.sort((a, b) => a.title.localeCompare(b.title));
    } else if (filterData.sortOrder === "za") {
      products.sort((a, b) => b.title.localeCompare(a.title));
    } else if (filterData.sortOrder === "priceAsc") {
      products.sort((a, b) => {
        const priceA = a.discont_price ?? a.price;
        const priceB = b.discont_price ?? b.price;
        return priceA - priceB;
      });
    } else if (filterData.sortOrder === "priceDesc") {
      products.sort((a, b) => {
        const priceA = a.discont_price ?? a.price;
        const priceB = b.discont_price ?? b.price;
        return priceB - priceA;
      });
    }

    return (
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",

          alignItems: "start",
          marginBottom: "20px",
        }}
      >
        <Typography
          variant="h4"
          component="h2"
          sx={{ fontSize: "64px", fontWeight: "bold" }}
        >
          {title}
        </Typography>
        {page !== "home" && (
          <ProductFilters onFiltersChange={handleFilterChange} />
        )}
        <Box sx={{ padding: "20px" }}>
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: "32px" }}>
            {products.map((product) => {
              return (
                <ProductCard key={product.id} product={product}></ProductCard>
              );
            })}
          </Box>
        </Box>
      </Box>
    );
  }
}

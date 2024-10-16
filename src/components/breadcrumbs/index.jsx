import { Breadcrumbs, Stack } from "@mui/material";
import Separator from "../separator";

export default function BreadCrumbs({ breadcrumbs }) {
  const navLinkStyle = {
    padding: "8px 16px",
    borderRadius: "8px",
    border: "1px solid #DDDDDD",
    textDecoration: "none",
    color: "#8B8B8B",
    fontSize: "16px",
    fontWeight: 500,
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "#F1F3F4",
    },
  };
  const navLinkStyleActive = {
    padding: "8px 16px",
    borderRadius: "8px",
    border: "1px solid #DDDDDD",
    textDecoration: "none",
    color: "black",
    fontSize: "16px",
    fontWeight: 500,
  };
  const styledBreadcrumbs = breadcrumbs.map((item, idx) => {
    return {
      ...item,
      props: {
        ...item.props,
        sx: idx < breadcrumbs.length - 1 ? navLinkStyle : navLinkStyleActive,
      },
    };
  });

  return (
    <Breadcrumbs separator={<Separator />}>{styledBreadcrumbs}</Breadcrumbs>
  );
}

/* eslint-disable react/prop-types */
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import i18n from "./LangConfig";

function handleClick(event) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}

export default function ActiveLastBreadcrumb({ path }) {
  return (
    <div role="presentation" onClick={handleClick}>
      <Breadcrumbs aria-label="breadcrumb">
        {path.split("/").map(
          (p, index, array) =>
            index !== array.length - 1 && ( // Exclude the last path
              <Link
                key={index}
                underline="hover"
                color="inherit"
                href={p === i18n.t("home") ? "/" : `/${p.toLowerCase()}`}
              >
                <div className="mx-3">{p}</div>
              </Link>
            )
        )}
        <Link
          underline="hover"
          color="text.primary"
          href="/"
          aria-current="page"
        >
          <div className="mx-3">{path.split("/").pop()}</div>
        </Link>
      </Breadcrumbs>
    </div>
  );
}

/*
- Products.jsx fetches all Contentful entries of the "product" content type
- Each entry has a unique ID 
- Each entry has an asset (image) that has its own unique ID
- .map function generates ProductCard components for each entry
- Each ProductCard is passed entryID which will be used in [product].jsx to fetch that page
- Each ProductCard is passed assetID which will be used by ImageAsset.jsx to generate an image
*/

"use client";

// React
import { useContext, useState } from "react";
import { PageContext } from "../layout.js";
import { usePageContent } from "../hooks/usePageContent.jsx";

// Project
import { pageStyle } from "../styles/globalStyles";
import ProductCard from "../components/ProductCard";
import { ContentTypeEntriesURL } from "../utils/buildURL";
import filterProducts from "../utils/filterProducts.jsx";

// AntD
import { Empty, Skeleton, Typography, Row, Col } from "antd";

function Products() {
  let { page } = useContext(PageContext);
  console.log(`${page} rendered`);

  // Fetch all products
  const { data, isLoading } = usePageContent(ContentTypeEntriesURL("product"));

  if (isLoading) return <Skeleton active />;
  if (!data) return <Empty />;

  return (
    <div style={pageStyle}>
      <Row gutter={[32, 64]}>
        {filterProducts(data, "Microscope").map((product) => (
          <Col
            key={product.sys.id}
            span={{
              xs: 24,
              sm: 12,
              md: 8,
              lg: 4,
            }}
          >
            <ProductCard
              entryID={product.sys.id}
              assetID={product.fields.image.sys.id}
              name={product.fields.name}
              fullName={product.fields.fullName}
              stockStatus={product.fields.inStock}
              cardWidth={300}
              cardHeight={"auto"}
            />
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Products;

"use client";

// React
import { useDataRetriever } from "../hooks/useDataRetriever.jsx";
import { useContext } from "react";

// Project
import { pageStyle, textStyle } from "../styles/globalStyles.js";
import { ABOUT_ID, AllEnatriesURL } from "../utils/buildURL";
import { PageCategoryContext } from "../layout.js";

// AntD
import { Empty, Skeleton, Typography } from "antd";

const { Title, Paragraph } = Typography;

export default function Test() {
  let { page } = useContext(PageCategoryContext);
  console.log(`${page} rendered`);

  const { data, isLoading } = useDataRetriever(AllEnatriesURL());

  if (isLoading) return <Skeleton active />;
  if (!data) return <Empty />;

  console.log("Fetched data: ", data);

  return (
    <div style={pageStyle}>
      <Typography>
        {/* <Title>{data.fields.title}</Title>
        <Paragraph style={textStyle}>{data.fields.body}</Paragraph> */}
      </Typography>
    </div>
  );
}

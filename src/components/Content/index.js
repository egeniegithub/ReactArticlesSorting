// global
import React from "react";

// material-ui
import { Grid } from "@material-ui/core";

//mui-rte
import MUIRichTextEditor from "mui-rte";
import { convertToRaw } from "draft-js";

const Content = ({ mode, content, updateContent }) => {
  const handleContentChange = (event) => {
    const content = JSON.stringify(convertToRaw(event.getCurrentContent()));
    if (mode !== "display") {
      updateContent(content);
    }
  };

  return (
    <div>
      <Grid container>
        <MUIRichTextEditor
          // label="Share your thoughts here..."
          onChange={handleContentChange}
          readOnly={true}
          toolbar={false}
          value={content}
          controls={[
            "title",
            "bold",
            "italic",
            "underline",
            "numberList",
            "bulletList",
            "strikethrough",
          ]}
        />
      </Grid>
    </div>
  );
};

export default Content;

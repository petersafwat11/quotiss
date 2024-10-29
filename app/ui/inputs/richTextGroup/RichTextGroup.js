import React, { useState } from "react";
import ReactQuill, { Quill } from "react-quill";
import "react-quill/dist/quill.snow.css"; // Quill editor styling

// Custom image handler to allow image uploads
const handleImageUpload = () => {
  const input = document?.createElement("input");
  input.setAttribute("type", "file");
  input.setAttribute("accept", "image/*");
  input.click();

  input.onchange = async () => {
    const file = input.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      const range = this.quill.getSelection();
      this.quill.insertEmbed(range.index, "image", reader.result);
    };
    reader.readAsDataURL(file);
  };
};

// Quill editor modules (toolbar configuration)
const modules = {
  toolbar: {
    container: [
      // Font formatting
      [{ font: [] }, { size: [] }],
      // Text styles: bold, italic, underline, strikethrough
      ["bold", "italic", "underline", "strike"],
      // Color pickers
      [{ color: [] }, { background: [] }],
      // Text alignment options
      [{ align: [] }],
      // Ordered/Unordered lists
      [{ list: "ordered" }, { list: "bullet" }],
      // Insert options: links and images
      ["link", "image"],
      // Clean formatting
      ["clean"],
    ],
    handlers: {
      image: handleImageUpload, // Custom image handler
    },
  },
};

// Quill editor formats supported
const formats = [
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "strike",
  "color",
  "background",
  "align",
  "list",
  "bullet",
  "link",
  "image",
];

const RichText = ({ data, setData, dataKey, dataType, type }) => {
  // const [content, setContent] = useState("");

  // Handle editor changes
  const handleChange = (value) => {
    dataType === "object"
      ? setData({ type: type, value: { ...data, [dataKey]: value } })
      : setData({ ...data, [dataKey]: value });
    // console.log(value);
  };

  return (
    <div>
      <ReactQuill
        value={data[dataKey]}
        onChange={handleChange}
        modules={modules}
        formats={formats}
        theme="snow" // Use the "snow" theme, or switch to "bubble"
        placeholder="Write something here..."
      />
    </div>
  );
};

export default RichText;

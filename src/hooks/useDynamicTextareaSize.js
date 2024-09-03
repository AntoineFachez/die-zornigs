import { useState, useRef, useEffect, useCallback } from "react";

function useDynamicTextareaSize(defaultRows = 1, defaultCols = 1) {
  const [rows, setRows] = useState(defaultRows);
  const [cols, setCols] = useState(defaultCols);
  const textareaRef = useRef(null);

  const resizeTextarea = useCallback(() => {
    const textarea = textareaRef.current;
    if (!textarea) return;

    const parent = textarea.parentElement;
    const lineHeight = parseFloat(getComputedStyle(textarea).lineHeight);
    const charWidth =
      parseFloat(getComputedStyle(textarea).width) / textarea.cols;

    const parentWidth = parent.clientWidth;
    const parentHeight = parent.clientHeight;

    const newRows = Math.floor(parentHeight / lineHeight);
    const newCols = Math.floor(parentWidth / charWidth);

    if (newRows !== rows) setRows(newRows);
    if (newCols !== cols) setCols(newCols);
  }, [rows, cols, textareaRef]); // Add dependencies

  useEffect(() => {
    resizeTextarea();
    window.addEventListener("resize", resizeTextarea);

    return () => {
      window.removeEventListener("resize", resizeTextarea);
    };
  }, [resizeTextarea]); // Use the useCallback-wrapped function as a dependency

  return { textareaRef, rows, cols };
}

export default useDynamicTextareaSize;

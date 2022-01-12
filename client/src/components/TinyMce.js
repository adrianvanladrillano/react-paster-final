import { Editor } from '@tinymce/tinymce-react';
import React, { useEffect, useRef, useState } from "react";
import io from "socket.io-client";

let socket;

export default function TinyMce({ content, handleChange }) {
    const editorRef = useRef(null);

    const [wew, setwew] = useState(content)

    useEffect(() => {
        setwew(content)
    }, [content]);

    const handleContent = (e) => {
        e.preventDefault();
        // let content = e.target.value
        if (editorRef.current) {
            console.log(editorRef.current.getContent());
        }
        handleChange(
            "EDITOR", editorRef.current.getContent()
        )
    }
    return (
        <>
            <Editor
                onBlur={(evt) => handleContent(evt)}
                onInit={(evt, editor) => editorRef.current = editor}
                initialValue={wew}
                init={{
                    height: "100%",
                    menubar: false,
                    plugins: [
                        'advlist autolink lists link image charmap print preview anchor',
                        'searchreplace visualblocks code fullscreen',
                        'insertdatetime media table paste code help wordcount'
                    ],
                    toolbar: 'undo redo | formatselect | ' +
                        'bold italic backcolor | alignleft aligncenter ' +
                        'alignright alignjustify | bullist numlist outdent indent | ' +
                        'removeformat | help',
                    content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                }}
            />
        </>
    )
}

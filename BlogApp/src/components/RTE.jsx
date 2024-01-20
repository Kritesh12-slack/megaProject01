import { Controller } from "react-hook-form"
import { Editor} from "@tinymce/tinymce-react"
export default function RTE({name,control,label,defaultValue = ""}){
    return(
        <div className="w-full">
        { label && <label className="text-sm text-gray-600">{label}</label>}
        <Controller
            name={name || "content"}
            control={control}
            render = {({field: {onChange}})=>(
                <Editor
                    initialValue={defaultValue}
                    init={{
                        initialValue: defaultValue,
                        height: 500,
                        menubar: true,
                        plugins: [
                            "image",
                            "advlist",
                            "autolink",
                            "lists",
                            "link",
                            "image",
                            "charmap",
                            "preview",
                            "anchor",
                            "searchreplace",
                            "visualblocks",
                            "code",
                            "help",
                            "wordcount",
                            "anchor",
                         ],
                        toolbar:
                        'undo redo | formatselect | bold italic underline | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat | help',
                        content_style: "body { font-family:Helvoetica,Arial,sans-serif; font-size:14px }" 
                    }}
                    onEditorChange={onChange}
                />
            )}
        />
        </div>
    )
}
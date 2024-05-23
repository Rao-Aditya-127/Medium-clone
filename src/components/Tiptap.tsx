// src/Tiptap.jsx
import { useEditor, EditorContent} from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import '../style.css'


// define your extension array
const extensions = [
  StarterKit,
]



const Tiptap = ({onEditorContentSave , data = "<p>Enter your text here</p>"} : any) => {

  const content = data

  const editor = useEditor({
    extensions,
    content,
  })

  if (!editor) {
    return null
  }


  const handelEditorContent = () => {
    onEditorContentSave(editor.getHTML())
  }

  return (
    <div className='my-4'>

      <div className='w-full flex flex-wrap gap-2 bg-blue-300 text-white rounded'>

        <button
            onClick={() => editor.chain().focus().toggleBold().run()}
            disabled={
            !editor.can()
                .chain()
                .focus()
                .toggleBold()
                .run()
            }
            className={`${
                editor.isActive('bold') ? 'font-bold border-zinc-600' : 'font-normal border-zinc-400'
            }  p-1 rounded border focus:outline-none hover:border-gray-500`}
        >
        Bold
        </button>

        <button
        onClick={() => editor.chain().focus().toggleItalic().run()}
        disabled={
          !editor.can()
            .chain()
            .focus()
            .toggleItalic()
            .run()
        }
        className={`${
            editor.isActive('italic') ? 'border-zinc-600' : 'border-zinc-400'
        }  p-1 rounded border focus:outline-none hover:border-gray-500`}
      >
        <i>italic</i>
      </button>

      <button
        onClick={() => editor.chain().focus().toggleStrike().run()}
        disabled={
          !editor.can()
            .chain()
            .focus()
            .toggleStrike()
            .run()
        }
        className={`${
            editor.isActive('strike') ? 'border-zinc-600' : 'border-zinc-400'
        }  p-1 rounded border focus:outline-none hover:border-gray-500`}
      >
        <s>strike</s>
      </button>
    
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
        className={`${
            editor.isActive('heading', { level: 1 }) ? 'border-zinc-600' : 'border-zinc-400'
        }  p-1 rounded border focus:outline-none hover:border-gray-500`}
      >
        h1
      </button>  

      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        className={`${
            editor.isActive('heading', { level: 2 }) ? 'border-zinc-600' : 'border-zinc-400'
        }  p-1 rounded border focus:outline-none hover:border-gray-500`}
      >
        h2
      </button> 

      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
        className={`${
            editor.isActive('heading', { level: 3 }) ? 'border-zinc-600' : 'border-zinc-400'
        }  p-1 rounded border focus:outline-none hover:border-gray-500`}
      >
        h3
      </button> 

      <button
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        className={`${
            editor.isActive('bulletList') ? 'border-zinc-600' : 'border-zinc-400'
        }  p-1 rounded border focus:outline-none hover:border-gray-500`}
      >
        bullet list
      </button>
      

      <button
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        className={`${
            editor.isActive('orderedlist') ? 'border-zinc-600' : 'border-zinc-400'
        }  p-1 rounded border focus:outline-none hover:border-gray-500`}
      >
        ordered list
      </button>

      <button
        onClick={() => editor.chain().focus().toggleCodeBlock().run()}
        className={`${
            editor.isActive('codeblock') ? 'border-zinc-600' : 'border-zinc-400'
        }  p-1 rounded border focus:outline-none hover:border-gray-500`}
      >
        code block
      </button>


      <button
        onClick={() => editor.chain().focus().toggleBlockquote().run()}
        className={`${
            editor.isActive('blockquote') ? 'border-zinc-600' : 'border-zinc-400'
        }  p-1 rounded border focus:outline-none hover:border-gray-500`}
      >
        blockquote
      </button>


      <button 
        onClick={() => editor.chain().focus().setHorizontalRule().run()}
        className={`p-1 rounded border focus:outline-none hover:border-gray-500`}
       >
        horizontal rule
      </button>

      <button
        onClick={() => editor.chain().focus().undo().run()}
        disabled={
          !editor.can()
            .chain()
            .focus()
            .undo()
            .run()
        }
        className={`p-1 rounded border focus:outline-none hover:border-gray-500`}
      >
        undo
      </button>

      <button
        onClick={() => editor.chain().focus().redo().run()}
        disabled={
          !editor.can()
            .chain()
            .focus()
            .redo()
            .run()
        }
        className={`p-1 rounded border focus:outline-none hover:border-gray-500`}
      >
        redo
      </button>

    </div>

        <div className='style'>
            <EditorContent editor={editor} className='border-2 border-gray-500 min-h-96 p-4' /> 
        </div>


        <div className="flex justify-center my-8">
          <button 
          className="border-2 rounded-md bg-green-500 text-white p-2 "
          onClick={handelEditorContent}
          >
            Publish
          </button>
        </div>

    </div>
  )
}

export default Tiptap
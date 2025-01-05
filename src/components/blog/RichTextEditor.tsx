import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { cn } from "@/lib/utils";

interface RichTextEditorProps {
  value: string;
  onChange: (value: string) => void;
  className?: string;
}

const RichTextEditor = ({ value, onChange, className }: RichTextEditorProps) => {
  const modules = {
    toolbar: [
      [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
      ['bold', 'italic', 'underline', 'strike'],
      [{ 'color': [
        '#000000', '#FFFFFF', '#9b87f5', '#7E69AB', '#6E59A5',
        '#1A1F2C', '#D6BCFA', '#8B5CF6', '#D946EF', '#F97316',
        '#0EA5E9', '#1EAEDB', '#ea384c'
      ] }],
      [{ 'background': [
        false, '#F2FCE2', '#FEF7CD', '#FEC6A1', '#E5DEFF',
        '#FFDEE2', '#FDE1D3', '#D3E4FD', '#F1F0FB', '#F1F1F1'
      ] }],
      [{ 'align': [] }],
      [{ 'list': 'ordered'}, { 'list': 'bullet' }],
      ['link', 'image'],
      ['clean']
    ]
  };

  const formats = [
    'header',
    'bold', 'italic', 'underline', 'strike',
    'color', 'background',
    'align',
    'list', 'bullet',
    'link', 'image'
  ];

  return (
    <ReactQuill
      theme="snow"
      value={value}
      onChange={onChange}
      modules={modules}
      formats={formats}
      className={cn(
        "bg-white rounded-lg text-black min-h-[200px]",
        "prose max-w-none",
        className
      )}
    />
  );
};

export default RichTextEditor;
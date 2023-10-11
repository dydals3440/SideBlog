'use client';

import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import {
  materialDark,
  materialLight,
} from 'react-syntax-highlighter/dist/esm/styles/prism';
import Image from 'next/image';

const MarkdownViewer = ({
  content,
}: {
  content: string;
  className: string;
}) => {
  //
  return (
    <ReactMarkdown
      className='prose max-w-none p-5 rounded-lg  dark:bg-gray-800 dark:text-gray-300'
      remarkPlugins={[remarkGfm]}
      components={{
        code(props) {
          const { children, className, node, style, ...rest } = props;
          const match = /language-(\w+)/.exec(className || '');
          return match ? (
            <SyntaxHighlighter
              {...rest}
              style={materialDark}
              language={match[1]}
              PreTag='div'
              ref={null}
            >
              {String(children).replace(/\n$/, '')}
            </SyntaxHighlighter>
          ) : (
            <code
              {...rest}
              style={{
                ...style,
                backgroundColor: 'white',
                color: 'red',
                borderRadius: '12px',
                padding: '2px',
              }}
              className={className}
            >
              {children}
            </code>
          );
        },
        img: (image) => (
          <Image
            className='w-full max-h-60 object-cover'
            src={image.src || ''}
            alt={image.alt || ''}
            width={500}
            height={350}
          />
        ),
      }}
    >
      {content}
    </ReactMarkdown>
  );
};
export default MarkdownViewer;

import { FC } from 'react';
import {MDEditorProps} from '@uiw/react-md-editor';
import MarkdownEditor from '@uiw/react-md-editor';
import styles from './AppMarkdownError.module.scss';
import clsx from 'clsx';

interface AppMarkdownErrorProps extends MDEditorProps{
  error?: boolean;
  helperText?: string;
}
const AppMarkdownError: FC<AppMarkdownErrorProps> = ({  error, helperText, ...markdownprops}) => {
  return (
    <div className={styles.container}>
      <MarkdownEditor className={clsx(error && styles.error)} {...markdownprops} />
      {helperText && <div className={styles.helperText}>{helperText}</div>}
    </div>
  )
};

export default AppMarkdownError;

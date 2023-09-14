import React, { memo, useMemo } from 'react';
import cn from 'clsx';
import { splitText } from './helpers';
import s from './TextSelection.sass';

export type Props = React.HTMLAttributes<HTMLDivElement> & {
  text: string;
  selection?: string;
};

export const TextSelection = memo<Props>(({ className, text, selection, ...props }) => {
  const splitTextResult = useMemo(() => splitText(text, selection), [selection, text]);
  return (
    <div {...props} className={cn(s.root, className)}>
      {splitTextResult.map((item, i) => (
        <span key={i} className={cn(s.item, item.selected && s.selected)}>
          {item.text}
        </span>
      ))}
    </div>
  );
});

TextSelection.displayName = 'TextSelection';

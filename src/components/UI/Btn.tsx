import classnames from 'classnames';
import styles from '@/components/UI/Btn.module.scss';

export const Btn = (props: { children: string}) => {
  return (
    <button className={classnames(styles.base, styles.gb)}>
      {props.children}
    </button>
  );
}
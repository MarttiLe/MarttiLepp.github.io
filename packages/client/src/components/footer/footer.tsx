import { apiHooks } from '../../api';
import styles from './footer.module.scss';
import cx from 'classnames';

export interface FooterProps {
  className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Footer = ({ className }: FooterProps) => {
  const { data } = apiHooks.useAbout();

  return (
    <div id="footer" className={cx(styles.root, className)}>
      <div className={styles.contact}>
        <a href={`mailto:${data?.data.attributes.email}`} download={undefined}>
          {data?.data.attributes.email}
        </a>
        <br />
        <span>{data?.data.attributes.phone}</span>
      </div>
      <div className={styles.social}>
        <a href={data?.data.attributes.instagram || '/'} target="_blank" rel="noreferrer">
          Instagram
        </a>
        <a href={data?.data.attributes.facebook || '/'} target="_blank" rel="noreferrer">
          Facebook
        </a>
      </div>
      <span className={styles.copyright}>© 2024 Martti Leppmets</span>
    </div>
  );
};

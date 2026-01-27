"use client";
import s from './styles.module.scss';

const WIP: React.FC = () => {
    return (
        <div className={s.WIPNotice}>
            <h1>Sorry, this page is under construction.</h1>
        </div>
    );
};

export default WIP;
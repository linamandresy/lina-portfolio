import style from '@/style/top-navigation.module.css'

export default function TopNavigation() {
    return (
        <nav className={style.topNavigation}>
            <a className={style.link} href="#">Home</a>
            <a className={style.link} href="#">Contact</a>
            <a className={style.link} href="#">About</a>
        </nav>
    );
}
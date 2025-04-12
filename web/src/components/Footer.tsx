import style from '@/style/footer.module.css';

export default function Footer(){
    return (
        <footer className={style.footer}>
            <div className="container mx-auto text-center">
                <p className="text-sm">
                    &copy; {new Date().getFullYear()} Lina Mandresy Rabenandrasana. All rights reserved.
                </p>
                <p className="text-sm">
                    Made with ❤️ by Lina Mandresy Rabenandrasana
                </p>
            </div>
        </footer>
    )
}
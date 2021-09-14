import style from './style.module.css';


const Layout = ({ title, urlBg, colorBg, children }) => {

    const background = {
        backgroundImage: `url(${urlBg})`,
        backgroundColor: `${colorBg}`,
    }

    return ( <section className={style.root} style={ background }>
                <div lassNamess={style.wrapper}>
                    <article>
                        <div className={style.title}>
                            {
                             title && (<h3>{title}</h3>)
                            }
                            <span className={style.separator}></span>
                        </div>
                        <div className={`${style.desc} ${style.full}`}>
                            {children}
                        </div> 
                    </article>
                </div>
            </section> )

};

export default Layout;
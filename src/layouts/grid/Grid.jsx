import style from './Grid.module.css'
export const Container = ({children, className}) => (<div className={[style.container, style[className]]}>
    {children}
</div>)

export const Row = ({children}) => (<div className={style.row}>{children}</div>)
import style from './Grid.module.css'
export const Container = ({children}) => (<div className={style.container}>
    {children}
</div>)
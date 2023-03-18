


interface FooterIconProps {
    icon: any
    css?: string
}

const FooterIcon:React.FC<FooterIconProps> = ({icon, css}) => {
    return (
        <>
        <div className={`Header-icon-btn text-primary-font text-xl font-bold bg-second-bg hover:bg-third-bg p-2.5 rounded-full cursor-pointer ${css}`}>
            {icon}
        </div>
        </>
    )
}

export default FooterIcon
import Link from "next/link";

export default function Button({link, children, style, classe}){
    return (
        <Link href={link}>
            <a style={style} className={`btn ${classe} btn-lg position-absolute`}>{children}</a>
        </Link>
    )
}
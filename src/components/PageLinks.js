import { pageLinks } from "../data";

function PageLinks({parentClass, itemClass}) {
    return (
        <ul className={parentClass} id="nav-links">
            {pageLinks.map((link) => {
                const { id, href, text } = link;
                return (
                    <li key={id}>
                        <a rel='noreferrer' href={href} className={itemClass}>{text}</a>
                    </li>
                )
            })}

        </ul>
    )
}
export default PageLinks
export default function Navbar() {
    return (
        <nav className="nav">
            <a href="/" className="site title">Site Name</a>
            <ul>
                <li>
                    <a href="/pages/A.js">A</a>
                </li>
                <li>
                    <a href="/pages/B.js">B</a>
                </li>
            </ul>
        </nav>
    )
}
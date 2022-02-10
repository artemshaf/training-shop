const Header = ({ title }) => {
    return (
        <div className="Category__header">
            <div className="container">
                <div>
                    <ul>
                        <li>HOME</li>
                        <li>{title}</li>
                    </ul>
                    <div>
                        <p>Share</p>
                    </div>
                </div>
                <div>{title}</div>
            </div>
        </div>
    );
};

export default Header;

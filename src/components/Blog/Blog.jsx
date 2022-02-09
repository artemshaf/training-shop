import "./blog.scss";

const Blog = () => {
    return (
        <div className="Blog-container container">
            <section className="Blog">
                <div>
                    <span>LATEST FROM BLOG</span>
                    <span>SEE ALL</span>
                </div>
                <ul>
                    <li>
                        <img src={`${process.env.PUBLIC_URL}/imgs/blog/1.png`} alt="" />
                        <div>
                            <p>The Easiest Way to Break</p>
                            <p>But I must explain to you how all this mistaken idea of denouncing pleas and praising pain was bor</p>
                        </div>
                    </li>
                    <li>
                        <img src={`${process.env.PUBLIC_URL}/imgs/blog/2.png`} alt="" />
                        <div>
                            <p>Wedding Season</p>
                            <p>But I must explain to you how all this mistaken idea of denouncing pleas and praising pain was bor</p>
                        </div>
                    </li>
                    <li>
                        <img src={`${process.env.PUBLIC_URL}/imgs/blog/3.png`} alt="" />
                        <div>
                            <p>Recent Favorites On Repeat</p>
                            <p>But I must explain to you how all this mistaken idea of denouncing pleas and praising pain was bor</p>
                        </div>
                    </li>
                </ul>
            </section>
        </div>
    );
};

export default Blog;

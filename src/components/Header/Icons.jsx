const Icons = () => {
    return (
        <ul>
            <li><img src={process.env.PUBLIC_URL+ '/imgs/icons/search.svg'} alt="" /></li>
            <li><img src={process.env.PUBLIC_URL+ '/imgs/icons/globe.svg'} alt="" /></li>
            <li><img src={process.env.PUBLIC_URL+ '/imgs/icons/user.svg'} alt="" /></li>
            <li><img src={process.env.PUBLIC_URL+ '/imgs/icons/shopping-bag.svg'} alt="" /></li>
        </ul>
    );
};

export default Icons;

function Menu({ menu }) {
    
    if (!menu) {
        return <div>No menu data available</div>;
    }

    const { menuName, menuPrice, categoryName, isOrderable, detail } = menu;

    return (
        <div>
            <h2>Menu: {menuName}</h2>
            {detail && (
                <>
                    <img src={detail.image} style={{ maxWidth: 500 }} />
                    <h3>What it is: {detail.description}</h3>
                </>
            )}
            <h3>Price: {menuPrice}</h3>
            <h3>Category: {categoryName}</h3>
            <h3>Available: {isOrderable ? "Yes" : "No"}</h3>
        </div>
    );
}

export default Menu;
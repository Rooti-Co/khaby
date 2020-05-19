import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
} from "react-router-dom";
import Header from "./components/Header";
import {
    urlHomePage,
    urlMainMenu,
    urlCategoriesMenu,
    urlFavoritePage,
    urlSearchPage,
} from "./components/configuration";

// Component for display catalog in different categories
const CatalogNavigator = () => {
    let { category } = useParams();
    return (
        <div className="page_decorator">
            Insert here Catalog Page Component. Render Category {category}
        </div>
    );
};

// Component for display product by ID
const ProductNavigator = () => {
    let { product_id } = useParams();
    return (
        <div className="page_decorator">
            Insert here Product Page Component. Render ID {product_id}
        </div>
    );
};

function App() {
    return (
        <Router>
            <div>
                <Link className="link_decorator" to={urlHomePage}>
                    Головна
                </Link>
                {urlMainMenu.map((item, index) => (
                    <Link className="link_decorator" to={item.url} key={index}>
                        {item.title}
                    </Link>
                ))}
                {urlCategoriesMenu.map((item, index) => (
                    <Link className="link_decorator" to={item.url} key={index}>
                        {item.title}
                    </Link>
                ))}
                <Link className="link_decorator" to={urlFavoritePage}>
                    Вибране
                </Link>
                <Link className="link_decorator" to={urlSearchPage}>
                    Пошук
                </Link>
            </div>
            <Header />

            <Switch>
                <Route
                    path="/catalog/:category"
                    children={<CatalogNavigator />}
                />
                <Route path="/catalog" children={<CatalogNavigator />} />
                <Route
                    path="/products/:product_id"
                    children={<ProductNavigator />}
                />
                <Route path="/favorite">
                    <div className="page_decorator">
                        Insert here Favorite Page Component
                    </div>
                </Route>
                <Route path="/about">
                    <div className="page_decorator">
                        Insert here About Page Component
                    </div>
                </Route>
                <Route path="/lookbook">
                    <div className="page_decorator">
                        Insert here Lookbook Page Component
                    </div>
                </Route>
                <Route path="/contact">
                    <div className="page_decorator">
                        Insert here Contact Page Component
                    </div>
                </Route>
                <Route path="/order_and_delivery">
                    <div className="page_decorator">
                        Insert here Order&Delivery Page Component
                    </div>
                </Route>
                <Route path="/">
                    <div className="page_decorator">
                        Insert here Main Page Component
                    </div>
                </Route>
            </Switch>
        </Router>
    );
}

export default App;

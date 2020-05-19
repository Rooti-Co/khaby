import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
} from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import PageAboutUs from "./components/pageAboutUs";
import PageLookbookSlider from "./components/pageLookbook";
import {
    getHomePageUrl,
    getMainMenuData,
    getCategoriesMenuData,
    getFavoritePageUrl,
    getSearchPageUrl,
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
            {/* This is demo navigation Buttons. Remove later */}
            <div>
                <Link className="link_decorator" to={getHomePageUrl()}>
                    Головна
                </Link>
                {getMainMenuData().map((item, index) => (
                    <Link className="link_decorator" to={item.url} key={index}>
                        {item.title}
                    </Link>
                ))}
                {getCategoriesMenuData().map((item, index) => (
                    <Link className="link_decorator" to={item.url} key={index}>
                        {item.title}
                    </Link>
                ))}
                <Link className="link_decorator" to={getFavoritePageUrl()}>
                    Вибране
                </Link>
                <Link className="link_decorator" to={getSearchPageUrl()}>
                    Пошук
                </Link>
            </div>

            {/* This is Main Application */}
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
                    <PageAboutUs />
                </Route>
                <Route path="/lookbook">
                    <PageLookbookSlider />
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

            <Footer />
        </Router>
    );
}
export default App;

import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
} from "react-router-dom";
import Header from "./components/Header";

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
            <Header />
            <div>Use React Router for page navigation</div>
            <div>
                <Link className="link_decorator" to="/">
                    Головна сторінка
                </Link>
                <Link className="link_decorator" to="/catalog">
                    Каталог
                </Link>
                <Link className="link_decorator" to="/catalog/category1">
                    Каталог - Категорія 1
                </Link>
                <Link className="link_decorator" to="/catalog/category2">
                    Каталог - Категорія 2
                </Link>
                <Link className="link_decorator" to="/products/product_id_1">
                    Опис товару №1
                </Link>
                <Link className="link_decorator" to="/products/product_id_2">
                    Опис товару №2
                </Link>
                <Link className="link_decorator" to="/about">
                    Про нас
                </Link>
                <Link className="link_decorator" to="/order_and_delivery">
                    Оплата та доставка
                </Link>
                <Link className="link_decorator" to="/lookbook">
                    Lookbook
                </Link>
                <Link className="link_decorator" to="/contact">
                    Контакти
                </Link>
                <Link className="link_decorator" to="/favorite">
                    Вибране
                </Link>
            </div>
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

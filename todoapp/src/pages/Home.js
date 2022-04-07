import React from "react";
import FilterContainer from "../components/filter/FilterContainer";
import Header from "../components/header/Header";
import ListNews from "../components/news/ListNews";


class Home extends React.Component {
    render() {
        return (
            <div className="container">
                <Header />
                <FilterContainer />
                <ListNews />
            </div>
        );
    }
}

export default Home;
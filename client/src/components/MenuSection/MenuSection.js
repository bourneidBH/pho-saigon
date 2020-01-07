import React from "react";
import API from "../../utils/API.js";
import "./MenuSection.css";
import Container from "../Container";
import MenuItem from "../MenuItem";

class MenuSection extends React.Component {
    state = {
        menu: [],
    }

    // Method to get all menu items from database
    loadMenuItems = () => {
        API.getMenuItems()
        .then(res => {
            this.setState({menu: res.data});
            console.log("menu items: ", res.data);
        })
        .catch(err => console.log(err))
    };

    // Lifecycle method runs loadMenuItems when component mounts
    componentDidMount() {
        this.loadMenuItems()
    };

    render() {
        return (
            <div>
                {this.state.menu.map((MenuCategory, index) => (
                    <Container key={index}>
                        <div className="inner">
                            <h3>{MenuCategory.categoryName}</h3>

                            {MenuCategory.categoryItems.map((item, i) => (
                                <MenuItem 
                                key={i}
                                menuItemId={item.menuItemId}
                                itemName={item.itemName}
                                itemNameVietnamese={item.itemNameVietnamese}
                                description={item.description}
                                categoryName={item.categoryName}
                                price={item.price}
                                image={item.image} 
                                />
                            ))}
                        </div>
                    </Container>
                ))}
            </div>
        )
    };
};

export default MenuSection;


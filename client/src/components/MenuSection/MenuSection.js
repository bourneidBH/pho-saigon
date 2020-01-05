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
                {/* {this.state.menu.map(MenuCategory => (
                    <Container key={MenuCategory._id}>
                        <div className="inner">
                        <h3>{MenuCategory.categoryName}</h3>

                        {this.state.menu.map(MenuCategory => (
                            <MenuItem key={MenuCategory.categoryItems._id} 
                            menuItemId={MenuCategory.categoryItems.menuItemId}
                            itemName={MenuCategory.categoryItems.itemName}
                            itemNameVietnamese={MenuCategory.categoryItems.itemNameVietnamese}
                            description={MenuCategory.categoryItems.description}
                            price={MenuCategory.categoryItems.price}
                            image={MenuCategory.categoryItems.image}
                            />
                        ))}
                        </div>
                    </Container>
                ))} */}
                <Container>
                    <div className="inner">
                        <h3>Appetizers</h3>
                        {this.state.menu.map(menuItem => {
                            if (menuItem.categoryName === "Appetizers") {
                            return <MenuItem key={menuItem._id}
                                menuItemId={menuItem.menuItemId}
                                itemName={menuItem.itemName}
                                itemNameVietnamese={menuItem.itemNameVietnamese}
                                description={menuItem.description}
                                categoryName={menuItem.categoryName}
                                price={menuItem.price}
                                image={menuItem.image}
                            />
                            }
                        })}
                    </div>
                </Container>
            </div>
        )
    };
};

export default MenuSection;


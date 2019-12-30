import React from "react";
import API from "../../utils/API.js";
import "./MenuSection.css";
// import Container from "../Container";
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
                        <h2>{MenuCategory.categoryName}</h2>

                        {this.state.menu.map(MenuCategory => (
                        <MenuItem key={MenuCategory.categoryItem.menuItemId} 
                        menuItemId={MenuCategory.categoryItem.menuItemId}
                        itemName={MenuCategory.categoryItem.itemName}
                        itemNameVietnamese={MenuCategory.categoryItem.itemNameVietnamese}
                        description={MenuCategory.categoryItem.description}
                        price={MenuCategory.categoryItem.price}
                        image={MenuCategory.categoryItem.image}
                        />
                    ))}
                    </Container>
                ))} */}
                {this.state.menu.map(menuItem => (
                    <MenuItem key={menuItem._id}
                        menuItemId={menuItem.menuItemId}
                        itemName={menuItem.itemName}
                        itemNameVietnamese={menuItem.itemNameVietnamese}
                        description={menuItem.description}
                        price={menuItem.price}
                        image={menuItem.image}
                    />
                ))}
            </div>
        )
    };
};

export default MenuSection;


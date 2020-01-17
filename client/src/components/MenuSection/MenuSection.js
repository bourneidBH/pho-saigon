import React from "react";
import API from "../../utils/API.js";
import "./MenuSection.css";
import Container from "../Container";
import MenuItem from "../MenuItem";
import ItemOptionsForm from "../ItemOptionsForm";

class MenuSection extends React.Component {
    constructor(props) {
        super(props) 

        this.handleOptionChange = this.handleOptionChange.bind(this);
    
    };

    state = {
        menu: [],
    };


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

    handleOptionChange = event => {
        this.setState({[event.target.name]: event.target.checked});
    };
      
    render() {
        return (
            <div>
                {this.state.menu.map(MenuCategory => (
                    <Container key={MenuCategory._id}>
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

                                { ...item.options.length > 0 ?
                                    <div className="row">
                                        <div className="col-md-12">
                                            <p><strong>Options:</strong></p>
                                            {item.options.map((option, index) => (
                                                <ItemOptionsForm
                                                key={index}
                                                optionName={option.optionName}
                                                optionPrice={option.optionPrice}
                                                handleOptionChange={this.handleOptionChange}
                                                />
                                            ))}
                                        </div>
                                    </div> : null
                                }

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


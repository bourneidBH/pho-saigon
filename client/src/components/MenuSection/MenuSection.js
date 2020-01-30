import React from "react";
import API from "../../utils/API.js";
import "./MenuSection.css";
import Container from "../Container";
import MenuItem from "../MenuItem";
import ItemOptionsForm from "../ItemOptionsForm";

class MenuSection extends React.Component {
    constructor(props) {
        super(props) 

        this.state = {
            menu: [],
            order: [],
            itemId: null,
            itemName: null,
            checked: false,
        };

        this.handleOptionChange = this.handleOptionChange.bind(this);
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
        this.setState(prevState => (
            {checked: !prevState.checked}
            ), () => {
                console.log("checked: ", this.state.checked);
            }
        );

        if (this.state.checked) {
            this.setState({[event.target.name]: event.target.checked});
            console.log("option checked: ", event.target.value);

            for (let i = 0; i < this.state.order.length; i++) {
                if (event.target.name === this.state.order[i].itemId) {
                
                    this.state.order[i].options.push(event.target.value);
                    console.log("chosen options: ", this.state.order[i].options);
                };
            };
        };
    };

    // callback function to get info from child button component
    getButtonInfo = (menuItemId, itemName) => {

        this.setState({
            itemId: menuItemId,
            itemName: itemName,
        });

        console.log("item id: ", menuItemId);

        //add item to order array
        this.state.order.push({
            itemId: menuItemId,
            itemName: itemName,
            options: []
        });
        console.log("order", this.state.order);
    };
      
    render() {        
        return (
            <div>
                {this.state.menu.map(MenuCategory => (
                    <Container key={MenuCategory._id}>
                        <div className="inner">
                            <h3>{MenuCategory.categoryName}</h3>

                            {MenuCategory.categoryItems.map((item, i) => (
                                <div key={i}>
                                    <MenuItem 
                                    menuItemId={item.menuItemId}
                                    itemName={item.itemName}
                                    itemNameVietnamese={item.itemNameVietnamese}
                                    description={item.description}
                                    categoryName={item.categoryName}
                                    price={item.price}
                                    image={item.image}
                                    callback={this.getButtonInfo}
                                    />

                                    {item.options.length > 0 ?
                                    <div className="row">
                                        <div className="col-md-12">
                                            <p><strong>Options:</strong></p>
                                            {item.options.map((option, index) => (
                                                <ItemOptionsForm
                                                key={index}
                                                menuItemId={item.menuItemId}
                                                optionType={option.optionType}
                                                optionName={option.optionName}
                                                optionPrice={option.optionPrice}
                                                checked={this.checked}
                                                handleOptionChange={this.handleOptionChange}
                                                />
                                            ))}
                                        </div>
                                    </div> : null
                                    }

                                </div>
                            ))}
                        </div>
                    </Container>
                ))}
            </div>
        )
    };
};

export default MenuSection;